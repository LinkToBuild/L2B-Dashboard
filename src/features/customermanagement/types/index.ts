export type OrderStatus =
  | "Completed"
  | "Started"
  | "Arrived"
  | "Extended"
  | "Canceled";

export interface OrderRow {
  status: OrderStatus;
  orderId: string;
  equipment: string;
  capacity: string;
  bookingDate: string;
  startsOn: string;
  endOn: string;
  extended: string;
  firstLocation: string;
  secondLocation: string;
  customerId: string;
  vendorId: string;
  operatorId: string;
  ratings: string;
  payment: string;
  coupon: string;
}

export interface PaymentData {
  method: string;
  percentage: number;
  fill: string;
}

export interface InfoCardData {
  title: string;
  Stats: string;
  percentage: number;
  information: string;
}

export interface CustomerMetric {
  label: string;
  percentage_change: number;
  trend: "up" | "down";
  value: string;
}

import type { DemandZone } from "./demandMap";

export type { DemandLevel, DemandZone } from "./demandMap";
export { DEMAND_LEVEL_COLOR } from "./demandMap";

/** Zustand store contract for Customer Management (MVVM Model layer). */
export interface CustomerState {
  orders: OrderRow[];
  paymentData: PaymentData[];
  infoCardsData: InfoCardData[];
  customerData: CustomerMetric[];
  demandZones: DemandZone[];
  isLoading: boolean;
  /** Loads the full customer overview payload (orders + widgets + map zones). */
  fetchCustomerDashboard: () => Promise<void>;
}
