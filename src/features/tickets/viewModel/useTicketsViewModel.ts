import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useTicketsStore } from "../states/useTicketsStore";

export function useTicketsViewModel() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { 
    tickets, performanceArea, donutData, infoCards, 
    deptPerformance, escalatedTickets, isLoading, fetchTicketsData 
  } = useTicketsStore();

  useEffect(() => {
    fetchTicketsData();
  }, [fetchTicketsData]);

  const searchQuery = searchParams.get("search") || "";

  // 1. Filter for the Metrics Widget Toolbar (Top)
  const metricsFilter = searchParams.get("metricsFilter") || "Daily";

  // 2. Filter for the Data Table Toolbar (Bottom)
  const tableFilter = searchParams.get("tableFilter") || "All";

  const setUrlFilter = useCallback((key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [searchParams, pathname, router]);

  return {
    searchQuery,
    metricsFilter, // <-- Exported
    tableFilter,   // <-- Exported
    tickets,
    performanceArea,
    donutData,
    infoCards,
    deptPerformance,
    escalatedTickets,
    isLoading,
    setUrlFilter,
  };
}