import { create } from 'zustand';
import { 
  CampaignReportItem, MPInfoCardData, CampaignPerformanceData, 
  ChannelDistributionData, LeadScoreData 
} from '../types';
import { 
  mockCampaignReport, mockMPInfoCards, mockCampaignPerformance, 
  mockChannelDistribution, mockLeadScore 
} from '../api/mockData';

interface MPState {
  campaignReport: CampaignReportItem[];
  infoCards: MPInfoCardData[];
  campaignPerformance: CampaignPerformanceData[];
  channelDistribution: ChannelDistributionData[];
  leadScore: LeadScoreData[];
  isLoading: boolean;
  fetchMPData: () => Promise<void>;
}

export const useMPStore = create<MPState>((set) => ({
  campaignReport: mockCampaignReport,
  infoCards: mockMPInfoCards,
  campaignPerformance: mockCampaignPerformance,
  channelDistribution: mockChannelDistribution,
  leadScore: mockLeadScore,
  isLoading: false,

  fetchMPData: async () => {
    set({ isLoading: true });
    setTimeout(() => {
      set({ isLoading: false });
    }, 500);
  }
}));