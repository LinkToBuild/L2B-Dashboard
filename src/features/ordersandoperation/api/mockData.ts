import { OrderItem, MatrixChartData, InfoCardData, SupplyDemandData } from "../types";

export const mockOrders: OrderItem[] = [
  { status: "Completed", orderId: "#ORD-88293", equipment: "Mobile Crane", capacity: "10 Tons", bookingDate: "12/03/2026 (12:30)", startsOn: "12/03/2026 (12:30)", endOn: "14/03/2026 (12:30)", extended: "14/03/2026 (12:30)", firstLocation: "HPM HQ, Banga...", secondLocation: "-", customerId: "V-OD-12345", vendorId: "V-OD-12345", operatorId: "op-12345X-S", ratings: "5.0", payment: "COD", coupon: "FIRSTBUY50" },
  { status: "Started", orderId: "#ORD-88294", equipment: "Truck", capacity: "20 Tons", bookingDate: "12/03/2026", startsOn: "-", endOn: "-", extended: "-", firstLocation: "HPM HQ, Banga...", secondLocation: "WXP HQ, Ban...", customerId: "V-OD-12346", vendorId: "V-OD-12346", operatorId: "op-12346X-S", ratings: "-", payment: "Online", coupon: "-" },
  { status: "Arrived", orderId: "#ORD-88295", equipment: "Truck", capacity: "20 Tons", bookingDate: "12/03/2026", startsOn: "12/03/2026", endOn: "14/03/2026", extended: "-", firstLocation: "HPM HQ, Banga...", secondLocation: "WXP HQ, Ban...", customerId: "V-OD-12347", vendorId: "V-OD-12347", operatorId: "op-12347X-S", ratings: "-", payment: "Online", coupon: "-" },
  { status: "Completed", orderId: "#ORD-88296", equipment: "Mobile Crane", capacity: "20 Tons", bookingDate: "12/03/2026", startsOn: "12/03/2026", endOn: "14/03/2026", extended: "-", firstLocation: "HPM HQ, Banga...", secondLocation: "-", customerId: "V-OD-12348", vendorId: "V-OD-12348", operatorId: "op-12348X-S", ratings: "-", payment: "Online", coupon: "-" },
  { status: "Completed", orderId: "#ORD-88297", equipment: "Truck", capacity: "20 Tons", bookingDate: "12/03/2026", startsOn: "12/03/2026", endOn: "14/03/2026", extended: "-", firstLocation: "HPM HQ, Banga...", secondLocation: "WXP HQ, Ban...", customerId: "V-OD-12349", vendorId: "V-OD-12349", operatorId: "op-12349X-S", ratings: "-", payment: "Online", coupon: "-" },
  { status: "Completed", orderId: "#ORD-88298", equipment: "Truck", capacity: "20 Tons", bookingDate: "12/03/2026", startsOn: "12/03/2026", endOn: "14/03/2026", extended: "-", firstLocation: "HPM HQ, Banga...", secondLocation: "WXP HQ, Ban...", customerId: "V-OD-12350", vendorId: "V-OD-12350", operatorId: "op-12350X-S", ratings: "-", payment: "Online", coupon: "-" },
  { status: "Extended", orderId: "#ORD-88299", equipment: "Truck", capacity: "20 Tons", bookingDate: "12/03/2026", startsOn: "12/03/2026", endOn: "14/03/2026", extended: "14/03/2026 (12:30)", firstLocation: "HPM HQ, Banga...", secondLocation: "WXP HQ, Ban...", customerId: "V-OD-12351", vendorId: "V-OD-12351", operatorId: "op-12351X-S", ratings: "-", payment: "Online", coupon: "-" },
];

export const mockMatrixChartData: MatrixChartData[] = [
  { day: "0", grossSale: 2500 }, { day: "3", grossSale: 2200 }, { day: "5", grossSale: 2700 }, { day: "8", grossSale: 2300 }, { day: "10", grossSale: 2400 }, { day: "12", grossSale: 2900 }, { day: "15", grossSale: 3300 }, { day: "18", grossSale: 4100 }, { day: "20", grossSale: 3400 }, { day: "22", grossSale: 3700 }, { day: "23", grossSale: 3400 }, { day: "25", grossSale: 3800 }, { day: "28", grossSale: 3800 }, { day: "30", grossSale: 3800 },
];

export const mockInfoCards1: InfoCardData[] = [
  { title: "Gross Sale", Stats: "₹9,844", percentage: -20.89, information: "Total gross sales for the selected period." },
  { title: "Net Sale", Stats: "₹ 987", percentage: -20.89, information: "Total net sales after deductions." },
];

export const mockInfoCards2: InfoCardData[] = [
  { title: "Error Rate", Stats: "9%", percentage: -20.89, information: "Percentage of orders processed with errors." },
  { title: "Perfect Order Rate", Stats: "89%", percentage: -20.89, information: "Percentage of orders completed without any issues." },
];

export const mockSupplyDemandData: SupplyDemandData[] = [
  { name: "Excavators", availability: 3800, requirement: 1200 }, { name: "Wheel Loader", availability: 2700, requirement: 900 }, { name: "Backhoe Loader", availability: 2000, requirement: 600 }, { name: "Bulldozer", availability: 3000, requirement: 1000 }, { name: "Trailers", availability: 3300, requirement: 1100 }, { name: "Trucks", availability: 500, requirement: 3400 }, { name: "Tipper", availability: 2600, requirement: 800 }, { name: "Transit Mixer", availability: 2600, requirement: 800 }, { name: "Lift", availability: 2200, requirement: 700 }, { name: "Crane", availability: 4800, requirement: 300 }, { name: "Borewell", availability: 2200, requirement: 700 }, { name: "Dewatering Pumps", availability: 2600, requirement: 800 }, { name: "Generators", availability: 3300, requirement: 1100 }, { name: "Compactors", availability: 3800, requirement: 1200 }, { name: "Self Loader", availability: 4400, requirement: 0 },
];