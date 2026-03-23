// "use client";

// import * as React from "react";
// import { LineCharts, LineConfig } from "@/shared/excomponent/charts/LineChart";
// import { StatCard } from "@/shared/excomponent/ui/StatCard";
// import { SideBoard, SideBoardItem } from "@/shared/components/SideBoard";

// type GrowthMetricsPoint = {
//   day: number;
//   visitors: number;
//   all: number;
//   andhraPradesh: number;
//   vijayawada: number;
//   karnataka: number;
// };

// const chartData: GrowthMetricsPoint[] = [
//   { day: 1, visitors: 2500, all: 2500, andhraPradesh: 2200, vijayawada: 2100, karnataka: 2300 },
//   { day: 2, visitors: 2300, all: 2300, andhraPradesh: 2100, vijayawada: 2000, karnataka: 2200 },
//   { day: 3, visitors: 2400, all: 2400, andhraPradesh: 2150, vijayawada: 2050, karnataka: 2250 },
//   { day: 4, visitors: 2600, all: 2600, andhraPradesh: 2250, vijayawada: 2120, karnataka: 2350 },
//   { day: 5, visitors: 2450, all: 2450, andhraPradesh: 2180, vijayawada: 2060, karnataka: 2280 },
//   { day: 6, visitors: 2750, all: 2750, andhraPradesh: 2380, vijayawada: 2240, karnataka: 2460 },
//   { day: 7, visitors: 2350, all: 2350, andhraPradesh: 2140, vijayawada: 2030, karnataka: 2230 },
//   { day: 8, visitors: 2300, all: 2300, andhraPradesh: 2100, vijayawada: 1980, karnataka: 2190 },
//   { day: 9, visitors: 2200, all: 2200, andhraPradesh: 2020, vijayawada: 1910, karnataka: 2100 },
//   { day: 10, visitors: 2450, all: 2450, andhraPradesh: 2230, vijayawada: 2100, karnataka: 2320 },
//   { day: 11, visitors: 2400, all: 2400, andhraPradesh: 2200, vijayawada: 2080, karnataka: 2280 },
//   { day: 12, visitors: 2550, all: 2550, andhraPradesh: 2320, vijayawada: 2200, karnataka: 2410 },
//   { day: 13, visitors: 3000, all: 3000, andhraPradesh: 2650, vijayawada: 2480, karnataka: 2820 },
//   { day: 14, visitors: 2750, all: 2750, andhraPradesh: 2450, vijayawada: 2300, karnataka: 2600 },
//   { day: 15, visitors: 3100, all: 3100, andhraPradesh: 2720, vijayawada: 2550, karnataka: 2920 },
//   { day: 16, visitors: 3300, all: 3300, andhraPradesh: 2870, vijayawada: 2680, karnataka: 3090 },
//   { day: 17, visitors: 3150, all: 3150, andhraPradesh: 2790, vijayawada: 2600, karnataka: 2970 },
//   { day: 18, visitors: 3000, all: 3000, andhraPradesh: 2680, vijayawada: 2500, karnataka: 2860 },
//   { day: 19, visitors: 3200, all: 3200, andhraPradesh: 2840, vijayawada: 2640, karnataka: 3020 },
//   { day: 20, visitors: 4100, all: 4100, andhraPradesh: 3520, vijayawada: 3300, karnataka: 3700 },
//   { day: 21, visitors: 3900, all: 3900, andhraPradesh: 3400, vijayawada: 3180, karnataka: 3560 },
//   { day: 22, visitors: 3600, all: 3600, andhraPradesh: 3200, vijayawada: 2980, karnataka: 3360 },
//   { day: 23, visitors: 3750, all: 3750, andhraPradesh: 3320, vijayawada: 3090, karnataka: 3470 },
//   { day: 24, visitors: 3400, all: 3400, andhraPradesh: 3050, vijayawada: 2840, karnataka: 3220 },
//   { day: 25, visitors: 3800, all: 3800, andhraPradesh: 3380, vijayawada: 3140, karnataka: 3520 },
//   { day: 26, visitors: 3800, all: 3800, andhraPradesh: 3380, vijayawada: 3140, karnataka: 3520 },
//   { day: 27, visitors: 3800, all: 3800, andhraPradesh: 3380, vijayawada: 3140, karnataka: 3520 },
//   { day: 28, visitors: 3800, all: 3800, andhraPradesh: 3380, vijayawada: 3140, karnataka: 3520 },
//   { day: 29, visitors: 3800, all: 3800, andhraPradesh: 3380, vijayawada: 3140, karnataka: 3520 },
//   { day: 30, visitors: 3800, all: 3800, andhraPradesh: 3380, vijayawada: 3140, karnataka: 3520 },
// ];

// const chartLines: LineConfig[] = [
//   { dataKey: "all", name: "All", color: "#8F8F8F" },
//   { dataKey: "andhraPradesh", name: "Andhra Pradesh", color: "#F2AE2E" },
//   { dataKey: "vijayawada", name: "Vijayawada", color: "#62C48D" },
//   { dataKey: "karnataka", name: "Karnataka", color: "#4289C9" },
// ];

// const statCardsData = [
//   {
//     title: "Total Visitors",
//     value: 3444,
//     percentage: -20.89,
//     information: "Shows the total number of visitors.",
//   },
//   {
//     title: "Total Sessions",
//     value: 144,
//     percentage: -20.89,
//     information: "Shows the total number of sessions.",
//   },
//   {
//     title: "Visitors Right Now",
//     value: 44,
//     percentage: -20.89,
//     information: "Shows the number of active visitors right now.",
//   },
//   {
//     title: "Toggle Usage Rate",
//     value: 987,
//     percentage: -20.89,
//     information: "Shows the usage rate of the toggle action.",
//   },
// ];

// const rfmData: SideBoardItem[] = [
//   { label: "Total Users", percentage_change: -20.89, trend: "down", value: "809.8k" },
//   { label: "Active", percentage_change: -20.89, trend: "down", value: "109.8k" },
//   { label: "New", percentage_change: -20.89, trend: "down", value: "109.8k" },
//   { label: "LTV", percentage_change: 20.89, trend: "up", value: "109k" },
//   { label: "At-Risk Churn", percentage_change: 20.89, trend: "up", value: "309k" },
//   { label: "Serial Cancelers", percentage_change: -20.89, trend: "down", value: "9k" },
//   { label: "Dormant", percentage_change: -20.89, trend: "down", value: "109k" },
// ];

// export default function GrowthMetricsWidget() {
//   return (
//     <div className="flex items-start gap-[12px]  w-full justify-between">
//       <div className="w-[382px] shrink-0 [&>div>div:last-child>button:last-child]:hidden">
//         <LineCharts
//           data={chartData}
//           lines={chartLines}
//           width={382}
//           height={211}
//           xAxisKey="day"
//           yAxisKey="visitors"
//           yAxisLabel="Total Visitors"
//           xAxisProps={{
//             ticks: [5, 10, 15, 20, 25, 30],
//             tick: { fill: "#8B8B8B", fontSize: 12 },
//             tickMargin: 8,
//             axisLine: false,
//             tickLine: false,
//             padding: { left: 8, right: 8 },
//           }}
//           yAxisProps={{
//             domain: [0, 5000],
//             ticks: [0, 1000, 2000, 3000, 4000, 5000],
//             tick: { fill: "#8B8B8B", fontSize: 12 },
//             tickMargin: 8,
//             width: 44,
//             axisLine: false,
//             tickLine: false,
//           }}
//         />
//       </div>

//       <div className="grid w-[500px] h-[232px] shrink-0 grid-cols-2 gap-[16px]">
//         {statCardsData.map((card) => (
//           <StatCard
//             key={card.title}
//             title={card.title}
//             value={card.value}
//             percentage={card.percentage}
//             information={card.information}
//           />
//         ))}
//       </div>

//       <div
//         className="
//     w-[368px] h-[268px] shrink-0 ml-[35px]
//     [&>div]:!w-full
//     [&>div]:!h-full
//     [&>div]:!p-[12px]
//     [&>div]:!gap-[12px]
//     [&>div>div:first-child>p:nth-child(2)]:hidden
//     [&>div>div:last-child]:!gap-[8px]
//     [&>div>div:last-child>div>div]:!justify-between
//     [&>div>div:last-child>div>div]:!items-center
//     [&>div>div:last-child>div>div>p:first-child]:!w-[120px]
//     [&>div>div:last-child>div>div>p:nth-child(2)]:!w-[92px]
//     [&>div>div:last-child>div>div>p:nth-child(2)]:!text-center
//     [&>div>div:last-child>div>div>p:last-child]:!w-[64px]
//     [&>div>div:last-child>div>div>p:last-child]:!text-right
//   "
//       >
//         <SideBoard
//           title="RFM Score"
//           overallPercentage={-20.89}
//           overallTrend="down"
//           data={rfmData}
//         />
//       </div>
//     </div>
//   );
// }


"use client";

import * as React from "react";
import { LineCharts, LineConfig } from "@/shared/excomponent/charts/LineChart";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import { SideBoard, SideBoardItem } from "@/shared/components/SideBoard";

type GrowthMetricsPoint = {
  day: number;
  visitors: number;
  all: number;
  andhraPradesh: number;
  vijayawada: number;
  karnataka: number;
};

const chartData: GrowthMetricsPoint[] = [
  { day: 1, visitors: 2500, all: 2500, andhraPradesh: 2200, vijayawada: 2100, karnataka: 2300 },
  { day: 2, visitors: 2300, all: 2300, andhraPradesh: 2100, vijayawada: 2000, karnataka: 2200 },
  { day: 3, visitors: 2400, all: 2400, andhraPradesh: 2150, vijayawada: 2050, karnataka: 2250 },
  { day: 4, visitors: 2600, all: 2600, andhraPradesh: 2250, vijayawada: 2120, karnataka: 2350 },
  { day: 5, visitors: 2450, all: 2450, andhraPradesh: 2180, vijayawada: 2060, karnataka: 2280 },
  { day: 6, visitors: 2750, all: 2750, andhraPradesh: 2380, vijayawada: 2240, karnataka: 2460 },
  { day: 7, visitors: 2350, all: 2350, andhraPradesh: 2140, vijayawada: 2030, karnataka: 2230 },
  { day: 8, visitors: 2300, all: 2300, andhraPradesh: 2100, vijayawada: 1980, karnataka: 2190 },
  { day: 9, visitors: 2200, all: 2200, andhraPradesh: 2020, vijayawada: 1910, karnataka: 2100 },
  { day: 10, visitors: 2450, all: 2450, andhraPradesh: 2230, vijayawada: 2100, karnataka: 2320 },
  { day: 11, visitors: 2400, all: 2400, andhraPradesh: 2200, vijayawada: 2080, karnataka: 2280 },
  { day: 12, visitors: 2550, all: 2550, andhraPradesh: 2320, vijayawada: 2200, karnataka: 2410 },
  { day: 13, visitors: 3000, all: 3000, andhraPradesh: 2650, vijayawada: 2480, karnataka: 2820 },
  { day: 14, visitors: 2750, all: 2750, andhraPradesh: 2450, vijayawada: 2300, karnataka: 2600 },
  { day: 15, visitors: 3100, all: 3100, andhraPradesh: 2720, vijayawada: 2550, karnataka: 2920 },
  { day: 16, visitors: 3300, all: 3300, andhraPradesh: 2870, vijayawada: 2680, karnataka: 3090 },
  { day: 17, visitors: 3150, all: 3150, andhraPradesh: 2790, vijayawada: 2600, karnataka: 2970 },
  { day: 18, visitors: 3000, all: 3000, andhraPradesh: 2680, vijayawada: 2500, karnataka: 2860 },
  { day: 19, visitors: 3200, all: 3200, andhraPradesh: 2840, vijayawada: 2640, karnataka: 3020 },
  { day: 20, visitors: 4100, all: 4100, andhraPradesh: 3520, vijayawada: 3300, karnataka: 3700 },
  { day: 21, visitors: 3900, all: 3900, andhraPradesh: 3400, vijayawada: 3180, karnataka: 3560 },
  { day: 22, visitors: 3600, all: 3600, andhraPradesh: 3200, vijayawada: 2980, karnataka: 3360 },
  { day: 23, visitors: 3750, all: 3750, andhraPradesh: 3320, vijayawada: 3090, karnataka: 3470 },
  { day: 24, visitors: 3400, all: 3400, andhraPradesh: 3050, vijayawada: 2840, karnataka: 3220 },
  { day: 25, visitors: 3800, all: 3800, andhraPradesh: 3380, vijayawada: 3140, karnataka: 3520 },
  { day: 26, visitors: 3800, all: 3800, andhraPradesh: 3380, vijayawada: 3140, karnataka: 3520 },
  { day: 27, visitors: 3800, all: 3800, andhraPradesh: 3380, vijayawada: 3140, karnataka: 3520 },
  { day: 28, visitors: 3800, all: 3800, andhraPradesh: 3380, vijayawada: 3140, karnataka: 3520 },
  { day: 29, visitors: 3800, all: 3800, andhraPradesh: 3380, vijayawada: 3140, karnataka: 3520 },
  { day: 30, visitors: 3800, all: 3800, andhraPradesh: 3380, vijayawada: 3140, karnataka: 3520 },
];

const chartLines: LineConfig[] = [
  { dataKey: "all", name: "All", color: "#8F8F8F" },
  { dataKey: "andhraPradesh", name: "Andhra Pradesh", color: "#F2AE2E" },
  { dataKey: "vijayawada", name: "Vijayawada", color: "#62C48D" },
  { dataKey: "karnataka", name: "Karnataka", color: "#4289C9" },
];

const statCardsData = [
  {
    title: "Total Visitors",
    value: 3444,
    percentage: -20.89,
    information: "Shows the total number of visitors.",
  },
  {
    title: "Total Sessions",
    value: 144,
    percentage: -20.89,
    information: "Shows the total number of sessions.",
  },
  {
    title: "Visitors Right Now",
    value: 44,
    percentage: -20.89,
    information: "Shows the number of active visitors right now.",
  },
  {
    title: "Toggle Usage Rate",
    value: 987,
    percentage: -20.89,
    information: "Shows the usage rate of the toggle action.",
  },
];

const rfmData: SideBoardItem[] = [
  { label: "Total Users", percentage_change: -20.89, trend: "down", value: "809.8k" },
  { label: "Active", percentage_change: -20.89, trend: "down", value: "109.8k" },
  { label: "New", percentage_change: -20.89, trend: "down", value: "109.8k" },
  { label: "LTV", percentage_change: 20.89, trend: "up", value: "109k" },
  { label: "At-Risk Churn", percentage_change: 20.89, trend: "up", value: "309k" },
  { label: "Serial Cancelers", percentage_change: -20.89, trend: "down", value: "9k" },
  { label: "Dormant", percentage_change: -20.89, trend: "down", value: "109k" },
];

export default function GrowthMetricsWidget() {
  return (
    <div className="flex items-start gap-[12px] w-full justify-between">
      <div className="w-[382px] shrink-0">
        <LineCharts
          data={chartData}
          lines={chartLines}
          width={382}
          height={211}
          xAxisKey="day"
          yAxisKey="visitors"
          yAxisLabel="Total Visitors"
          showLegend={true}
          xAxisProps={{
            ticks: [5, 10, 15, 20, 25, 30],
            tick: { fill: "#8B8B8B", fontSize: 12 },
            tickMargin: 8,
            axisLine: false,
            tickLine: false,
            padding: { left: 8, right: 8 },
          }}
          yAxisProps={{
            domain: [0, 5000],
            ticks: [0, 1000, 2000, 3000, 4000, 5000],
            tick: { fill: "#8B8B8B", fontSize: 12 },
            tickMargin: 8,
            width: 44,
            axisLine: false,
            tickLine: false,
          }}
        />
      </div>

      <div className="grid w-[500px] h-[232px] shrink-0 grid-cols-2 gap-[16px]">
        {statCardsData.map((card) => (
          <StatCard
            key={card.title}
            title={card.title}
            value={card.value}
            percentage={card.percentage}
            information={card.information}
          />
        ))}
      </div>

      <div
        className="
    w-[368px] h-[268px] shrink-0 ml-[35px]
    [&>div]:!w-full
    [&>div]:!h-full
    [&>div]:!p-[12px]
    [&>div]:!gap-[12px]
    [&>div>div:first-child>p:nth-child(2)]:hidden
    [&>div>div:last-child]:!gap-[8px]
    [&>div>div:last-child>div>div]:!justify-between
    [&>div>div:last-child>div>div]:!items-center
    [&>div>div:last-child>div>div>p:first-child]:!w-[120px]
    [&>div>div:last-child>div>div>p:nth-child(2)]:!w-[92px]
    [&>div>div:last-child>div>div>p:nth-child(2)]:!text-center
    [&>div>div:last-child>div>div>p:last-child]:!w-[64px]
    [&>div>div:last-child>div>div>p:last-child]:!text-right
  "
      >
        <SideBoard
          title="RFM Score"
          overallPercentage={-20.89}
          overallTrend="down"
          data={rfmData}
        />
      </div>
    </div>
  );
}