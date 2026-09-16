import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { DESIGN_REGISTRY, designTokens } from "./designs";
import {
  DEFAULT_CONFIG,
  flattenSlides,
  guardedTriggerData,
  metadataPointer,
  normalizeConfig,
  thumbnailPath,
} from "./model";
import type {
  CardConfig,
  HassState,
  HomeAssistantLike,
  PresentationResponse,
  PresentationSlide,
  ThumbnailState,
} from "./types";

interface SignPathResponse {
  path?: string;
  signed_path?: string;
}

type CardError = { message: string; stale?: boolean } | null;

export class ProPresenterPresentationCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      color: var(--primary-text-color);
    }

    .card {
      box-sizing: border-box;
      padding: var(--pp-card-padding);
      border-radius: var(--pp-card-radius);
      background: var(--pp-surface);
      overflow: hidden;
    }

    .toolbar,
    .status-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .toolbar {
      justify-content: space-between;
      margin-bottom: 12px;
    }

    .heading {
      min-width: 0;
    }

    h2,
    p {
      margin: 0;
    }

    h2 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 1.05rem;
    }

    .subtitle,
    .muted,
    .notes {
      color: var(--pp-muted);
      font-size: 0.78rem;
    }

    .toolbar-actions {
      display: flex;
      flex: 0 0 auto;
      gap: 6px;
    }

    button {
      border: 0;
      border-radius: 999px;
      color: var(--primary-text-color);
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.14));
      cursor: pointer;
      font: inherit;
      padding: 7px 10px;
    }

    button:hover {
      background: color-mix(in srgb, var(--pp-accent) 18%, transparent);
    }

    button:disabled {
      cursor: wait;
      opacity: 0.62;
    }

    .banner {
      border-radius: 10px;
      margin: 0 0 10px;
      padding: 8px 10px;
      font-size: 0.8rem;
    }

    .banner.warning {
      background: color-mix(in srgb, #ffb300 22%, transparent);
    }

    .banner.error {
      background: color-mix(in srgb, #f44336 18%, transparent);
    }

    .groups {
      display: grid;
      gap: 14px;
    }

    .slide-browser {
      max-height: var(--pp-browser-height);
      overflow-x: hidden;
      overflow-y: auto;
      padding-right: 4px;
      overscroll-behavior: contain;
      scrollbar-gutter: stable;
      -webkit-overflow-scrolling: touch;
    }

    .slide-browser.no-scroll {
      max-height: none;
      overflow: visible;
      padding-right: 0;
    }

    .group-title {
      margin: 0 0 7px;
      color: var(--pp-muted);
      font-size: 0.78rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(var(--pp-columns), minmax(0, 1fr));
      gap: var(--pp-gap);
    }

    .tile {
      position: relative;
      min-width: 0;
      padding: 0;
      border: 2px solid transparent;
      border-radius: var(--pp-tile-radius);
      overflow: hidden;
      text-align: left;
      background: var(--pp-tile-surface);
    }

    .tile.active {
      border-color: var(--pp-accent);
      box-shadow: 0 0 0 1px color-mix(in srgb, var(--pp-accent) 35%, transparent);
    }

    .tile.disabled {
      cursor: not-allowed;
      filter: grayscale(0.5);
      opacity: 0.52;
    }

    .thumbnail {
      aspect-ratio: 16 / 9;
      display: grid;
      place-items: center;
      background: var(--secondary-background-color, #e8e8e8);
      color: var(--pp-muted);
      font-size: 0.75rem;
    }

    .thumbnail img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .tile-content {
      display: grid;
      gap: 2px;
      padding: 8px;
    }

    .tile-label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.82rem;
      font-weight: 600;
    }

    .tile-index {
      color: var(--pp-muted);
      font-size: 0.7rem;
    }

    .pending {
      position: absolute;
      top: 7px;
      right: 7px;
      border-radius: 999px;
      padding: 3px 6px;
      background: var(--pp-accent);
      color: var(--text-primary-color, white);
      font-size: 0.68rem;
    }

    @media (max-width: 520px) {
      .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
  `;

  private _config: CardConfig = { entity: "", ...DEFAULT_CONFIG };
  private _hass?: HomeAssistantLike;
  private _metadata: PresentationResponse | null = null;
  private _metadataPromise: Promise<void> | null = null;
  private _metadataRequestKey = "";
  private _metadataRequestSequence = 0;
  private _thumbnailUrls = new Map<number, string>();
  private _thumbnailStates = new Map<number, ThumbnailState>();
  private _thumbnailQueue: number[] = [];
  private _thumbnailActive = 0;
  private _thumbnailControllers = new Set<AbortController>();
  private _intersectionObserver?: IntersectionObserver;
  private _followingLive = true;
  private _pendingIndex: number | null = null;
  private _pendingTimer?: number;
  private _error: CardError = null;
  private _statusMessage = "";
  private _lastStatePointer = "";
  private _lastCurrentIndex: number | null = null;

  set hass(value: HomeAssistantLike) {
    const oldState = this._state();
    this._hass = value;
    const newState = this._state();
    const pointer = metadataPointer(newState);
    if (pointer !== this._lastStatePointer) {
      this._lastStatePointer = pointer;
      this._metadata = null;
      this._clearThumbnailUrls();
      void this._loadMetadata(false);
    }
    const currentIndex = this._currentIndex(newState);
    if (currentIndex !== this._lastCurrentIndex) {
      this._lastCurrentIndex = currentIndex;
      if (this._pendingIndex === currentIndex) {
        this._clearPending("Live cue confirmed");
      }
      if (this._followingLive) {
        this._scrollToActive();
      }
    }
    if (oldState !== newState) {
      this.requestUpdate();
    }
  }

  get hass(): HomeAssistantLike | undefined {
    return this._hass;
  }

  setConfig(config: CardConfig): void {
    this._config = normalizeConfig(config);
    this._followingLive = this._config.follow_live ?? true;
    this._metadataRequestKey = "";
    this._clearThumbnailUrls();
    this._error = null;
    this.requestUpdate();
  }

  getCardSize(): number {
    return 5;
  }

  static getConfigForm() {
    return {
      schema: [
        {
          name: "entity",
          required: true,
          selector: { entity: { domain: "sensor", integration: "propresenter" } },
        },
        {
          name: "design",
          selector: {
            select: {
              options: Object.entries(DESIGN_REGISTRY).map(([value, item]) => ({
                value,
                label: item.label,
              })),
            },
          },
        },
        {
          name: "columns",
          selector: {
            select: {
              options: [
                { value: "auto", label: "Responsive" },
                { value: 2, label: "2 columns" },
                { value: 3, label: "3 columns" },
                { value: 4, label: "4 columns" },
                { value: 5, label: "5 columns" },
              ],
            },
          },
        },
        {
          name: "browser_height",
          selector: {
            number: {
              min: 240,
              max: 1200,
              step: 20,
              mode: "box",
            },
          },
        },
        { name: "internal_scroll", selector: { boolean: {} } },
        {
          name: "thumbnail_quality",
          selector: {
            select: {
              options: [
                { value: 200, label: "Fast (200)" },
                { value: 400, label: "Balanced (400)" },
                { value: 800, label: "Detailed (800)" },
              ],
            },
          },
        },
        { name: "show_group_labels", selector: { boolean: {} } },
        { name: "show_slide_labels", selector: { boolean: {} } },
        { name: "show_slide_numbers", selector: { boolean: {} } },
        { name: "show_notes", selector: { boolean: {} } },
        { name: "read_only", selector: { boolean: {} } },
        { name: "confirm_trigger", selector: { boolean: {} } },
        { name: "follow_live", selector: { boolean: {} } },
      ],
    };
  }

  static getStubConfig(): CardConfig {
    return { type: "custom:propresenter-presentation", entity: "" };
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._intersectionObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const index = Number((entry.target as HTMLElement).dataset.slideIndex);
          if (Number.isInteger(index)) {
            this._queueThumbnail(index);
          }
        }
      }
    });
  }

  disconnectedCallback(): void {
    this._intersectionObserver?.disconnect();
    this._clearThumbnailUrls();
    if (this._pendingTimer !== undefined) {
      window.clearTimeout(this._pendingTimer);
    }
    super.disconnectedCallback();
  }

  protected updated(changed: PropertyValues): void {
    super.updated(changed);
    if (!this._intersectionObserver) return;
    this.renderRoot.querySelectorAll<HTMLElement>("[data-slide-index]").forEach((item) => {
      this._intersectionObserver?.observe(item);
    });
    if (this._followingLive) {
      this._scrollToActive();
    }
  }

  render() {
    const state = this._state();
    const attributes = state?.attributes ?? {};
    const slideLayerActive = typeof attributes.slide_layer_active === "boolean"
      ? attributes.slide_layer_active
      : this._metadata?.slide_layer_active ?? true;
    const presentationName = state?.state && !["unknown", "unavailable"].includes(state.state)
      ? state.state
      : this._metadata?.presentation_name ??
        this._stringAttribute(attributes.presentation_name) ??
        this._stringAttribute(attributes.friendly_name) ??
        "ProPresenter";
    const groups = this._metadata?.groups ?? [];
    const columns = this._config.columns === "auto" || this._config.columns === undefined
      ? "auto-fit"
      : String(this._config.columns);
    const browserHeight = this._config.browser_height ?? DEFAULT_CONFIG.browser_height;
    const tokens = `${designTokens(this._config.design)} --pp-columns: ${columns}; --pp-browser-height: ${browserHeight}px;`;

    return html`
      <article class="card" style=${tokens}>
        <div class="toolbar">
          <div class="heading">
            <h2>${presentationName}</h2>
            <p class="subtitle">${this._subtitle(attributes)}</p>
          </div>
          <div class="toolbar-actions">
            <button @click=${this._toggleFollow} title="Follow the live cue">
              ${this._followingLive ? "Following" : "Browse"}
            </button>
            <button @click=${this._refresh} title="Refresh presentation metadata">↻</button>
          </div>
        </div>
        ${!slideLayerActive ? html`<div class="banner warning">Output cleared · the active cue is still shown below</div>` : nothing}
        ${this._error ? html`<div class="banner error">${this._error.message}</div>` : nothing}
        ${this._statusMessage ? html`<div class="banner">${this._statusMessage}</div>` : nothing}
        ${this._metadata?.protocol_version !== undefined && this._metadata.protocol_version !== 1
          ? html`<div class="banner error">This card needs a newer integration protocol.</div>`
          : nothing}
        ${groups.length
          ? html`<div
              class=${this._config.internal_scroll === false ? "slide-browser no-scroll" : "slide-browser"}
              role="region"
              aria-label="Presentation slides"
            ><div class="groups">${groups.map((group) => html`
              <section>
                ${this._config.show_group_labels ? html`<h3 class="group-title">${group.label}</h3>` : nothing}
                <div class="grid">
                  ${group.slides.map((slide) => this._renderSlide(slide))}
                </div>
              </section>
            `)}</div></div>`
          : html`<p class="muted">${this._metadata?.metadata_available === false || !this._metadata ? "Loading presentation slides…" : "No active presentation"}</p>`}
      </article>
    `;
  }

  private _renderSlide(slide: PresentationSlide) {
    const active = this._currentIndex(this._state()) === slide.index;
    const disabled = slide.enabled === false;
    const triggerable = !this._config.read_only && !disabled && !this._isEditorPreview();
    const classes = `tile ${active ? "active" : ""} ${disabled ? "disabled" : ""}`;
    const content = html`
      <div class="thumbnail" data-slide-index=${slide.index}>
        ${this._thumbnailUrls.has(slide.index)
          ? html`<img src=${this._thumbnailUrls.get(slide.index)!} alt=${slide.label} />`
          : html`<span>${this._thumbnailPlaceholder(slide.index)}</span>`}
      </div>
      <div class="tile-content">
        ${this._config.show_slide_labels ? html`<span class="tile-label">${slide.label}</span>` : nothing}
        ${this._config.show_slide_numbers ? html`<span class="tile-index">Slide ${slide.index + 1}${disabled ? " · disabled" : ""}</span>` : nothing}
        ${this._config.show_notes && slide.notes ? html`<span class="notes">${slide.notes}</span>` : nothing}
      </div>
      ${this._pendingIndex === slide.index ? html`<span class="pending">Pending</span>` : nothing}
    `;
    return triggerable
      ? html`<button id=${this._slideId(slide.index)} class=${classes} @click=${() => this._trigger(slide)}>${content}</button>`
      : html`<div id=${this._slideId(slide.index)} class=${classes} aria-disabled="true">${content}</div>`;
  }

  private async _loadMetadata(refresh: boolean): Promise<void> {
    if (!this._hass || !this._config.entity) return;
    if (this._metadataPromise) return this._metadataPromise;
    const state = this._state();
    const pointer = metadataPointer(state);
    if (!refresh && pointer === this._metadataRequestKey) return;
    this._metadataRequestKey = pointer;
    const sequence = ++this._metadataRequestSequence;
    const promise = (async () => {
      try {
        const result = await this._hass!.callWS<PresentationResponse>({
          type: "propresenter/get_active_presentation",
          entity_id: this._config.entity,
          refresh,
        });
        if (sequence !== this._metadataRequestSequence) return;
        if (result.protocol_version !== 1) {
          this._error = { message: "The integration and card protocol versions do not match" };
          return;
        }
        this._clearThumbnailUrls();
        this._metadata = result;
        this._error = null;
        this._statusMessage = "";
        this.requestUpdate();
      } catch (error) {
        if (sequence !== this._metadataRequestSequence) return;
        this._error = { message: this._errorMessage(error) };
        this.requestUpdate();
      }
    })();
    this._metadataPromise = promise;
    try {
      await promise;
    } finally {
      if (this._metadataPromise === promise) this._metadataPromise = null;
    }
  }

  private _queueThumbnail(index: number): void {
    if (
      !this._metadata?.metadata_available ||
      this._thumbnailUrls.has(index) ||
      this._thumbnailStates.get(index) === "loading" ||
      this._thumbnailStates.get(index) === "loaded"
    ) {
      return;
    }
    this._thumbnailStates.set(index, "loading");
    this._thumbnailQueue.push(index);
    this._drainThumbnailQueue();
  }

  private _drainThumbnailQueue(): void {
    while (this._thumbnailActive < 4 && this._thumbnailQueue.length) {
      const index = this._thumbnailQueue.shift()!;
      this._thumbnailActive += 1;
      void this._fetchThumbnail(index).finally(() => {
        this._thumbnailActive -= 1;
        this._drainThumbnailQueue();
      });
    }
  }

  private async _fetchThumbnail(index: number): Promise<void> {
    const metadata = this._metadata;
    if (!metadata?.metadata_available || !metadata.presentation_uuid || !metadata.metadata_revision) {
      this._thumbnailStates.set(index, "error");
      return;
    }
    const path = thumbnailPath(
      this._config.entity,
      metadata.presentation_uuid,
      index,
      this._config.thumbnail_quality ?? 400,
      metadata.metadata_revision,
    );
    const identity = `${metadata.presentation_uuid}|${metadata.metadata_revision}`;
    const controller = new AbortController();
    this._thumbnailControllers.add(controller);
    try {
      const signed = await this._hass!.callWS<SignPathResponse>({
        type: "auth/sign_path",
        path,
        expires: 60,
      });
      const signedPath = signed.path ?? signed.signed_path;
      if (!signedPath) throw new Error("Home Assistant did not return a signed thumbnail path");
      const response = await fetch(this._hass!.hassUrl(signedPath), {
        credentials: "same-origin",
        signal: controller.signal,
      });
      if ((response.status === 401 || response.status === 403)) {
        const retry = await this._hass!.callWS<SignPathResponse>({
          type: "auth/sign_path",
          path,
          expires: 60,
        });
        const retryPath = retry.path ?? retry.signed_path;
        if (!retryPath) throw new Error("Thumbnail authorization expired");
        const retryResponse = await fetch(this._hass!.hassUrl(retryPath), {
          credentials: "same-origin",
          signal: controller.signal,
        });
        if (!retryResponse.ok) throw new Error(`Thumbnail request failed (${retryResponse.status})`);
        this._setThumbnailUrl(
          index,
          URL.createObjectURL(await retryResponse.blob()),
          identity,
        );
        return;
      }
      if (!response.ok) {
        if (response.status === 409) {
          await this._loadMetadata(true);
        }
        throw new Error(`Thumbnail request failed (${response.status})`);
      }
      this._setThumbnailUrl(
        index,
        URL.createObjectURL(await response.blob()),
        identity,
      );
    } catch (error) {
      if (controller.signal.aborted) return;
      this._thumbnailStates.set(index, "error");
      this._error = { message: this._errorMessage(error) };
      this.requestUpdate();
    } finally {
      this._thumbnailControllers.delete(controller);
    }
  }

  private _setThumbnailUrl(index: number, url: string, identity: string): void {
    const currentIdentity = this._metadata
      ? `${this._metadata.presentation_uuid}|${this._metadata.metadata_revision}`
      : "";
    if (!this.isConnected || currentIdentity !== identity) {
      URL.revokeObjectURL(url);
      return;
    }
    const old = this._thumbnailUrls.get(index);
    if (old) URL.revokeObjectURL(old);
    this._thumbnailUrls.set(index, url);
    this._thumbnailStates.set(index, "loaded");
    this.requestUpdate();
  }

  private async _trigger(slide: PresentationSlide): Promise<void> {
    if (this._config.read_only || slide.enabled === false || this._isEditorPreview() || !this._hass) return;
    if (this._config.confirm_trigger && !window.confirm(`Trigger “${slide.label}”?`)) return;
    const metadata = this._metadata;
    if (!metadata?.presentation_uuid || !metadata.metadata_revision) {
      this._error = { message: "Refresh the presentation before triggering a slide" };
      this.requestUpdate();
      return;
    }
    this._pendingIndex = slide.index;
    this._statusMessage = "Command pending · waiting for live confirmation";
    this._error = null;
    this.requestUpdate();
    try {
      await this._hass.callService(
        "propresenter",
        "trigger_slide",
        guardedTriggerData(
          this._config.entity,
          slide.index,
          metadata.presentation_uuid,
          metadata.metadata_revision,
        ),
      );
      this._pendingTimer = window.setTimeout(() => {
        if (this._pendingIndex === slide.index) {
          this._pendingIndex = null;
          this._statusMessage = "Trigger sent, but live confirmation is unavailable";
          this.requestUpdate();
        }
      }, 5000);
    } catch (error) {
      this._pendingIndex = null;
      this._statusMessage = "";
      const message = this._errorMessage(error);
      const stale = /stale|changed|revision|uuid/i.test(message);
      this._error = { message: stale ? "The presentation changed; refreshing slides" : `Trigger failed: ${message}`, stale };
      this.requestUpdate();
      if (stale) await this._loadMetadata(true);
    }
  }

  private _refresh = (): void => {
    void this._loadMetadata(true);
  };

  private _toggleFollow = (): void => {
    this._followingLive = !this._followingLive;
    if (this._followingLive) this._scrollToActive();
    this.requestUpdate();
  };

  private _scrollToActive(): void {
    const index = this._currentIndex(this._state());
    if (index === null) return;
    queueMicrotask(() => {
      const target = this.renderRoot.querySelector<HTMLElement>(`#${this._slideId(index)}`);
      if (!target) return;
      const browser = this.renderRoot.querySelector<HTMLElement>(".slide-browser");
      if (!browser || this._config.internal_scroll === false) {
        target.scrollIntoView({ behavior: "smooth", block: "nearest" });
        return;
      }
      const browserRect = browser.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const targetTop = targetRect.top - browserRect.top + browser.scrollTop;
      const targetBottom = targetTop + targetRect.height;
      const visibleTop = browser.scrollTop;
      const visibleBottom = visibleTop + browser.clientHeight;
      const margin = 12;
      if (targetTop < visibleTop) {
        browser.scrollTo({ top: Math.max(0, targetTop - margin), behavior: "smooth" });
      } else if (targetBottom > visibleBottom) {
        browser.scrollTo({
          top: Math.min(browser.scrollHeight - browser.clientHeight, targetBottom - browser.clientHeight + margin),
          behavior: "smooth",
        });
      }
    });
  }

  private _clearPending(message: string): void {
    this._pendingIndex = null;
    this._statusMessage = message;
    if (this._pendingTimer !== undefined) window.clearTimeout(this._pendingTimer);
    this._pendingTimer = undefined;
    this.requestUpdate();
  }

  private _clearThumbnailUrls(): void {
    for (const controller of this._thumbnailControllers) controller.abort();
    this._thumbnailControllers.clear();
    for (const url of this._thumbnailUrls.values()) URL.revokeObjectURL(url);
    this._thumbnailUrls.clear();
    this._thumbnailStates.clear();
    this._thumbnailQueue = [];
  }

  private _state(): HassState | undefined {
    return this._hass?.states?.[this._config.entity];
  }

  private _currentIndex(state: HassState | undefined): number | null {
    const value = state?.attributes?.current_index;
    return typeof value === "number" ? value : Number.isInteger(Number(value)) ? Number(value) : null;
  }

  private _stringAttribute(value: unknown): string | null {
    return typeof value === "string" && value ? value : null;
  }

  private _subtitle(attributes: Record<string, unknown>): string {
    const index = this._currentIndex(this._state());
    const count = typeof this._metadata?.slide_count === "number"
      ? this._metadata.slide_count
      : typeof attributes.slide_count === "number" ? attributes.slide_count : null;
    const label = this._stringAttribute(attributes.current_label) ?? this._metadata?.current_slide_label;
    const position = index !== null && count !== null ? `${index + 1} / ${count}` : "";
    return [position, label].filter(Boolean).join(" · ") || "Waiting for ProPresenter";
  }

  private _thumbnailPlaceholder(index: number): string {
    const state = this._thumbnailStates.get(index);
    return state === "error" ? "Thumbnail unavailable" : "Loading thumbnail…";
  }

  private _slideId(index: number): string {
    return `propresenter-slide-${index}`;
  }

  private _isEditorPreview(): boolean {
    let node: Node | null = this;
    while (node) {
      if (node instanceof Element) {
        const name = node.localName;
        if (name.includes("preview") || name.includes("editor")) return true;
      }
      if (node instanceof ShadowRoot) {
        node = node.host;
      } else {
        node = node.parentNode;
      }
    }
    return false;
  }

  private _errorMessage(error: unknown): string {
    if (error instanceof Error) return error.message;
    if (typeof error === "string") return error;
    return "Home Assistant could not complete the request";
  }
}

if (!customElements.get("propresenter-presentation")) {
  customElements.define("propresenter-presentation", ProPresenterPresentationCard);
}

const customCards = ((window as Window & { customCards?: unknown[] }).customCards ??= []) as Array<Record<string, unknown>>;
if (!customCards.some((item) => item.type === "propresenter-presentation")) {
  customCards.push({
    type: "propresenter-presentation",
    name: "ProPresenter Presentation",
    description: "A dynamic, guarded ProPresenter slide browser",
    preview: true,
    documentationURL: "https://github.com/media-dotcom/lovelace-propresenter-presentation",
  });
}
