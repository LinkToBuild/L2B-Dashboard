import { DualMetricCard } from "@/shared/components/DualMetricCard";

export default function OrdersPage() {
  return <div className="min-h-screen flex items-center justify-center">
  <DualMetricCard
    title="Orders"
    percentage={5.2}
    rentalValue={109}
    materialValue={800}
    width="w-[240px]"
    height="h-[122px]"
    information="Comparison based on previous week"
  />
</div> ;
}
