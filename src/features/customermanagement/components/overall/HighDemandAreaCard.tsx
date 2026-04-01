// "use client";

// import React from "react";
// import Image from "next/image";
// import mapImg from "@/public/images/mapImg.png";
// import { LegendData } from "@/shared/components/Legend";

// export function HighDemandAreaCard() {
//   return (
//     <div className="w-[270px] flex flex-col gap-[10px]">
//       <p className="text-[24px] text-neutral-1 font-normal">High Demand Area</p>
//       <div className="w-full flex flex-col bg-white shadow-md rounded-[12px] h-[354px] overflow-hidden">
//         <div className="w-full">
//           <Image
//             src={mapImg}
//             alt="Demand Map"
//             className="h-[280px] w-full object-cover"
//           />
//         </div>
//         <div className="flex flex-wrap justify-between gap-2 p-4">
//           <LegendData color="#EB6F70" label="High Demand" />
//           <LegendData color="#8DAFD1" label="Less Demand" />
//           <LegendData color="#FEC869" label="Slightly Less Demand" />
//         </div>
//       </div>
//     </div>
//   );
// }