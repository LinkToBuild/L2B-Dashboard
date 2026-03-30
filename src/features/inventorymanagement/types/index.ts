// Define the exact shape of a row in your table
export interface InventoryItem {
  name: string;
  capacity: string;
  brand: string;
  analysis: "High Value" | "Medium Value" | "Low Value"; 
  quantity: string;
  hasQuantityAlert: boolean;
  cost: string;
  fuel: string;
  operatorFee: string;
  vendors: string;
  searchRate: string;
}

// Define the exact shape of the top stats cards
export interface InventoryInfoCard {
  title: string;
  Stats: string;
  percentage: number;
  information: string;
}