export interface CampaignReportItem {
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

export interface MPInfoCardData {
  title: string;
  Stats: string;
  percentage: number;
  information: string;
}

export interface CampaignPerformanceData {
  day: string;
  campaign1: number;
  campaign2: number;
  campaign3: number;
  campaign4: number;
  campaign5: number;
  campaign6: number;
}

export interface ChannelDistributionData {
  groupLabel: string;
  meta: number;
  google: number;
  linkedin: number;
  sms: number;
  push: number;
  email: number;
  inapp: number;
}

export interface LeadScoreData {
  organic: number;
  paid: number;
}