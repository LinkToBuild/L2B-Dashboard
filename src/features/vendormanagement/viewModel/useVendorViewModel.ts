import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { VendorStat, InventoryItem, OrderItem } from "../types";
import { useVendorStore } from "../state/useVendorStore";
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

  const currentTab = searchParams.get("tab") || "Rental";
  const currentFilter = searchParams.get("filter") || "all";
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const indStartDate = searchParams.get("indStartDate");
  const indEndDate = searchParams.get("indEndDate");
  const indFilter = searchParams.get("indFilter") || "Daily";
  const indSearch = searchParams.get("indSearch") || "";

  const setUrlFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const { data: vendorData, isPending, isFetching } = useQuery({
    queryKey: ["vendors", currentTab, currentFilter, startDate],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 500));
      return {
        stats: mockCustomerData as VendorStat[],
        inventory: mockMaterials as InventoryItem[],
        orders: mockOrders as OrderItem[],
      };
    },
    // Industrial ERP defaults: reuse cache, keep prior rows on filter change
    staleTime: 60_000,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });

  return {
    ...store,
    currentTab,
    currentFilter,
    startDate,
    endDate,
    /** Cold load only — no cached/placeholder data yet */
    isLoading: isPending,
    /** Background refetch / filter change while UI stays mounted */
    isRefreshing: isFetching && !isPending,
    stats: vendorData?.stats ?? [],
    inventory: vendorData?.inventory ?? [],
    orders: vendorData?.orders ?? [],
    infoCards: mockInfoCardsData,
    indStartDate,
    indEndDate,
    indFilter,
    indSearch,
    setUrlFilter,
  };
};
