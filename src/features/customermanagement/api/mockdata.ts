'use client'
import { OrderRow } from "../types";
import { PaymentData, InfoCardData, CustomerMetric } from '../types';
import { DemandZone } from "../types/demandMap";

export const MOCK_ORDERS: OrderRow[] = [
  {
    status: "Completed",
    orderId: "#ORD-88293",
    equipment: "Mud-pump",
    capacity: "10 ton",
    bookingDate: "12/03/2026",
    startsOn: "12/03/2026",
    endOn: "14/03/2026",
    extended: "14/03/2026 (12:30)",
    firstLocation: "HPM HQ, Banga...",
    secondLocation: "-",
    customerId: "V-OD-12345",
    vendorId: "V-OD-12345",
    operatorId: "op-12345X-S",
    ratings: "5.0",
    payment: "COD",
    coupon: "FIRSTBUY50",
  },
  {
    status: "Started",
    orderId: "#ORD-88294",
    equipment: "Truck",
    capacity: "20 ton",
    bookingDate: "12/03/2026",
    startsOn: "-",
    endOn: "-",
    extended: "-",
    firstLocation: "HPM HQ, Banga...",
    secondLocation: "WXP HQ, Ban...",
    customerId: "V-OD-12346",
    vendorId: "V-OD-12346",
    operatorId: "op-12346X-S",
    ratings: "-",
    payment: "Online",
    coupon: "-",
  },
  {
    status: "Arrived",
    orderId: "#ORD-88295",
    equipment: "Truck",
    capacity: "20 ton",
    bookingDate: "12/03/2026",
    startsOn: "12/03/2026",
    endOn: "14/03/2026",
    extended: "-",
    firstLocation: "HPM HQ, Banga...",
    secondLocation: "WXP HQ, Ban...",
    customerId: "V-OD-12347",
    vendorId: "V-OD-12347",
    operatorId: "op-12347X-S",
    ratings: "-",
    payment: "Online",
    coupon: "-",
  },
  {
    status: "Extended",
    orderId: "#ORD-88299",
    equipment: "Truck",
    capacity: "20 ton",
    bookingDate: "12/03/2026",
    startsOn: "12/03/2026",
    endOn: "14/03/2026",
    extended: "14/03/2026 (12:30)",
    firstLocation: "HPM HQ, Banga...",
    secondLocation: "WXP HQ, Ban...",
    customerId: "V-OD-12351",
    vendorId: "V-OD-12351",
    operatorId: "op-12351X-S",
    ratings: "-",
    payment: "Online",
    coupon: "-",
  }
];



export const PAYMENT_DATA: PaymentData[] = [
  { method: "upi", percentage: 28, fill: "#356583" },
  { method: "cod", percentage: 30, fill: "#86A8C3" },
  { method: "netbanking", percentage: 22, fill: "#3F82B7" },
  { method: "paylater", percentage: 20, fill: "#CDE0ED" },
];

export const INFO_CARDS_DATA: InfoCardData[] = [
  {
    title: "Total Orders",
    Stats: "10,90,00",
    percentage: -20.89,
    information: "Total number of orders in the selected period.",
  },
  {
    title: "Net Sale",
    Stats: "? 10,90,00",
    percentage: -20.89,
    information: "Net sale amount for the selected period.",
  },
];

export const CUSTOMER_SIDEBOARD_DATA: CustomerMetric[] = [
  { label: "Total", percentage_change: -20.89, trend: "down", value: "809.8k" },
  { label: "Active", percentage_change: -20.89, trend: "down", value: "109.8k" },
  { label: "New", percentage_change: 20.89, trend: "up", value: "109k" },
  { label: "Repeat", percentage_change: 20.89, trend: "up", value: "309k" },
  { label: "Potential", percentage_change: -20.89, trend: "down", value: "109k" },
  { label: "At Risk", percentage_change: 20.89, trend: "up", value: "10k" },
  { label: "Dormant", percentage_change: 20.89, trend: "up", value: "9k" },
  { label: "Restricted", percentage_change: -20.89, trend: "down", value: "9k" },
];

/** Mock demand hotspots - Bengaluru (replace with API GeoJSON later). */
export const MOCK_DEMAND_ZONES: DemandZone[] = [
  {
    id: "zone-high-shantinagar",
    label: "Shanti Nagar",
    level: "high",
    center: [77.6055, 12.9578],
    radiusMeters: 1400,
  },
  {
    id: "zone-slight-rajajinagar",
    label: "Rajajinagar",
    level: "slightlyLess",
    center: [77.555, 12.988],
    radiusMeters: 1600,
  },
  {
    id: "zone-less-jayanagar",
    label: "Jayanagar",
    level: "less",
    center: [77.583, 12.93],
    radiusMeters: 1200,
  },
];
