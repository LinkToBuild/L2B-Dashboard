import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useOrdersStore } from "../states/useOrdersStore";

export function useOrdersViewModel() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { orders, matrixChartData, infoCards1, infoCards2, supplyDemandData, isLoading, fetchOrdersData } = useOrdersStore();

  useEffect(() => {
    fetchOrdersData();
  }, [fetchOrdersData]);

  const currentTab = searchParams.get("tab") || "Rental";
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  // Applying the replace('+') trick from our blueprint for strict matching!
  const currentFilter = (searchParams.get("filter") || "Daily").replace(/\+/g, ' '); 
  const searchQuery = searchParams.get("search") || "";

  const setUrlFilter = useCallback(
    (key: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) params.set(key, value);
      else params.delete(key);
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  return {
    currentTab,
    startDate,
    endDate,
    currentFilter,
    searchQuery,
    orders,
    matrixChartData,
    infoCards1,
    infoCards2,
    supplyDemandData,
    isLoading,
    setUrlFilter,
  };
}