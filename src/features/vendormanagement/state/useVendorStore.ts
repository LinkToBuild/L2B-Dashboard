import { create } from 'zustand';

import { 
  VendorIndividualStat, 
  VendorPaymentPieData, 
  VendorPerformanceData, 
  VendorDetailedBooking 
} from '../types';

import { 
  mockVendorIndividualStats, 
  mockVendorPaymentData, 
  mockVendorPerformanceData, 
  mockVendorDetailedBookings 
} from '../api/mockData';

interface VendorState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedRows: string[]; 
  setSelectedRows: (rows: string[]) => void;
  individualStats: VendorIndividualStat[];
  paymentData: VendorPaymentPieData[];
  performanceData: VendorPerformanceData[];
  detailedBookings: VendorDetailedBooking[];
}

export const useVendorStore = create<VendorState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  selectedRows: [],
  setSelectedRows: (rows) => set({ selectedRows: rows }),
  individualStats: mockVendorIndividualStats,
  paymentData: mockVendorPaymentData,
  performanceData: mockVendorPerformanceData,
  detailedBookings: mockVendorDetailedBookings,
}));