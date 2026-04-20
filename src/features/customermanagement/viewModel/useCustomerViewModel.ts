import { useEffect, useMemo } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCustomerStore } from '../state/useCustomerStore';

export function useCustomerViewModel() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // 1. Pull ALL data and state from the Zustand Store
  const { 
    orders, 
    paymentData,
    infoCardsData,
    customerData,
    isLoading, 
    fetchOrders 
  } = useCustomerStore();

  // 2. Extract URL parameters for the Orders Table
  const currentStatusFilter = searchParams.get('status') || 'All';
  // Ensure we safely decode any URL spaces (though Next.js usually handles this via get())
  const searchQuery = searchParams.get('search') || '';

  // 3. Initialize data on mount
  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  // 4. URL state updaters
  const setStatusFilter = (status: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (status === 'All') {
      params.delete('status');
    } else {
      params.set('status', status);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const setSearchQuery = (query: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!query) {
      params.delete('search');
    } else {
      params.set('search', query);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  // 5. Client-side filtering logic for the Dynamic Table
  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      // Status Filter
      const matchesStatus = currentStatusFilter === 'All' || order.status === currentStatusFilter;
      
      // Search Query Filter (Checks Order ID or Equipment)
      const normalizedSearch = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !normalizedSearch || 
        order.orderId.toLowerCase().includes(normalizedSearch) ||
        order.equipment.toLowerCase().includes(normalizedSearch);

      return matchesStatus && matchesSearch;
    });
  }, [orders, currentStatusFilter, searchQuery]);

  // 6. Return the combined package to the Screen component
  return {
    // Table Data (Filtered)
    orders: filteredOrders,
    
    // Matrix & SideBoard Data (Direct pass-through)
    paymentData,
    infoCardsData,
    customerData,
    
    // UI State
    isLoading,
    currentStatusFilter,
    searchQuery,
    
    // Table Actions
    setStatusFilter,
    setSearchQuery,
  };
}