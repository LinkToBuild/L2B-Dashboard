import { VendorIndividualStat, VendorPaymentPieData, VendorPerformanceData, VendorDetailedBooking } from "../types/index";

export const mockCustomerData = [
  { label: "Total", percentage_change: -20.89, trend: "down", value: "809.8k" },
  { label: "Active", percentage_change: -20.89, trend: "down", value: "109.8k" },
  { label: "New", percentage_change: 20.89, trend: "up", value: "109k" },
  { label: "Repeat", percentage_change: 20.89, trend: "up", value: "309k" },
  { label: "Potential", percentage_change: -20.89, trend: "down", value: "109k" },
  { label: "At Risk", percentage_change: 20.89, trend: "up", value: "10k" },
  { label: "Dormant", percentage_change: 20.89, trend: "up", value: "9k" },
];

export const mockMaterials = [
  { itemName: "Clay bricks", brand: "SVB Bricks", size: '9"×4"×3" (230×10...', units: "2000", vendors: "+9" },
  { itemName: "Clay bricks", brand: "SVB Bricks", size: '9"×4"×3" (230×10...', units: "200", vendors: "+10" },
  { itemName: "Clay bricks", brand: "SVB Bricks", size: '9"×4"×3" (230×10...', units: "1200", vendors: "+34" },
  { itemName: "Cement", brand: "UltraTech", size: "50 Kg Bag", units: "500", vendors: "+5" },
  { itemName: "Steel TMT", brand: "Tata Tiscon", size: "12mm (12m length)", units: "350", vendors: "+12" },
  { itemName: "River Sand", brand: "Local", size: "1 Ton", units: "150", vendors: "+3" },
  { itemName: "Concrete Blocks", brand: "SVB Bricks", size: "400x200x200 mm", units: "4000", vendors: "+7" },
  { itemName: "Crushed Stone", brand: "Local", size: "20mm (1 Ton)", units: "100", vendors: "+4" },
];

export const mockOrders = [
  { status: "Completed", orderId: "#ORD-88293", equipment: "Mud-pump", capacity: "10 tons", bookingDate: "12/03/2026", startsOn: "12/03/2026", endOn: "14/03/2026", extended: "14/03/2026 (12:30)", firstLocation: "HPM HQ, Banga...", secondLocation: "-", customerId: "V-OD-12345", vendorId: "V-OD-12345", operatorId: "op-12345X-S", ratings: "5.0", payment: "Online", coupon: "FIRSTBUY50" },
  { status: "Started", orderId: "#ORD-88294", equipment: "Truck", capacity: "20 tons", bookingDate: "12/03/2026", startsOn: "12/03/2026", endOn: "14/03/2026", extended: "-", firstLocation: "HPM HQ, Banga...", secondLocation: "WXP HQ, Ban...", customerId: "V-OD-12346", vendorId: "V-OD-12346", operatorId: "op-12346X-S", ratings: "-", payment: "Online", coupon: "-" },
  { status: "Arrived", orderId: "#ORD-88295", equipment: "Truck", capacity: "20 tons", bookingDate: "12/03/2026", startsOn: "12/03/2026", endOn: "14/03/2026", extended: "-", firstLocation: "HPM HQ, Banga...", secondLocation: "WXP HQ, Ban...", customerId: "V-OD-12347", vendorId: "V-OD-12347", operatorId: "op-12347X-S", ratings: "-", payment: "Online", coupon: "-" },
];

// Add this to api/mockData.ts
export const mockInfoCardsData = [
  { title: "Active Orders", Stats: "10,90,00", percentage: -20.89, information: "Total number of active orders currently in progress." },
  { title: "Completed", Stats: "90,00", percentage: -20.89, information: "Orders successfully delivered and closed." },
  { title: "Failed Orders", Stats: "203", percentage: -20.89, information: "Orders that were canceled or failed." },
  { title: "Ticket", Stats: "2009", percentage: -20.89, information: "Total support tickets raised." },
  { title: "Fulfillment Rate", Stats: "55%", percentage: -20.89, information: "Percentage of orders successfully fulfilled." },
  { title: "Ontime Delivery", Stats: "90%", percentage: -20.89, information: "Percentage of orders delivered on the scheduled date." },
  { title: "Match Rate", Stats: "20%", percentage: -20.89, information: "Percentage of successful equipment matches." },
  { title: "Commission", Stats: "₹20,09,000", percentage: -20.89, information: "Total commission earned from completed orders." },
];



export const mockVendorIndividualStats: VendorIndividualStat[] = [
  { title: "Active Bookings", Stats: "12", percentage: -20.89, information: "Total number of active bookings currently in progress." },
  { title: "Total Bookings", Stats: "134", percentage: null, information: "Cumulative count of all bookings made." },
  { title: "Total Earnings", Stats: "₹ 22,35,000", percentage: null, information: "Total revenue generated from bookings." },
  { title: "Failed Bookings", Stats: "12", percentage: -20.89, information: "Number of bookings that were not completed successfully." },
  { title: "Ticket", Stats: "203/1000", percentage: null, information: "Support tickets raised against total capacity." },
];

export const mockVendorPaymentData: VendorPaymentPieData[] = [
  { method: "crane", percentage: 20, fill: "#FEB637" },
  { method: "truck", percentage: 30, fill: "#FEB637" },
  { method: "excavator", percentage: 50, fill: "#FEB637" },
];

export const mockVendorPerformanceData: VendorPerformanceData[] = [
  { day: "1", score: 2500 }, { day: "2", score: 2200 }, { day: "3", score: 2600 }, { day: "4", score: 2400 },
  { day: "5", score: 2750 }, { day: "6", score: 2300 }, { day: "7", score: 2450 }, { day: "8", score: 2200 },
  { day: "9", score: 2500 }, { day: "10", score: 2350 }, { day: "11", score: 3000 }, { day: "12", score: 2700 },
  { day: "13", score: 3100 }, { day: "14", score: 3300 }, { day: "15", score: 3150 }, { day: "16", score: 2950 },
  { day: "17", score: 3100 }, { day: "18", score: 4100 }, { day: "19", score: 3500 }, { day: "20", score: 3750 },
  { day: "21", score: 3400 }, { day: "22", score: 3800 }, { day: "23", score: 3600 }, { day: "24", score: 3600 },
  { day: "25", score: 4000 }, { day: "26", score: 3500 }, { day: "27", score: 3650 }, { day: "28", score: 3100 },
  { day: "29", score: 3200 }, { day: "30", score: 2850 }, { day: "31", score: 3050 },
];

export const mockVendorDetailedBookings: VendorDetailedBooking[] = [
  { name: "Name 1", status: "Active", channel: "1", goal: "Engagements", targetSize: "10k", actualSize: "9.8k", impression: "98%", click: "30%", engagement: "20%", conversion: "5%", cpc: "70", cpa: "10", revenue: "90,000" },
  { name: "Name 2", status: "Schedule", channel: "+3", goal: "Conversion", targetSize: "10k", actualSize: "2.6k", impression: "98%", click: "30%", engagement: "-", conversion: "-", cpc: "-", cpa: "-", revenue: "-" },
  { name: "Name 3", status: "Completed", channel: "+3", goal: "Click", targetSize: "10k", actualSize: "1.3k", impression: "98%", click: "30%", engagement: "20%", conversion: "5%", cpc: "70", cpa: "10", revenue: "90,000" },
  { name: "Name 4", status: "Active", channel: "+3", goal: "Conversion", targetSize: "10k", actualSize: "7.7k", impression: "98%", click: "30%", engagement: "-", conversion: "-", cpc: "-", cpa: "-", revenue: "-" },
  { name: "Name 5", status: "Completed", channel: "+3", goal: "Click", targetSize: "10k", actualSize: "1k", impression: "98%", click: "30%", engagement: "20%", conversion: "5%", cpc: "70", cpa: "10", revenue: "90,000" },
  { name: "Name 6", status: "Active", channel: "1", goal: "Conversion", targetSize: "10k", actualSize: "2k", impression: "98%", click: "30%", engagement: "-", conversion: "-", cpc: "-", cpa: "-", revenue: "-" },
  { name: "Name 7", status: "Active", channel: "1", goal: "Click", targetSize: "10k", actualSize: "8k", impression: "98%", click: "30%", engagement: "20%", conversion: "5%", cpc: "70", cpa: "10", revenue: "90,000" },
];