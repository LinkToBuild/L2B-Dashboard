"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Map,
  NavigationControl,
  config,
  type LngLatLike,
  type StyleSpecification,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { cn } from "@/lib/utils";
import {
  BENGALURU_CENTER,
  DEFAULT_MAP_ZOOM,
  MAPTILER_API_KEY,
  getMapTilerStyleUrl,
} from "./config";

export type MapViewReadyHandler = (map: Map) => void | (() => void);

export interface MapViewProps {
  className?: string;
  center?: LngLatLike;
  zoom?: number;
  /** Invoked once the style has loaded. Return a cleanup if you added layers. */
  onReady?: MapViewReadyHandler;
  interactive?: boolean;
}

/** Serve worker from /public so Turbopack/webpack don't break tile parsing. */
function ensureMapLibreWorker() {
  if (typeof window === "undefined") return;
  if (!config.WORKER_URL) {
    config.WORKER_URL = "/workers/maplibre-gl-worker.mjs";
  }
}

/**
 * Shared MapLibre shell — style + lifecycle only.
 * Feature modules own overlays / business layers via `onReady`.
 */
export function MapView({
  className,
  center = BENGALURU_CENTER,
  zoom = DEFAULT_MAP_ZOOM,
  onReady,
  interactive = true,
}: MapViewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    ensureMapLibreWorker();

    let style: string | StyleSpecification;
    try {
      style = getMapTilerStyleUrl();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Map config error");
      return;
    }

    const apiKey = MAPTILER_API_KEY;

    const map = new Map({
      container: containerRef.current,
      style,
      center,
      zoom,
      attributionControl: { compact: true },
      interactive,
      // Ensure every MapTiler resource carries the key (tiles / glyphs / sprite).
      transformRequest: (url) => {
        if (!url.includes("api.maptiler.com") || url.includes("key=")) {
          return { url };
        }
        const joiner = url.includes("?") ? "&" : "?";
        return { url: `${url}${joiner}key=${apiKey}` };
      },
    });

    map.addControl(new NavigationControl({ showCompass: false }), "top-right");

    mapRef.current = map;
    let layerCleanup: void | (() => void);

    const handleLoad = () => {
      setError(null);
      layerCleanup = onReadyRef.current?.(map);
      map.resize();
    };

    const handleError = (e: { error?: Error; message?: string }) => {
      const msg =
        e?.error?.message || e?.message || "Failed to load map tiles";
      console.error("[MapView]", msg, e);
      setError(msg);
    };

    map.on("load", handleLoad);
    map.on("error", handleError);

    const ro = new ResizeObserver(() => {
      map.resize();
    });
    ro.observe(containerRef.current);

    return () => {
      ro.disconnect();
      map.off("load", handleLoad);
      map.off("error", handleError);
      layerCleanup?.();
      map.remove();
      mapRef.current = null;
    };
    // Intentionally mount-once; center/zoom are initial viewport only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn("relative h-full w-full min-h-0", className)}>
      <div ref={containerRef} className="h-full w-full" role="presentation" />
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-7/90 px-3 text-center text-[12px] text-danger-1">
          {error}
        </div>
      ) : null}
    </div>
  );
}
