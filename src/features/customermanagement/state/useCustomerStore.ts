import { create } from "zustand";
import { CustomerState } from "../types";
import {
  MOCK_ORDERS,
  PAYMENT_DATA,
  INFO_CARDS_DATA,
  CUSTOMER_SIDEBOARD_DATA,
  MOCK_DEMAND_ZONES,
} from "../api/mockdata";

export const useCustomerStore = create<CustomerState>((set) => ({
  orders: [],
  paymentData: [],
  infoCardsData: [],
  customerData: [],
  demandZones: [],
  isLoading: true,
  fetchCustomerDashboard: async () => {
    set({ isLoading: true });
    // Mock latency — replace body with real API client later
    await new Promise((r) => setTimeout(r, 800));
    set({
      orders: MOCK_ORDERS,
      paymentData: PAYMENT_DATA,
      infoCardsData: INFO_CARDS_DATA,
      customerData: CUSTOMER_SIDEBOARD_DATA,
      demandZones: MOCK_DEMAND_ZONES,
      isLoading: false,
    });
  },
}));
