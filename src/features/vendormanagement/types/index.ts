export interface VendorStat {
  label: string;
  percentage_change: number;
  trend: "up" | "down";
  value: string;
}

export interface InventoryItem {
  itemName: string;
  brand: string;
  size: string;
  units: string;
  vendors: string;
}

export interface OrderItem {
  status: "Completed" | "Started" | "Arrived" | "Extended";
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


export interface InfoCardStat {
  title: string;
  Stats: string; // Keeping your exact casing
  percentage: number;
  information: string;
}


// ... existing overall types

export interface VendorIndividualStat {
  title: string;
  Stats: string;
  percentage: number | null;
  information: string;
}

export interface VendorPaymentPieData {
  method: string;
  percentage: number;
  fill: string;
}

export interface VendorPerformanceData {
  day: string;
  score: number;
}

export interface VendorDetailedBooking {
  name: string;
  status: string;
  channel: string;
  goal: string;
  targetSize: string;
  actualSize: string;
  impression: string;
  click: string;
  engagement: string;
  conversion: string;
  cpc: string;
  cpa: string;
  revenue: string;
}