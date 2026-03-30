import { SegmentedOrdersBarRow } from "@/shared/excomponent/charts/SegmentedBarChart";

export interface PFStatCard {
  title: string;
  Stats: string;
  percentage: number;
  information: string;
}

export interface PFPaymentModeData {
  paymentMode: string;
  count: number;
  fill: string;
}

// Re-exporting the segmented row type for cleaner imports
export type PFSegmentedBarRow = SegmentedOrdersBarRow;