import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";
import { mockInventoryTableData, mockInventoryCards } from "../api/mockData"; // <-- Import the API!
import { useInventoryStore } from "../states/useInventoryStore";

export function useInventoryViewModel() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentTab = searchParams.get("tab") || "Rental";
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const currentFilter = searchParams.get("filter") || "all";
  const searchQuery = searchParams.get("search") || "";
  
  const { tableData, infoCards, isLoading, fetchInventoryData } = useInventoryStore();

  const setUrlFilter = useCallback(
    (key: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) params.set(key, value);
      else params.delete(key);
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  // Return the mock data alongside the URL state
return {
    currentTab,
    startDate,
    endDate,
    currentFilter,
    searchQuery,
    infoCards,     // Now coming from Zustand
    tableData,     // Now coming from Zustand
    isLoading,     // Now coming from Zustand
    setUrlFilter,
  };
}