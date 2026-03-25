import { create } from 'zustand';
import { 
  GBSearchRow, GBLocationStat, GrowthMetricsPoint, 
  GBStatCard, GBRFMItem, GBFunnelBarRow, GBFunnelMetrics 
} from '../types';
import { 
  mockSearchData, mockLocationStats, mockGrowthChartData, 
  mockGBStatCards, mockRFMData, mockRentalFunnel, mockMaterialFunnel,
  mockRentalMetrics, mockMaterialMetrics
} from '../api/mockData';

interface GBState {
  searchData: GBSearchRow[];
  locationStats: GBLocationStat[];
  growthChartData: GrowthMetricsPoint[];
  statCards: GBStatCard[];
  rfmData: GBRFMItem[];
  rentalFunnel: GBFunnelBarRow[];
  materialFunnel: GBFunnelBarRow[];
  rentalMetrics: GBFunnelMetrics;
  materialMetrics: GBFunnelMetrics;
  isLoading: boolean;
  fetchGBData: () => Promise<void>;
}

export const useGBStore = create<GBState>((set) => ({
  searchData: mockSearchData,
  locationStats: mockLocationStats,
  growthChartData: mockGrowthChartData,
  statCards: mockGBStatCards,
  rfmData: mockRFMData,
  rentalFunnel: mockRentalFunnel,
  materialFunnel: mockMaterialFunnel,
  rentalMetrics: mockRentalMetrics,
  materialMetrics: mockMaterialMetrics,
  isLoading: false,

  fetchGBData: async () => {
    set({ isLoading: true });
    setTimeout(() => set({ isLoading: false }), 500);
  }
}));