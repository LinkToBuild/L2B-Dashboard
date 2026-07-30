export type DemandLevel = "high" | "less" | "slightlyLess";

export interface DemandZone {
  id: string;
  label: string;
  level: DemandLevel;
  /** GeoJSON Position — [longitude, latitude] */
  center: [number, number];
  /** Circle radius in meters (MapLibre circle-radius is painted in px; we convert approx). */
  radiusMeters: number;
}

export const DEMAND_LEVEL_COLOR: Record<DemandLevel, string> = {
  high: "#EB6F70",
  less: "#8DAFD1",
  slightlyLess: "#FEC869",
};
