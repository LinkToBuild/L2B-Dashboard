import { create } from 'zustand';
import { InventoryItem, InventoryInfoCard } from '../types';
import { mockInventoryTableData, mockInventoryCards } from '../api/mockData';

interface InventoryState {
  tableData: InventoryItem[];
  infoCards: InventoryInfoCard[];
  isLoading: boolean;
  
  // Actions
  fetchInventoryData: () => Promise<void>;
}

export const useInventoryStore = create<InventoryState>((set) => ({
  // Initial State (Currently using mock data directly)
  tableData: mockInventoryTableData, 
  infoCards: mockInventoryCards,
  isLoading: false,

  // Future API Call Function
  fetchInventoryData: async () => {
    set({ isLoading: true });
    
    try {
      // Once you have a real API, you will fetch it here!
      // const response = await fetch('/api/inventory');
      // const data = await response.json();
      
      // Simulate network delay for now
      setTimeout(() => {
        set({ 
          tableData: mockInventoryTableData, 
          infoCards: mockInventoryCards,
          isLoading: false 
        });
      }, 500);

    } catch (error) {
      console.error("Failed to fetch inventory", error);
      set({ isLoading: false });
    }
  }
}));