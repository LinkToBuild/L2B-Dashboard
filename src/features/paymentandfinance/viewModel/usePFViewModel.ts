import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";
import { usePFStore } from "../states/usePFStore";

export function usePFViewModel() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const store = usePFStore();

  useEffect(() => {
    store.fetchPFData();
  }, [store.fetchPFData]);

  // URL State Extractions
  const headerFilter = searchParams.get("headerFilter") || "Daily";
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  
  // Independent Tab Controls (Top Header vs Bottom Widget)
  const globalTab = searchParams.get("globalTab") || "rental";
  const categoryTab = searchParams.get("categoryTab") || "rental";

  const setUrlFilter = useCallback((key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [searchParams, pathname, router]);

  return {
    ...store, 
    headerFilter, startDate, endDate, globalTab, categoryTab, setUrlFilter,
  };
}