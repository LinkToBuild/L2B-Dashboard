import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useMPStore } from "../states/useMPStore";

export function useMPViewModel() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { 
    campaignReport, infoCards, campaignPerformance, 
    channelDistribution, leadScore, isLoading, fetchMPData 
  } = useMPStore();

  useEffect(() => {
    fetchMPData();
  }, [fetchMPData]);

  const searchQuery = searchParams.get("search") || "";
  const headerFilter = searchParams.get("headerFilter") || "Daily";
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const setUrlFilter = useCallback((key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [searchParams, pathname, router]);

  return {
    searchQuery,
    headerFilter,
    startDate,
    endDate,
    campaignReport,
    infoCards,
    campaignPerformance,
    channelDistribution,
    leadScore,
    isLoading,
    setUrlFilter,
  };
}