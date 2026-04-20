import { create } from 'zustand';
import { CustomerState } from '../types';
import { MOCK_ORDERS, PAYMENT_DATA, INFO_CARDS_DATA, CUSTOMER_SIDEBOARD_DATA } from '../api/mockdata';

export const useCustomerStore = create<CustomerState>((set) => ({
  orders: [],
  paymentData: [],
  infoCardsData: [],
  customerData: [],
  isLoading: true,
  fetchOrders: async () => {
    set({ isLoading: true });
    // Load all data into the store simultaneously 
    setTimeout(() => {
      set({ 
        orders: MOCK_ORDERS,
        paymentData: PAYMENT_DATA,
        infoCardsData: INFO_CARDS_DATA,
        customerData: CUSTOMER_SIDEBOARD_DATA,
        isLoading: false 
      });
    }, 800);
  },
}));