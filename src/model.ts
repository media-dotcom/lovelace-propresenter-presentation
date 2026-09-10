import type {
  CardConfig,
  HassState,
  PresentationGroup,
  PresentationSlide,
} from "./types";

export const DEFAULT_CONFIG: Required<
  Omit<CardConfig, "type" | "entity" | "columns">
> & { columns: number | "auto" } = {
  design: "grid",
  columns: "auto",
  thumbnail_quality: 400,
  show_group_labels: true,
  show_slide_labels: true,
  show_slide_numbers: true,
  show_notes: false,
  read_only: false,
  confirm_trigger: false,
  follow_live: true,
};

export function normalizeConfig(config: CardConfig): CardConfig {
  if (!config || typeof config.entity !== "string" || !config.entity) {
    throw new Error("You must select a ProPresenter active-presentation sensor");
  }
  return {
    ...DEFAULT_CONFIG,
    ...config,
    design: config.design && config.design in { grid: true } ? config.design : "grid",
  };
}

export function flattenSlides(groups: PresentationGroup[]): PresentationSlide[] {
  return groups.flatMap((group) => group.slides);
}

export function metadataPointer(state: HassState | undefined): string {
  const attributes = state?.attributes ?? {};
  return [
    attributes.presentation_uuid ?? "",
    attributes.metadata_revision ?? "",
    attributes.metadata_available ?? false,
  ].join("|");
}

export function thumbnailPath(
  entityId: string,
  presentationUuid: string,
  slideIndex: number,
  quality: number,
  revision: string,
): string {
  return `/api/propresenter/thumbnail/${encodeURIComponent(entityId)}/${encodeURIComponent(
    presentationUuid,
  )}/${slideIndex}?quality=${encodeURIComponent(quality)}&revision=${encodeURIComponent(revision)}`;
}

export function guardedTriggerData(
  entityId: string,
  slideIndex: number,
  presentationUuid: string | null,
  metadataRevision: string | null,
): Record<string, unknown> {
  if (!presentationUuid || !metadataRevision) {
    throw new Error("A current presentation UUID and metadata revision are required");
  }
  return {
    entity_id: entityId,
    slide_index: slideIndex,
    expected_presentation_uuid: presentationUuid,
    expected_metadata_revision: metadataRevision,
  };
}
