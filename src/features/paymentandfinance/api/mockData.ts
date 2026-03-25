import { type ChartConfig } from "@/components/ui/chart";
import { PFStatCard, PFPaymentModeData, PFSegmentedBarRow } from "../types";

export const mockFinanceCardsData: PFStatCard[] = [
  { title: "Net Revenue", Stats: "₹ 8,90,000", percentage: -20.89, information: "Net revenue after deductions." },
  { title: "Commission", Stats: "₹ 1,90,000", percentage: -20.89, information: "Commission earned from transactions." },
];

export const mockMetricsCardsData: PFStatCard[] = [
  { title: "Orders", Stats: "3444", percentage: -20.89, information: "Total number of orders." },
  { title: "AOV", Stats: "₹3,444", percentage: -20.89, information: "Average order value." },
  { title: "Total Referral", Stats: "144", percentage: -20.89, information: "Total referral count." },
  { title: "Sale thru Referral", Stats: "₹1,044", percentage: -20.89, information: "Revenue through referrals." },
  { title: "Total Cancelation", Stats: "1,044", percentage: -20.89, information: "Total canceled orders." },
  { title: "Chargebacks/Penalties", Stats: "₹3,444", percentage: -20.89, information: "Chargebacks and penalties." },
];

export const mockPaymentModeData: PFPaymentModeData[] = [
  { paymentMode: "UPI", count: 28, fill: "#38678C" },
  { paymentMode: "Paylater", count: 20, fill: "#CBDEEC" },
  { paymentMode: "COD", count: 30, fill: "#8DAFD1" },
  { paymentMode: "Net Banking", count: 22, fill: "#4889BC" },
];

export const mockPaymentModeConfig = {
  upi: { label: "UPI", color: "#36678C" },
  cod: { label: "COD", color: "#8DAFD1" },
  netBanking: { label: "Net Banking", color: "#4889BC" },
  paylater: { label: "Paylater", color: "#CBDEEC" },
} satisfies ChartConfig;

export const mockRentalOrdersData: PFSegmentedBarRow[] = [
  { id: "earth-moving", label: "Earth Moving", percentage: 80, segments: [{ id: "excavators", label: "Excavators", value: 10, color: "#38678C", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "wheel-loader", label: "Wheel Loader", value: 30, color: "#4F8FC3", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "backhoe-loader", label: "Backhoe Loader", value: 20, color: "#8FB1D2", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "bulldozer", label: "Bulldozer", value: 40, color: "#BDD1E2", trendText: "-20.89%", fromText: "from 20 Feb" }] },
  { id: "transportation", label: "Transportation", percentage: 50, segments: [{ id: "tipper", label: "Tipper", value: 12, color: "#38678C", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "trailer", label: "Trailer", value: 8, color: "#4F8FC3", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "trucks", label: "Trucks", value: 4, color: "#8FB1D2", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "transit Mixer", label: "transit Mixer", value: 3, color: "#BDD1E2", trendText: "-20.89%", fromText: "from 20 Feb" }] },
  { id: "lifts-aerial-equipment", label: "Lifts / Arial Equipment", percentage: 100, segments: [{ id: "Articulating Lift", label: "Articulating Lift", value: 44, color: "#38678C", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "scissor-lift", label: "Scissor Lift", value: 20, color: "#4F8FC3", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "Truck-Mounted Boom lift", label: "Truck-Mounted Boom lift", value: 10, color: "#8FB1D2", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "ForkLift", label: "Fork Lift", value: 8, color: "#BDD1E2", trendText: "-20.89%", fromText: "from 20 Feb" }] },
  { id: "others", label: "Others", percentage: 10, segments: [{ id: "Borewell", label: "Borewell", value: 8, color: "#38678C", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "Dewatering pumps", label: "Dewatering pumps", value: 4, color: "#4F8FC3", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "Generators", label: "Generators", value: 2, color: "#8FB1D2", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "Compactors", label: "Compactors", value: 1, color: "#BDD1E2", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "others", label: "Others ", value: 5, color: "#D7E1EA", trendText: "-20.89%", fromText: "from 20 Feb" }] },
];

export const mockMaterialOrdersData: PFSegmentedBarRow[] = [
  { id: "bricks-blocks", label: "Bricks & Blocks", percentage: 60, segments: [{ id: "clay-bricks", label: "Clay Bricks", value: 10, color: "#38678C", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "fly-ash-bricks", label: "Fly Ash Bricks", value: 30, color: "#4F8FC3", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "aac-blocks", label: "AAC Blocks", value: 20, color: "#8FB1D2", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "cement-blocks", label: "Cement Blocks", value: 20, color: "#BDD1E2", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "concrete-pavers", label: "Concrete Pavers", value: 40, color: "#D7E1EA", trendText: "-20.89%", fromText: "from 20 Feb" }] },
  { id: "tmt-steel-products", label: "TMT & Steel Products", percentage: 80, segments: [{ id: "tmt-bars", label: "TMT Bars", value: 45, color: "#38678C", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "steel-rods", label: "Steel Rods", value: 30, color: "#4F8FC3", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "binding-wire", label: "Binding Wire", value: 10, color: "#8FB1D2", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "steel-other", label: "Others", value: 15, color: "#BDD1E2", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "steel-other-2", label: "Other 2", value: 2, color: "#D7E1EA", trendText: "-20.89%", fromText: "from 20 Feb" }] },
  { id: "cement-concrete-products", label: "Cement & Concrete Products", percentage: 40, segments: [{ id: "cement-1", label: "Cement", value: 55, color: "#38678C", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "cement-2", label: "Ready Mix Concrete", value: 25, color: "#4F8FC3", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "cement-3", label: "Concrete Blocks", value: 15, color: "#8FB1D2", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "cement-4", label: "Others", value: 10, color: "#BDD1E2", trendText: "-20.89%", fromText: "from 20 Feb" }] },
  { id: "pipes-fittings-plumbing", label: "Pipes Fittings & Plumbing", percentage: 50, segments: [{ id: "pipes-1", label: "PVC Pipes", value: 35, color: "#38678C", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "pipes-2", label: "CPVC Pipes", value: 40, color: "#4F8FC3", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "pipes-3", label: "Fittings", value: 10, color: "#8FB1D2", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "pipes-4", label: "Sanitary", value: 20, color: "#BDD1E2", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "pipes-5", label: "Others", value: 3, color: "#D7E1EA", trendText: "-20.89%", fromText: "from 20 Feb" }] },
  { id: "electrical-lighting-materials", label: "Electrical & Lighting Materials", percentage: 30, segments: [{ id: "electrical-1", label: "Wires", value: 45, color: "#38678C", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "electrical-2", label: "Switches", value: 18, color: "#4F8FC3", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "electrical-3", label: "Lights", value: 8, color: "#8FB1D2", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "electrical-4", label: "Panels", value: 18, color: "#BDD1E2", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "electrical-5", label: "Others", value: 3, color: "#D7E1EA", trendText: "-20.89%", fromText: "from 20 Feb" }] },
  { id: "paints-coatings-waterproofing", label: "Paints Coatings & Waterproofing", percentage: 20, segments: [{ id: "paint-1", label: "Paints", value: 45, color: "#38678C", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "paint-2", label: "Coatings", value: 26, color: "#4F8FC3", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "paint-3", label: "Primers", value: 8, color: "#8FB1D2", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "paint-4", label: "Waterproofing", value: 18, color: "#BDD1E2", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "paint-5", label: "Others", value: 3, color: "#D7E1EA", trendText: "-20.89%", fromText: "from 20 Feb" }] },
  { id: "flooring-glass-finishing", label: "Flooring Glass & Finishing", percentage: 10, segments: [{ id: "flooring-1", label: "Tiles", value: 45, color: "#38678C", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "flooring-2", label: "Glass", value: 18, color: "#4F8FC3", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "flooring-3", label: "Adhesives", value: 8, color: "#8FB1D2", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "flooring-4", label: "Finishing", value: 18, color: "#BDD1E2", trendText: "-20.89%", fromText: "from 20 Feb" }, { id: "flooring-5", label: "Others", value: 3, color: "#D7E1EA", trendText: "-20.89%", fromText: "from 20 Feb" }] },
];