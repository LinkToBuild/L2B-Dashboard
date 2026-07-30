import { 
  CampaignReportItem, MPInfoCardData, CampaignPerformanceData, 
  ChannelDistributionData, LeadScoreData 
} from "../types";

export const mockCampaignReport: CampaignReportItem[] = [
  { name: "Name 1", status: "Active", channel: "1", goal: "Engagements", targetSize: "10k", actualSize: "9.8k", impression: "98%", click: "30%", engagement: "20%", conversion: "5%", cpc: "70", cpa: "10", revenue: "90,000" },
  { name: "Name 2", status: "Schedule", channel: "+3", goal: "Conversion", targetSize: "10k", actualSize: "2.6k", impression: "98%", click: "30%", engagement: "-", conversion: "-", cpc: "-", cpa: "-", revenue: "-" },
  { name: "Name 3", status: "Completed", channel: "+3", goal: "Click", targetSize: "10k", actualSize: "1.3k", impression: "98%", click: "30%", engagement: "20%", conversion: "5%", cpc: "70", cpa: "10", revenue: "90,000" },
  { name: "Name 4", status: "Active", channel: "+3", goal: "Conversion", targetSize: "10k", actualSize: "7.7k", impression: "98%", click: "30%", engagement: "-", conversion: "-", cpc: "-", cpa: "-", revenue: "-" },
  { name: "Name 5", status: "Completed", channel: "+3", goal: "Click", targetSize: "10k", actualSize: "1k", impression: "98%", click: "30%", engagement: "20%", conversion: "5%", cpc: "70", cpa: "10", revenue: "90,000" },
  { name: "Name 6", status: "Active", channel: "1", goal: "Conversion", targetSize: "10k", actualSize: "2k", impression: "98%", click: "30%", engagement: "-", conversion: "-", cpc: "-", cpa: "-", revenue: "-" },
  { name: "Name 7", status: "Active", channel: "1", goal: "Click", targetSize: "10k", actualSize: "8k", impression: "98%", click: "30%", engagement: "20%", conversion: "5%", cpc: "70", cpa: "10", revenue: "90,000" },
];

export const mockMPInfoCards: MPInfoCardData[] = [
  { title: "Total Impression", Stats: "12,091", percentage: -20.89, information: "Total number of times your ads or content were displayed to users." },
  { title: "Total Clicks", Stats: "10,091", percentage: -20.89, information: "Total number of times users clicked on your ads or links." },
  { title: "Conversion Rate", Stats: "19%", percentage: -20.89, information: "Percentage of clicks that resulted in a successful action or lead." },
  { title: "Cost per Acquisition", Stats: "₹1209", percentage: -20.89, information: "Average cost spent on marketing to acquire a single customer." },
  { title: "Revenue Generated", Stats: "₹9,039", percentage: -20.89, information: "Total income generated directly from these marketing campaigns." },
];

export const mockCampaignPerformance: CampaignPerformanceData[] = [
  { day: "3", campaign1: 21000, campaign2: 11000, campaign3: 9000, campaign4: 15000, campaign5: 8000, campaign6: 12000 },
  { day: "5", campaign1: 26000, campaign2: 11000, campaign3: 9500, campaign4: 16000, campaign5: 8500, campaign6: 12500 },
  { day: "8", campaign1: 22000, campaign2: 11000, campaign3: 10000, campaign4: 14500, campaign5: 9000, campaign6: 13000 },
  { day: "10", campaign1: 24000, campaign2: 11000, campaign3: 10500, campaign4: 17000, campaign5: 9200, campaign6: 14000 },
  { day: "13", campaign1: 28000, campaign2: 12000, campaign3: 11000, campaign4: 18000, campaign5: 10000, campaign6: 15000 },
  { day: "15", campaign1: 31000, campaign2: 33000, campaign3: 14000, campaign4: 21000, campaign5: 12000, campaign6: 18000 },
  { day: "18", campaign1: 40000, campaign2: 28000, campaign3: 16000, campaign4: 24000, campaign5: 14000, campaign6: 20000 },
  { day: "20", campaign1: 34000, campaign2: 15000, campaign3: 13000, campaign4: 20000, campaign5: 11000, campaign6: 16000 },
  { day: "23", campaign1: 36000, campaign2: 5000, campaign3: 12000, campaign4: 19000, campaign5: 10500, campaign6: 15500 },
  { day: "25", campaign1: 38000, campaign2: 7000, campaign3: 12500, campaign4: 20500, campaign5: 11500, campaign6: 16500 },
  { day: "28", campaign1: 30000, campaign2: 22000, campaign3: 13500, campaign4: 18500, campaign5: 12500, campaign6: 17500 },
  { day: "30", campaign1: 26000, campaign2: 29000, campaign3: 14500, campaign4: 19500, campaign5: 13000, campaign6: 18500 },
];

export const mockChannelDistribution: ChannelDistributionData[] = [
  { groupLabel: "Cost & Percentage", meta: 40000, google: 6000, linkedin: 51000, sms: 6000, push: 46000, email: 40000, inapp: 38000 },
];

export const mockLeadScore: LeadScoreData[] = [
  { organic: 8000, paid: 2000 }, { organic: 35000, paid: 10000 }, { organic: 39000, paid: 12000 }, { organic: 35000, paid: 10000 }, { organic: 13000, paid: 4000 }, { organic: 16000, paid: 5000 }, { organic: 35000, paid: 10000 }, { organic: 24000, paid: 6000 }, { organic: 30000, paid: 9000 }, { organic: 35000, paid: 10000 }, { organic: 28000, paid: 8000 }, { organic: 34000, paid: 10000 },
];