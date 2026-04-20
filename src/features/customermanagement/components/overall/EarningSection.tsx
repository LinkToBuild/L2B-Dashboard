// "use client";

// import React from "react";
// import { ChartPieDonut } from "@/shared/excomponent/charts/PieChart";
// import { StatCard } from "@/shared/excomponent/ui/StatCard";
// import { LegendData } from "@/shared/components/Legend";
// import { ChartConfig } from "@/components/ui/chart";
// // 1. Import the unified type
// import { MetricCardData } from "../../types/index";

// interface EarningSectionProps {
//   paymentData: any[];
//   paymentConfig: ChartConfig;
//   // 2. Use the unified type here instead of an inline object
//   statCardsData: MetricCardData[];
// }

// export function EarningSection({ paymentData, paymentConfig, statCardsData }: EarningSectionProps) {
//   return (
//     <div className="w-[500px] h-[356px] 2xl:w-[635px] flex flex-col gap-[10px]">
//       <p className="text-[24px] font-normal">Earning</p>
//       <div className="w-full flex border border-neutral-5 justify-evenly p-4 2xl:p-6 rounded-[12px] bg-white">
//         <div className="flex items-center justify-center">
//           <ChartPieDonut
//             data={paymentData}
//             config={paymentConfig}
//             dataKey="percentage"
//             nameKey="method"
//             centerLabel="Total Tickets"
//             centerValue="134"
//             width={230}
//             height={230}
//           />
//         </div>
//         <div className="xl:w-[40%] 2xl:w-[245px] flex flex-col gap-[27px]">
//           <div className="w-full flex flex-col gap-[27px]">
//             {statCardsData.map((card, index) => (
//               <StatCard
//                 key={index}
//                 title={card.title}
//                 // 3. Use fallbacks to satisfy the StatCard's mandatory string/number requirements
//                 value={card.Stats || card.value || "0"} 
//                 percentage={card.percentage ?? 0}
//                 information={card.information}
//               />
//             ))}
//           </div>
//           <div className="h-[48px] grid grid-cols-2 gap-y-2">
//             <LegendData color="#356583" label="UPI" percentage={28} />
//             <LegendData color="#86A8C3" label="COD" percentage={30} />
//             <LegendData color="#3F82B7" label="Net Banking" percentage={22} />
//             <LegendData color="#CDE0ED" label="Paylater" percentage={20} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }