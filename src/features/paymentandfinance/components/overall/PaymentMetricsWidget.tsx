"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SegmentedOrdersBarChart, {
  SegmentedOrdersBarRow,
} from "@/shared/excomponent/charts/SegmentedBarChart";
import { PFSegmentedBarRow } from "@/features/paymentandfinance/types/index";

const rentalOrdersData: SegmentedOrdersBarRow[] = [
  {
    id: "earth-moving",
    label: "Earth Moving",
    percentage: 80,
    segments: [
      {
        id: "excavators",
        label: "Excavators",
        value: 10,
        color: "#38678C",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "wheel-loader",
        label: "Wheel Loader",
        value: 30,
        color: "#4F8FC3",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "backhoe-loader",
        label: "Backhoe Loader",
        value: 20,
        color: "#8FB1D2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "bulldozer",
        label: "Bulldozer",
        value: 40,
        color: "#BDD1E2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
    ],
  },
  {
    id: "transportation",
    label: "Transportation",
    percentage: 50,
    segments: [
      {
        id: "tipper",
        label: "Tipper",
        value: 12,
        color: "#38678C",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "trailer",
        label: "Trailer",
        value: 8,
        color: "#4F8FC3",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "trucks",
        label: "Trucks",
        value: 4,
        color: "#8FB1D2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "transit Mixer",
        label: "transit Mixer",
        value: 3,
        color: "#BDD1E2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
    ],
  },
  {
    id: "lifts-aerial-equipment",
    label: "Lifts / Arial Equipment",
    percentage: 100,
    segments: [
      {
        id: "Articulating Lift",
        label: "Articulating Lift",
        value: 44,
        color: "#38678C",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "scissor-lift",
        label: "Scissor Lift",
        value: 20,
        color: "#4F8FC3",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "Truck-Mounted Boom lift",
        label: "Truck-Mounted Boom lift",
        value: 10,
        color: "#8FB1D2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "ForkLift",
        label: "Fork Lift",
        value: 8,
        color: "#BDD1E2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
    ],
  },
  {
    id: "others",
    label: "Others",
    percentage: 10,
    segments: [
      {
        id: "Borewell",
        label: "Borewell",
        value: 8,
        color: "#38678C",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "Dewatering pumps",
        label: "Dewatering pumps",
        value: 4,
        color: "#4F8FC3",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "Generators",
        label: "Generators",
        value: 2,
        color: "#8FB1D2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "Compactors",
        label: "Compactors",
        value: 1,
        color: "#BDD1E2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "others",
        label: "Others ",
        value: 5,
        color: "#D7E1EA",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
    ],
  },
];

const materialOrdersData: SegmentedOrdersBarRow[] = [
  {
    id: "bricks-blocks",
    label: "Bricks & Blocks",
    percentage: 60,
    segments: [
      {
        id: "clay-bricks",
        label: "Clay Bricks",
        value: 10,
        color: "#38678C",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "fly-ash-bricks",
        label: "Fly Ash Bricks",
        value: 30,
        color: "#4F8FC3",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "aac-blocks",
        label: "AAC Blocks",
        value: 20,
        color: "#8FB1D2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "cement-blocks",
        label: "Cement Blocks",
        value: 20,
        color: "#BDD1E2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "concrete-pavers",
        label: "Concrete Pavers",
        value: 40,
        color: "#D7E1EA",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
    ],
  },
  {
    id: "tmt-steel-products",
    label: "TMT & Steel Products",
    percentage: 80,
    segments: [
      {
        id: "tmt-bars",
        label: "TMT Bars",
        value: 45,
        color: "#38678C",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "steel-rods",
        label: "Steel Rods",
        value: 30,
        color: "#4F8FC3",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "binding-wire",
        label: "Binding Wire",
        value: 10,
        color: "#8FB1D2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "steel-other",
        label: "Others",
        value: 15,
        color: "#BDD1E2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "steel-other-2",
        label: "Other 2",
        value: 2,
        color: "#D7E1EA",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
    ],
  },
  {
    id: "cement-concrete-products",
    label: "Cement & Concrete Products",
    percentage: 40,
    segments: [
      {
        id: "cement-1",
        label: "Cement",
        value: 55,
        color: "#38678C",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "cement-2",
        label: "Ready Mix Concrete",
        value: 25,
        color: "#4F8FC3",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "cement-3",
        label: "Concrete Blocks",
        value: 15,
        color: "#8FB1D2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "cement-4",
        label: "Others",
        value: 10,
        color: "#BDD1E2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
    ],
  },
  {
    id: "pipes-fittings-plumbing",
    label: "Pipes Fittings & Plumbing",
    percentage: 50,
    segments: [
      {
        id: "pipes-1",
        label: "PVC Pipes",
        value: 35,
        color: "#38678C",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "pipes-2",
        label: "CPVC Pipes",
        value: 40,
        color: "#4F8FC3",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "pipes-3",
        label: "Fittings",
        value: 10,
        color: "#8FB1D2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "pipes-4",
        label: "Sanitary",
        value: 20,
        color: "#BDD1E2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "pipes-5",
        label: "Others",
        value: 3,
        color: "#D7E1EA",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
    ],
  },
  {
    id: "electrical-lighting-materials",
    label: "Electrical & Lighting Materials",
    percentage: 30,
    segments: [
      {
        id: "electrical-1",
        label: "Wires",
        value: 45,
        color: "#38678C",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "electrical-2",
        label: "Switches",
        value: 18,
        color: "#4F8FC3",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "electrical-3",
        label: "Lights",
        value: 8,
        color: "#8FB1D2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "electrical-4",
        label: "Panels",
        value: 18,
        color: "#BDD1E2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "electrical-5",
        label: "Others",
        value: 3,
        color: "#D7E1EA",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
    ],
  },
  {
    id: "paints-coatings-waterproofing",
    label: "Paints Coatings & Waterproofing",
    percentage: 20,
    segments: [
      {
        id: "paint-1",
        label: "Paints",
        value: 45,
        color: "#38678C",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "paint-2",
        label: "Coatings",
        value: 26,
        color: "#4F8FC3",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "paint-3",
        label: "Primers",
        value: 8,
        color: "#8FB1D2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "paint-4",
        label: "Waterproofing",
        value: 18,
        color: "#BDD1E2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "paint-5",
        label: "Others",
        value: 3,
        color: "#D7E1EA",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
    ],
  },
  {
    id: "flooring-glass-finishing",
    label: "Flooring Glass & Finishing",
    percentage: 10,
    segments: [
      {
        id: "flooring-1",
        label: "Tiles",
        value: 45,
        color: "#38678C",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "flooring-2",
        label: "Glass",
        value: 18,
        color: "#4F8FC3",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "flooring-3",
        label: "Adhesives",
        value: 8,
        color: "#8FB1D2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "flooring-4",
        label: "Finishing",
        value: 18,
        color: "#BDD1E2",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
      {
        id: "flooring-5",
        label: "Others",
        value: 3,
        color: "#D7E1EA",
        trendText: "-20.89%",
        fromText: "from 20 Feb",
      },
    ],
  },
];

interface PaymentMetricsWidgetProps {
  rowsToShow?: number;
  activeTab: string;
  onTabChange: (tab: string) => void;
  rentalData: PFSegmentedBarRow[];
  materialData: PFSegmentedBarRow[];
}

export default function PaymentMetricsWidget ({
  rowsToShow = 7, activeTab, onTabChange, rentalData, materialData
}: PaymentMetricsWidgetProps) {
 

const chartData = (activeTab === "rental" ? rentalData : materialData).slice(0, rowsToShow);

  return (
    <div className="w-full">
      <div className="mb-[18px] mt-[28px] flex justify-start">
        <Tabs value={activeTab} onValueChange={onTabChange} className="h-[48px] w-[225px]">
          <TabsList className="h-full w-full rounded-[8px] bg-neutral-6 p-[4px]">
            <TabsTrigger value="rental" className="flex-1 rounded-[6px] text-[16px] font-normal text-neutral-2 data-[state=active]:bg-[#F4B037] data-[state=active]:text-white">Rental</TabsTrigger>
            <TabsTrigger value="material" className="flex-1 rounded-[6px] text-[16px] font-normal text-neutral-2 data-[state=active]:bg-[#F4B037] data-[state=active]:text-white">Material</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="w-full">
       <SegmentedOrdersBarChart
          data={chartData}
          height="auto"
          rowGap={30}
          segmentGap={4}
          maxBarWidth={1250}
          className="w-full"
          showTooltip={true}
        />
      </div>
    </div>
  );
}