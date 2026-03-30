export interface OrderItem {
  status: string;
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

export interface MatrixChartData {
  day: string;
  grossSale: number;
}

export interface InfoCardData {
  title: string;
  Stats: string;
  percentage: number;
  information: string;
}

export interface SupplyDemandData {
  name: string;
  availability: number;
  requirement: number;
}