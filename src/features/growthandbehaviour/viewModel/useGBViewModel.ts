import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useGBStore } from "../states/useGBStore";

export function useGBViewModel() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const store = useGBStore();

  useEffect(() => {
    store.fetchGBData();
  }, [store.fetchGBData]);

  // Header Filters
  const headerFilter = searchParams.get("headerFilter") || "Daily";
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  // Independent Funnel Controls
  const rentalSearch = searchParams.get("rentalSearch") || "";
  const rentalFilter = searchParams.get("rentalFilter") || "Default(no campaign)";
  const materialSearch = searchParams.get("materialSearch") || "";
  const materialFilter = searchParams.get("materialFilter") || "Default(no campaign)";

  const setUrlFilter = useCallback((key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [searchParams, pathname, router]);

  return {
    ...store, // Spreads all data (searchData, funnels, etc.)
    headerFilter, startDate, endDate,
    rentalSearch, rentalFilter,
    materialSearch, materialFilter,
    setUrlFilter,
  };
}