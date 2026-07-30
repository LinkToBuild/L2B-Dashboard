import { create } from 'zustand';
import { PFStatCard, PFPaymentModeData, PFSegmentedBarRow } from '../types';
import { 
  mockFinanceCardsData, mockMetricsCardsData, mockPaymentModeData, 
  mockRentalOrdersData, mockMaterialOrdersData 
} from '../api/mockData';

interface PFState {
  financeCards: PFStatCard[];
  metricsCards: PFStatCard[];
  paymentModeData: PFPaymentModeData[];
  rentalOrders: PFSegmentedBarRow[];
  materialOrders: PFSegmentedBarRow[];
  isLoading: boolean;
  fetchPFData: () => Promise<void>;
}

export const usePFStore = create<PFState>((set) => ({
  financeCards: mockFinanceCardsData,
  metricsCards: mockMetricsCardsData,
  paymentModeData: mockPaymentModeData,
  rentalOrders: mockRentalOrdersData,
  materialOrders: mockMaterialOrdersData,
  isLoading: true,

  fetchPFData: async () => {
    set({ isLoading: true });
    setTimeout(() => set({ isLoading: false }), 500);
  }
}));