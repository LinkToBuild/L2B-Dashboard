import { create } from 'zustand';

interface VendorState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedRows: string[]; 
  setSelectedRows: (rows: string[]) => void;
}

export const useVendorStore = create<VendorState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  selectedRows: [],
  setSelectedRows: (rows) => set({ selectedRows: rows }),
}));