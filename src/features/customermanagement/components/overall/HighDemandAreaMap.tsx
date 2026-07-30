"use client";

import React, { useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import type { Map } from "maplibre-gl";
import { LegendData } from "@/shared/components/Legend";
import { InfoTip } from "@/shared/excomponent/ui/InfoTip";
import type { MapViewReadyHandler } from "@/shared/maps/MapView";
import { DEMAND_LEVEL_COLOR, type DemandZone } from "../../types";
import {
  removeDemandZoneLayers,
  syncDemandZoneLayers,
} from "./demandZoneLayers";

const MapView = dynamic(
  () => import("@/shared/maps/MapView").then((m) => m.MapView),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-neutral-7 text-[12px] text-neutral-3">
        Loading map…
      </div>
    ),
  },
);

export interface DemandMapViewModel {
  center: [number, number];
  zoom: number;
  zones: DemandZone[];
  isZonesLoading: boolean;
}

interface HighDemandAreaMapProps {
  /** Derived map model from useCustomerViewModel — never fetch here. */
  demandMap: DemandMapViewModel;
  showTitle?: boolean;
}

/**
 * Presentational map widget (industry dashboard pattern):
 * 1) Mount basemap once
 * 2) Upsert overlay GeoJSON when `zones` change
 * 3) No data fetching inside the view
 */
export function HighDemandAreaMap({
  demandMap,
  showTitle = true,
}: HighDemandAreaMapProps) {
  const { center, zoom, zones, isZonesLoading } = demandMap;
  const mapRef = useRef<Map | null>(null);
  const zonesRef = useRef(zones);
  zonesRef.current = zones;

  const handleReady = useCallback<MapViewReadyHandler>((map) => {
    mapRef.current = map;
    syncDemandZoneLayers(map, zonesRef.current);
    return () => {
      removeDemandZoneLayers(map);
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    syncDemandZoneLayers(map, zones);
  }, [zones]);

  return (
    <div className="flex w-[270px] shrink-0 flex-col gap-[10px]">
      {showTitle && (
        <div className="flex items-center gap-2">
          <p className="text-[24px] font-normal text-neutral-1">
            High Demand Area
          </p>
          <InfoTip label="Geographic demand concentration for the selected period." />
        </div>
      )}

      <div className="flex h-[354px] w-full flex-col overflow-hidden rounded-[12px] border border-neutral-5 bg-white">
        <div className="relative h-[260px] w-full shrink-0 bg-neutral-7">
          <MapView center={center} zoom={zoom} onReady={handleReady} />
          {isZonesLoading ? (
            <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center">
              <span className="rounded bg-white/90 px-2 py-0.5 text-[10px] text-neutral-3 shadow-sm">
                Loading demand data…
              </span>
            </div>
          ) : null}
        </div>
        <div className="flex flex-wrap justify-between gap-2 p-4">
          <LegendData color={DEMAND_LEVEL_COLOR.high} label="High Demand" />
          <LegendData color={DEMAND_LEVEL_COLOR.less} label="Less Demand" />
          <LegendData
            color={DEMAND_LEVEL_COLOR.slightlyLess}
            label="Slightly Less Demand"
          />
        </div>
      </div>
    </div>
  );
}
