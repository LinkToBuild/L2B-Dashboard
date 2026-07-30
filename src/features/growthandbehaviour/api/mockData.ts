import { 
  GBSearchRow, GBLocationStat, GrowthMetricsPoint, 
  GBStatCard, GBRFMItem, GBFunnelBarRow, GBFunnelMetrics 
} from "../types";

export const mockSearchData: GBSearchRow[] = [
  { searches: "Cranes", location: "1", users: "77", clicks: "54", noResult: "-" },
  { searches: "Cement and aggregates", location: "3+", users: "54", clicks: "22", noResult: "-" },
  { searches: "When users repeatedly place orders and then cancel", location: "6+", users: "22", clicks: "-", noResult: "22" },
  { searches: "This is the most direct term used in E-commerce and ...", location: "7+", users: "-", clicks: "-", noResult: "85" },
  { searches: "Construction", location: "8+", users: "64", clicks: "64", noResult: "-" },
];

export const mockLocationStats: GBLocationStat[] = [
  { label: "Andhra Pradesh", value: 89, width: "w-[92%]" },
  { label: "Karnataka", value: 67, width: "w-[63%]" },
];

export const mockGrowthChartData: GrowthMetricsPoint[] = [
  { day: 1, visitors: 2500, all: 2500, andhraPradesh: 2200, vijayawada: 2100, karnataka: 2300, tamilNadu: 2050, maharashtra: 2400, telangana: 1980, kerala: 1850, delhi: 2150 },
  { day: 5, visitors: 2450, all: 2450, andhraPradesh: 2180, vijayawada: 2060, karnataka: 2280, tamilNadu: 2010, maharashtra: 2360, telangana: 1940, kerala: 1820, delhi: 2110 },
  { day: 10, visitors: 2450, all: 2450, andhraPradesh: 2230, vijayawada: 2100, karnataka: 2320, tamilNadu: 2080, maharashtra: 2380, telangana: 2000, kerala: 1880, delhi: 2180 },
  { day: 15, visitors: 3100, all: 3100, andhraPradesh: 2720, vijayawada: 2550, karnataka: 2920, tamilNadu: 2600, maharashtra: 3000, telangana: 2480, kerala: 2320, delhi: 2700 },
  { day: 20, visitors: 4100, all: 4100, andhraPradesh: 3520, vijayawada: 3300, karnataka: 3700, tamilNadu: 3400, maharashtra: 3900, telangana: 3250, kerala: 3050, delhi: 3550 },
  { day: 25, visitors: 3800, all: 3800, andhraPradesh: 3380, vijayawada: 3140, karnataka: 3520, tamilNadu: 3200, maharashtra: 3650, telangana: 3080, kerala: 2900, delhi: 3350 },
  { day: 30, visitors: 3800, all: 3800, andhraPradesh: 3380, vijayawada: 3140, karnataka: 3520, tamilNadu: 3220, maharashtra: 3680, telangana: 3100, kerala: 2920, delhi: 3380 },
];

export const mockGBStatCards: GBStatCard[] = [
  { title: "Total Visitors", value: 3444, percentage: -20.89, information: "Shows the total number of visitors." },
  { title: "Total Sessions", value: 144, percentage: -20.89, information: "Shows the total number of sessions." },
  { title: "Visitors Right Now", value: 44, percentage: -20.89, information: "Shows the number of active visitors right now." },
  { title: "Toggle Usage Rate", value: 987, percentage: -20.89, information: "Shows the usage rate of the toggle action." },
];

export const mockRFMData: GBRFMItem[] = [
  { label: "Total Users", percentage_change: -20.89, trend: "down", value: "809.8k" },
  { label: "Active", percentage_change: -20.89, trend: "down", value: "109.8k" },
  { label: "New", percentage_change: -20.89, trend: "down", value: "109.8k" },
  { label: "LTV", percentage_change: 20.89, trend: "up", value: "109k" },
  { label: "At-Risk Churn", percentage_change: 20.89, trend: "up", value: "309k" },
  { label: "Serial Cancelers", percentage_change: -20.89, trend: "down", value: "9k" },
  { label: "Dormant", percentage_change: -20.89, trend: "down", value: "109k" },
];



// ... keep your other mock data (searchData, locationStats, etc.) above this

export const mockRentalFunnel: GBFunnelBarRow[] = [
  {
    title: "Home Screen", subtitle: "Total user : 10,909",
    fields: [{ label: "Admin", value: "10,000" }, { label: "Operator", value: "909" }, { label: "Engagement", value: "90%" }],
  },
  {
    title: "Selecting SKUs", subtitle: "Total user : 10,909",
    fields: [{ label: "Admin", value: "10,000" }, { label: "Operator", value: "909" }, { label: "Engagement", value: "100%" }],
  },
  {
    title: "Work Details", subtitle: "Total user : 10,909",
    fields: [{ label: "Admin", value: "10,000" }, { label: "Operator", value: "909" }, { label: "Engagement", value: "80%" }],
  },
  {
    title: "Schedule", subtitle: "Total user : 10,909",
    fields: [{ label: "Admin", value: "10,000" }, { label: "Operator", value: "909" }, { label: "Engagement", value: "70%" }],
  },
  {
    title: "Notification", subtitle: "Total user : 10,909",
    fields: [{ label: "Admin", value: "10,000" }, { label: "Engagement", value: "60%" }],
  },
  {
    title: "Payment Mode", subtitle: "Total user : 10,909",
    fields: [{ label: "Admin", value: "10,000" }, { label: "Engagement", value: "50%" }],
  },
  {
    title: "Payment Gateway", subtitle: "Total user : 10,909",
    fields: [{ label: "Admin", value: "10,000" }, { label: "Engagement", value: "40%" }],
  },
  {
    title: "Payment Confirmation", subtitle: "Total user : 10,909",
    fields: [{ label: "Admin", value: "10,000" }, { label: "Engagement", value: "30%" }],
  },
];

export const mockMaterialFunnel: GBFunnelBarRow[] = [
  {
    title: "Home Screen", subtitle: "Total user : 10,909",
    fields: [{ label: "Admin", value: "10,000" }, { label: "Operator", value: "909" }, { label: "Engagement", value: "100%" }],
  },
  {
    title: "Selecting SKUs & Brand", subtitle: "Total user : 10,909",
    fields: [{ label: "Admin", value: "10,000" }, { label: "Operator", value: "909" }, { label: "Engagement", value: "90%" }],
  },
  {
    title: "Cart", subtitle: "Total user : 10,909",
    fields: [{ label: "Admin", value: "10,000" }, { label: "Operator", value: "909" }, { label: "Engagement", value: "80%" }],
  },
  {
    title: "Schedule", subtitle: "Total user : 10,909",
    fields: [{ label: "Admin", value: "10,000" }, { label: "Operator", value: "909" }, { label: "Engagement", value: "70%" }],
  },
  {
    title: "Notification", subtitle: "Total user : 10,909",
    fields: [{ label: "Admin", value: "10,000" }, { label: "Engagement", value: "60%" }],
  },
  {
    title: "Payment Mode", subtitle: "Total user : 10,909",
    fields: [{ label: "Admin", value: "10,000" }, { label: "Engagement", value: "50%" }],
  },
  {
    title: "Payment Gateway", subtitle: "Total user : 10,909",
    fields: [{ label: "Admin", value: "10,000" }, { label: "Engagement", value: "40%" }],
  },
  {
    title: "Payment Confirmation", subtitle: "Total user : 10,909",
    fields: [{ label: "Admin", value: "10,000" }, { label: "Engagement", value: "30%" }],
  },
];

// The metrics that sit at the bottom right of each funnel
export const mockRentalMetrics: GBFunnelMetrics = { 
  cac: "₹3000", ctr: "30%", ltv: "989", percentage: -20.89, trend: "down", since: "from 20 Feb" 
};
export const mockMaterialMetrics: GBFunnelMetrics = { 
  cac: "₹3000", ctr: "30%", ltv: "989", percentage: -20.89, trend: "down", since: "from 20 Feb" 
};

