import { create } from 'zustand';
import { 
  TicketItem, AreaChartData, DonutChartData, 
  InfoCardData, DeptPerformanceData, EscalatedData 
} from '../types';
import { 
  mockTicketData, mockPerformanceArea, mockDonutData, 
  mockInfoCardsData, mockDeptPerformance, mockEscalatedTickets 
} from '../api/mockData';

interface TicketsState {
  tickets: TicketItem[];
  performanceArea: AreaChartData[];
  donutData: DonutChartData[];
  infoCards: InfoCardData[];
  deptPerformance: DeptPerformanceData[];
  escalatedTickets: EscalatedData[];
  isLoading: boolean;
  fetchTicketsData: () => Promise<void>;
}

export const useTicketsStore = create<TicketsState>((set) => ({
  tickets: mockTicketData,
  performanceArea: mockPerformanceArea,
  donutData: mockDonutData,
  infoCards: mockInfoCardsData,
  deptPerformance: mockDeptPerformance,
  escalatedTickets: mockEscalatedTickets,
  isLoading: false,

  fetchTicketsData: async () => {
    set({ isLoading: true });
    // Simulate API call
    setTimeout(() => {
      set({ isLoading: false });
    }, 500);
  }
}));