import type { Feature, FeatureCollection, Polygon, Position } from "geojson";
import type { GeoJSONSource, Map } from "maplibre-gl";
import { DEMAND_LEVEL_COLOR, type DemandZone } from "../../types";

const SOURCE_ID = "demand-zones";
const FILL_LAYER_ID = "demand-zones-fill";
const OUTLINE_LAYER_ID = "demand-zones-outline";

/** Approximate geodesic circle as a GeoJSON polygon (no turf dependency). */
function circlePolygon(
  center: [number, number],
  radiusMeters: number,
  steps = 64,
): Polygon {
  const [lng, lat] = center;
  const coords: Position[] = [];
  const latRad = (lat * Math.PI) / 180;

  for (let i = 0; i <= steps; i++) {
    const bearing = (i / steps) * 2 * Math.PI;
    const dLat = (radiusMeters * Math.cos(bearing)) / 110540;
    const dLng =
      (radiusMeters * Math.sin(bearing)) / (111320 * Math.cos(latRad));
    coords.push([lng + dLng, lat + dLat]);
  }

  return { type: "Polygon", coordinates: [coords] };
}

export function demandZonesToGeoJSON(
  zones: DemandZone[],
): FeatureCollection<Polygon> {
  const features: Feature<Polygon>[] = zones.map((zone) => ({
    type: "Feature",
    properties: {
      id: zone.id,
      label: zone.label,
      level: zone.level,
      color: DEMAND_LEVEL_COLOR[zone.level],
    },
    geometry: circlePolygon(zone.center, zone.radiusMeters),
  }));

  return { type: "FeatureCollection", features };
}

/**
 * Industry pattern: keep the MapLibre instance alive; upsert GeoJSON.
 * Call this whenever zone data changes — do not remount the map.
 */
export function syncDemandZoneLayers(map: Map, zones: DemandZone[]): void {
  if (!map.isStyleLoaded()) return;

  const data = demandZonesToGeoJSON(zones);
  const existing = map.getSource(SOURCE_ID) as GeoJSONSource | undefined;

  if (existing) {
    existing.setData(data);
    return;
  }

  map.addSource(SOURCE_ID, { type: "geojson", data });

  map.addLayer({
    id: FILL_LAYER_ID,
    type: "fill",
    source: SOURCE_ID,
    paint: {
      "fill-color": ["get", "color"],
      "fill-opacity": 0.35,
    },
  });

  map.addLayer({
    id: OUTLINE_LAYER_ID,
    type: "line",
    source: SOURCE_ID,
    paint: {
      "line-color": ["get", "color"],
      "line-width": 1.5,
      "line-opacity": 0.7,
    },
  });
}

export function removeDemandZoneLayers(map: Map): void {
  if (map.getLayer(OUTLINE_LAYER_ID)) map.removeLayer(OUTLINE_LAYER_ID);
  if (map.getLayer(FILL_LAYER_ID)) map.removeLayer(FILL_LAYER_ID);
  if (map.getSource(SOURCE_ID)) map.removeSource(SOURCE_ID);
}
