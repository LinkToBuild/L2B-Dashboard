import { create } from 'zustand';
import { OrderRow, CustomerMetric, InfoCardData, PaymentData } from '../types';
import { MOCK_ORDERS, CUSTOMER_SIDEBOARD_DATA, INFO_CARDS_DATA, PAYMENT_DATA } from '../api/mockData';

interface CustomerState {
  orders: OrderRow[];
  customerMetrics: CustomerMetric[];
  infoCards: InfoCardData[];
  paymentData: PaymentData[];
  isLoading: boolean;
}

export const useCustomerStore = create<CustomerState>(() => ({
  orders: MOCK_ORDERS,
  customerMetrics: CUSTOMER_SIDEBOARD_DATA,
  infoCards: INFO_CARDS_DATA,
  paymentData: PAYMENT_DATA,
  isLoading: false,
}));