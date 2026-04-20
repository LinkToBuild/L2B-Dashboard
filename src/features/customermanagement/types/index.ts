
export type OrderStatus = "Completed" | "Started" | "Arrived" | "Extended" | "Canceled";

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

export interface CustomerState {
  orders: OrderRow[];
  isLoading: boolean;
  fetchOrders: () => Promise<void>;
}

export interface PaymentData {
  method: string;
  percentage: number;
  fill: string;
}

export interface InfoCardData {
  title: string;
  Stats: string; // Keeping your exact casing
  percentage: number;
  information: string;
}

export interface CustomerMetric {
  label: string;
  percentage_change: number;
  trend: "up" | "down";
  value: string;
}

// Add these to your main CustomerState if you haven't already:
export interface CustomerState {
  // ... existing order types ...
  paymentData: PaymentData[];
  infoCardsData: InfoCardData[];
  customerData: CustomerMetric[];
  // ...
}