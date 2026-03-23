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