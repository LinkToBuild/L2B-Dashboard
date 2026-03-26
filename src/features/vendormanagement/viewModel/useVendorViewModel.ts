import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query"; // Assuming you use TanStack Query
import { VendorStat, InventoryItem, OrderItem } from "../types";
import { useVendorStore } from "../state/useVendorStore";

// Temporarily keeping your mock data here until the backend is ready.
// In the future, this file will just call your API instead!
import {
  mockCustomerData,
  mockMaterials,
  mockOrders,
  mockInfoCardsData,
} from "../api/mockData";



export const useVendorViewModel = () => {
  const store = useVendorStore();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1. Read filters directly from the URL (defaults to 'rental' and 'all')
  const currentTab = searchParams.get("tab") || "Rental";
  const currentFilter = searchParams.get("filter") || "all";
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const indStartDate = searchParams.get("indStartDate");
  const indEndDate = searchParams.get("indEndDate");
  const indFilter = searchParams.get("indFilter") || "Daily";
  const indSearch = searchParams.get("indSearch") || "";

  // 2. Helper to update the URL (which forces the page to grab new data)
  const setUrlFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key); // Allow clearing parameters like dates
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  // 3. "Fetch" Data (Simulated API Call)
  // When the URL changes, React Query will automatically refetch using these keys!
  const { data: vendorData, isLoading } = useQuery({
    queryKey: ["vendors", currentTab, currentFilter, startDate],
    queryFn: async () => {
      return {
        stats: mockCustomerData as VendorStat[],
        inventory: mockMaterials as InventoryItem[],
        orders: mockOrders as OrderItem[],
      };
    },
    initialData: { stats: [], inventory: [], orders: [] },
  });

  return {
    
    ...store,
    // State
    currentTab,
    currentFilter,
    startDate,
    endDate,
    isLoading,

    // Data
    stats: vendorData.stats,
    inventory: vendorData.inventory,
    orders: vendorData.orders,
    infoCards: mockInfoCardsData,

    indStartDate, 
    indEndDate, 
    indFilter, 
    indSearch,

    // Actions
    setUrlFilter,
  };
};
