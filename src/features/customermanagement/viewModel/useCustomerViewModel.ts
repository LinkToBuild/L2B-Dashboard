import { useEffect, useMemo } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCustomerStore } from "../state/useCustomerStore";
import { BENGALURU_CENTER, DEFAULT_MAP_ZOOM } from "@/shared/maps/config";

export function useCustomerViewModel() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const {
    orders,
    paymentData,
    infoCardsData,
    customerData,
    demandZones,
    isLoading,
    fetchCustomerDashboard,
  } = useCustomerStore();

  const currentStatusFilter = searchParams.get("status") || "All";
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    void fetchCustomerDashboard();
  }, [fetchCustomerDashboard]);

  const setStatusFilter = (status: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (status === "All") params.delete("status");
    else params.set("status", status);
    router.push(`${pathname}?${params.toString()}`);
  };

  const setSearchQuery = (query: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!query) params.delete("search");
    else params.set("search", query);
    router.push(`${pathname}?${params.toString()}`);
  };

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesStatus =
        currentStatusFilter === "All" || order.status === currentStatusFilter;

      const normalizedSearch = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !normalizedSearch ||
        order.orderId.toLowerCase().includes(normalizedSearch) ||
        order.equipment.toLowerCase().includes(normalizedSearch);

      return matchesStatus && matchesSearch;
    });
  }, [orders, currentStatusFilter, searchQuery]);

  /**
   * Map UI model — ViewModel owns viewport defaults + overlay data.
   * Basemap provider config stays in shared/maps (infra).
   */
  const demandMap = useMemo(
    () => ({
      center: BENGALURU_CENTER,
      zoom: DEFAULT_MAP_ZOOM,
      zones: demandZones,
      isZonesLoading: isLoading && demandZones.length === 0,
    }),
    [demandZones, isLoading],
  );

  return {
    orders: filteredOrders,
    paymentData,
    infoCardsData,
    customerData,
    demandMap,
    isLoading,
    currentStatusFilter,
    searchQuery,
    setStatusFilter,
    setSearchQuery,
  };
}
