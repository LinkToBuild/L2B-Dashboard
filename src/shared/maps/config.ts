/**
 * Central MapTiler / MapLibre configuration (infra — not feature state).
 *
 * Production notes:
 * - Key is NEXT_PUBLIC_ because MapLibre runs in the browser; restrict by HTTP
 *   referrer in the MapTiler dashboard.
 * - Worker is served from /public/workers so Next/Turbopack does not break
 *   vector-tile parsing (blank cream map = worker failure).
 */

export const MAPTILER_API_KEY =
  process.env.NEXT_PUBLIC_MAPTILER_KEY?.trim() ?? "";

/** Streets v4 vector style (MapLibre-compatible). */
export function getMapTilerStyleUrl(apiKey = MAPTILER_API_KEY): string {
  if (!apiKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_MAPTILER_KEY. Add it to .env.local (see env.example).",
    );
  }
  return `https://api.maptiler.com/maps/streets-v4/style.json?key=${apiKey}`;
}

/** Bengaluru CBD — [lng, lat] (MapLibre order). */
export const BENGALURU_CENTER: [number, number] = [77.5946, 12.9716];

export const DEFAULT_MAP_ZOOM = 12.2;
