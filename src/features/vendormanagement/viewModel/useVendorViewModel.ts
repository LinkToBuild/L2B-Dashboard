import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query"; // Assuming you use TanStack Query
import { VendorStat, InventoryItem, OrderItem } from "../types";

// Temporarily keeping your mock data here until the backend is ready.
// In the future, this file will just call your API instead!
import { mockCustomerData, mockMaterials, mockOrders, mockInfoCardsData } from "../api/mockData";

export const useVendorViewModel = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1. Read filters directly from the URL (defaults to 'rental' and 'all')
  const currentTab = searchParams.get("tab") || "Rental"; 
  const currentFilter = searchParams.get("filter") || "all";
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  // 2. Helper to update the URL (which forces the page to grab new data)
  const setUrlFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.push(`${pathname}?${params.toString()}`);
  };

  // 3. "Fetch" Data (Simulated API Call)
  // When the URL changes, React Query will automatically refetch using these keys!
  const { data: vendorData, isLoading } = useQuery({
    queryKey: ["vendors", currentTab, currentFilter, startDate],
    queryFn: async () => {
      // TODO: Replace with actual axios/fetch call later
      // const res = await axios.get(`/api/vendors?tab=${currentTab}...`)
      // return res.data;
      
      return {
        stats: mockCustomerData as VendorStat[],
        inventory: mockMaterials as InventoryItem[],
        orders: mockOrders as OrderItem[],
      };
    },
    initialData: { stats: [], inventory: [], orders: [] } // Safe fallback
  });

 return {
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
    infoCards: mockInfoCardsData, // <--- ADD THIS EXACT LINE
    
    // Actions
    setUrlFilter,
  };
};