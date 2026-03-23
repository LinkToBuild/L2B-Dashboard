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