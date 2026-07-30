import { FunnelBarRow } from "@/shared/excomponent/charts/FunnelChart";
import { SideBoardItem } from "@/shared/components/SideBoard";

export interface GBSearchRow {
  searches: string;
  location: string;
  users: string;
  clicks: string;
  noResult: string;
}

export interface GBLocationStat {
  label: string;
  value: number;
  width: string;
}

export interface GrowthMetricsPoint {
  day: number;
  visitors: number;
  all: number;
  andhraPradesh: number;
  vijayawada: number;
  karnataka: number;
  tamilNadu: number;
  maharashtra: number;
  telangana: number;
  kerala: number;
  delhi: number;
}

export interface GBStatCard {
  title: string;
  value: number;
  percentage: number;
  information: string;
}

export interface GBFunnelMetrics {
  cac: string;
  ctr: string;
  ltv: string;
  percentage: number;
  trend: "up" | "down";
  since: string;
}

// Re-exporting shared types for easy access in the feature
export type GBFunnelBarRow = FunnelBarRow;
export type GBRFMItem = SideBoardItem;