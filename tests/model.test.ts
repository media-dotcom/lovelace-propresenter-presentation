import { describe, expect, it } from "vitest";
import {
  flattenSlides,
  guardedTriggerData,
  metadataPointer,
  normalizeConfig,
  thumbnailPath,
} from "../src/model";

describe("presentation card model", () => {
  it("keeps repeated groups and original disabled-slide indexes", () => {
    const groups = [
      {
        key: "song#0",
        label: "Chorus",
        color: "blue",
        slides: [
          { index: 0, group_key: "song#0", label: "One", notes: null, enabled: true, color: null },
        ],
      },
      {
        key: "song#1",
        label: "Chorus",
        color: "green",
        slides: [
          { index: 1, group_key: "song#1", label: "Disabled", notes: null, enabled: false, color: null },
          { index: 2, group_key: "song#1", label: "Three", notes: "note", enabled: true, color: null },
        ],
      },
    ];
    expect(flattenSlides(groups).map((slide) => slide.index)).toEqual([0, 1, 2]);
    expect(groups[0].key).not.toBe(groups[1].key);
  });

  it("creates stable pointer and signed thumbnail path values", () => {
    expect(metadataPointer({ attributes: { presentation_uuid: "u", metadata_revision: "r", metadata_available: true } })).toBe("u|r|true");
    expect(thumbnailPath("sensor.pp", "uuid", 5, 400, "opaque revision")).toContain("/uuid/5?quality=400&revision=opaque%20revision");
  });

  it("defaults to one safe grid configuration", () => {
    expect(normalizeConfig({ entity: "sensor.pp" })).toMatchObject({
      entity: "sensor.pp",
      design: "grid",
      browser_height: 560,
      internal_scroll: true,
      thumbnail_quality: 400,
      read_only: false,
      follow_live: true,
    });
  });

  it("keeps the browser height within tablet-friendly limits", () => {
    expect(normalizeConfig({ entity: "sensor.pp", browser_height: 100 })).toMatchObject({
      browser_height: 240,
    });
    expect(normalizeConfig({ entity: "sensor.pp", browser_height: 1400 })).toMatchObject({
      browser_height: 1200,
    });
    expect(normalizeConfig({ entity: "sensor.pp", browser_height: Number.NaN })).toMatchObject({
      browser_height: 560,
    });
  });

  it("always includes both stale-click guards in a trigger payload", () => {
    expect(guardedTriggerData("sensor.pp", 5, "uuid", "revision")).toEqual({
      entity_id: "sensor.pp",
      slide_index: 5,
      expected_presentation_uuid: "uuid",
      expected_metadata_revision: "revision",
    });
    expect(() => guardedTriggerData("sensor.pp", 5, "uuid", null)).toThrow();
  });
});
