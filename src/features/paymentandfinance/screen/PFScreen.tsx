// "use client";

// import * as React from "react";
// import { Header } from "../components/overall/PFHeader";
// import SectionWrapper from "@/shared/components/SectionWrapper";
// import { LegendData } from "@/shared/components/Legend";
// import { ChartPieDonut } from "@/shared/excomponent/charts/PieChart";
// import { StatCard } from "@/shared/excomponent/ui/StatCard";

// export function PFScreen() {
//   const financeCardsData = [
//     {
//       title: "Net Revenue",
//       Stats: "₹ 8,90,000",
//       percentage: -20.89,
//       information: "Net revenue after deductions.",
//     },
//     {
//       title: "Commission",
//       Stats: "₹ 1,90,000",
//       percentage: -20.89,
//       information: "Commission earned from transactions.",
//     },
//   ];

//   const metricsCardsData = [
//     {
//       title: "Orders",
//       Stats: "3444",
//       percentage: -20.89,
//       information: "Total number of orders.",
//     },
//     {
//       title: "AOV",
//       Stats: "₹3,444",
//       percentage: -20.89,
//       information: "Average order value.",
//     },
//     {
//       title: "Total Referral",
//       Stats: "144",
//       percentage: -20.89,
//       information: "Total referral count.",
//     },
//     {
//       title: "Sale thru Referral",
//       Stats: "₹1,044",
//       percentage: -20.89,
//       information: "Revenue through referrals.",
//     },
//     {
//       title: "Total Cancelation",
//       Stats: "1,044",
//       percentage: -20.89,
//       information: "Total canceled orders.",
//     },
//     {
//       title: "Chargebacks/Penalties",
//       Stats: "₹3,444",
//       percentage: -20.89,
//       information: "Chargebacks and penalties.",
//     },
//   ];

//   return (
//     <div className="flex flex-col gap-6 md:w-[90%] xl:w-[91%] 2xl:w-[93%]">
//       <Header />

//       <SectionWrapper className="">
//         <div className="flex w-full items-start gap-[10px] 2xl:gap-[185px]">
//           <div className="w-[700px] h-[356px] 2xl:w-[635px] flex flex-col gap-[10px]">
//             <div className="w-full h-full flex items-center gap-[24px] border border-neutral-5 p-[20px] rounded-[12px]">
//               <div>
//                 <ChartPieDonut />
//               </div>

//               <div className="xl:w-[40%] 2xl:w-[245px] h-[299px] flex flex-col gap-[27px]">
//                 <div className="w-full flex flex-col gap-[27px]">
//                   {financeCardsData.map((card, index) => (
//                     <StatCard
//                       key={index}
//                       title={card.title}
//                       value={card.Stats}
//                       percentage={card.percentage}
//                       information={card.information}
//                     />
//                   ))}
//                 </div>

//                 <div className="h-[48px] grid grid-cols-2">
//                   <LegendData color="#3B82F6" label="UPI" percentage={28} />
//                   <LegendData color="#60A5FA" label="COD" percentage={30} />
//                   <LegendData
//                     color="#93C5FD"
//                     label="Net Banking"
//                     percentage={22}
//                   />
//                   <LegendData
//                     color="#BFDBFE"
//                     label="Paylater"
//                     percentage={20}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="w-[494px] h-[354px] shrink-0">
//             <div className="grid grid-cols-2 gap-x-[40px] gap-y-[16px]">
//               {metricsCardsData.map((card, index) => (
//                 <StatCard
//                   key={index}
//                   title={card.title}
//                   value={card.Stats}
//                   percentage={card.percentage}
//                   information={card.information}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </SectionWrapper>
//     </div>
//   );
// }



"use client";

import * as React from "react";
import { Header } from "../components/overall/PFHeader";
import SectionWrapper from "@/shared/components/SectionWrapper";
import { LegendData } from "@/shared/components/Legend";
import { ChartPieDonut } from "@/shared/excomponent/charts/PieChart";
import { StatCard } from "@/shared/excomponent/ui/StatCard";
import { type ChartConfig } from "@/components/ui/chart";
import  PaymentMetricsWidget  from "../components/overall/PaymentMetricsWidget";

export function PFScreen() {
  const financeCardsData = [
    {
      title: "Net Revenue",
      Stats: "₹ 8,90,000",
      percentage: -20.89,
      information: "Net revenue after deductions.",
    },
    {
      title: "Commission",
      Stats: "₹ 1,90,000",
      percentage: -20.89,
      information: "Commission earned from transactions.",
    },
  ];

  const metricsCardsData = [
    {
      title: "Orders",
      Stats: "3444",
      percentage: -20.89,
      information: "Total number of orders.",
    },
    {
      title: "AOV",
      Stats: "₹3,444",
      percentage: -20.89,
      information: "Average order value.",
    },
    {
      title: "Total Referral",
      Stats: "144",
      percentage: -20.89,
      information: "Total referral count.",
    },
    {
      title: "Sale thru Referral",
      Stats: "₹1,044",
      percentage: -20.89,
      information: "Revenue through referrals.",
    },
    {
      title: "Total Cancelation",
      Stats: "1,044",
      percentage: -20.89,
      information: "Total canceled orders.",
    },
    {
      title: "Chargebacks/Penalties",
      Stats: "₹3,444",
      percentage: -20.89,
      information: "Chargebacks and penalties.",
    },
  ];

  const paymentModeData = [
    { name: "UPI", value: 28, fill: "#3B82F6" },
    { name: "COD", value: 30, fill: "#60A5FA" },
    { name: "Net Banking", value: 22, fill: "#93C5FD" },
    { name: "Paylater", value: 20, fill: "#BFDBFE" },
  ];

  const paymentModeConfig = {
    upi: {
      label: "UPI",
      color: "#3B82F6",
    },
    cod: {
      label: "COD",
      color: "#60A5FA",
    },
    netBanking: {
      label: "Net Banking",
      color: "#93C5FD",
    },
    paylater: {
      label: "Paylater",
      color: "#BFDBFE",
    },
  } satisfies ChartConfig;

  return (
    <div className="flex flex-col gap-6 md:w-[90%] xl:w-[91%] 2xl:w-[93%]">
      <Header />

      <SectionWrapper className="">
        <div className="flex w-full items-start gap-[10px] 2xl:gap-[185px]">
          <div className="w-[700px] h-[356px] 2xl:w-[635px] flex flex-col gap-[10px]">
            <div className="w-full h-full flex items-center gap-[24px] border border-neutral-5 p-[20px] rounded-[12px]">
              <div>
                <ChartPieDonut
                  data={paymentModeData}
                  config={paymentModeConfig}
                  dataKey="value"
                  nameKey="name"
                  centerLabel="Revenue"
                  centerValue="₹1.89L"
                />
              </div>

              <div className="xl:w-[40%] 2xl:w-[245px] h-[299px] flex flex-col gap-[27px]">
                <div className="w-full flex flex-col gap-[27px]">
                  {financeCardsData.map((card, index) => (
                    <StatCard
                      key={index}
                      title={card.title}
                      value={card.Stats}
                      percentage={card.percentage}
                      information={card.information}
                    />
                  ))}
                </div>

                <div className="h-[48px] grid grid-cols-2">
                  <LegendData color="#3B82F6" label="UPI" percentage={28} />
                  <LegendData color="#60A5FA" label="COD" percentage={30} />
                  <LegendData
                    color="#93C5FD"
                    label="Net Banking"
                    percentage={22}
                  />
                  <LegendData
                    color="#BFDBFE"
                    label="Paylater"
                    percentage={20}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[494px] h-[354px] shrink-0">
            <div className="grid grid-cols-2 gap-x-[40px] gap-y-[16px]">
              {metricsCardsData.map((card, index) => (
                <StatCard
                  key={index}
                  title={card.title}
                  value={card.Stats}
                  percentage={card.percentage}
                  information={card.information}
                />
              ))}
            </div>
          </div>
        </div>
        <PaymentMetricsWidget/>
      </SectionWrapper>
    </div>
  );
}