import { create } from 'zustand';
import { OrderItem, MatrixChartData, InfoCardData, SupplyDemandData } from '../types';
import { mockOrders, mockMatrixChartData, mockInfoCards1, mockInfoCards2, mockSupplyDemandData } from '../api/mockData';

interface OrdersState {
  orders: OrderItem[];
  matrixChartData: MatrixChartData[];
  infoCards1: InfoCardData[];
  infoCards2: InfoCardData[];
  supplyDemandData: SupplyDemandData[];
  isLoading: boolean;
  fetchOrdersData: () => Promise<void>;
}

export const useOrdersStore = create<OrdersState>((set) => ({
  orders: mockOrders,
  matrixChartData: mockMatrixChartData,
  infoCards1: mockInfoCards1,
  infoCards2: mockInfoCards2,
  supplyDemandData: mockSupplyDemandData,
  isLoading: true,

  fetchOrdersData: async () => {
    set({ isLoading: true });
    setTimeout(() => {
      set({ isLoading: false });
    }, 500);
  }
}));