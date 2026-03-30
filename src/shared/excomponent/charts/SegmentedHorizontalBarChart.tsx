// "use client";

// import * as React from "react";

// type SegmentKey = string;

// export interface SegmentConfig {
//   key: SegmentKey;
//   label: string;
//   color: string;
// }

// export interface SegmentedHorizontalBarRow {
//   label: string;
//   total: number;
//   segments: Record<SegmentKey, number>;
// }

// interface SegmentedHorizontalBarChartProps {
//   data: SegmentedHorizontalBarRow[];
//   segmentConfig: SegmentConfig[];
//   width?: number | string;
//   height?: number | string;
//   barSize?: number;
//   rowGap?: number;
//   labelWidth?: number;
//   valueFormatter?: (value: number) => string;
//   rounded?: boolean;
//   showLegend?: boolean;
// }

// const defaultValueFormatter = (value: number) => `${value}`;

// export function SegmentedHorizontalBarChart({
//   data,
//   segmentConfig,
//   width = "100%",
//   height = "auto",
//   barSize = 16,
//   rowGap = 24,
//   labelWidth = 160,
//   valueFormatter = defaultValueFormatter,
//   rounded = true,
//   showLegend = false,
// }: SegmentedHorizontalBarChartProps) {
//   return (
//     <div
//       className="w-full"
//       style={{
//         width,
//         height,
//       }}
//     >
//       <div
//         className="flex flex-col"
//         style={{
//           gap: `${rowGap}px`,
//         }}
//       >
//         {data.map((row) => {
//           const segmentTotal = segmentConfig.reduce(
//             (sum, cfg) => sum + (row.segments[cfg.key] ?? 0),
//             0
//           );

//           const total =
//             row.total && row.total > 0 ? row.total : Math.max(segmentTotal, 0);

//           return (
//             <div key={row.label} className="flex items-center gap-[12px]">
//               <div
//                 className="shrink-0 text-[14px] leading-[18px] text-neutral-2"
//                 style={{ width: `${labelWidth}px` }}
//               >
//                 {row.label}
//               </div>

//               <div className="flex flex-1 items-center gap-[4px]">
//                 <div className="flex flex-1 items-center gap-[3px]">
//                   {segmentConfig.map((cfg, index) => {
//                     const value = row.segments[cfg.key] ?? 0;
//                     const widthPercent =
//                       total > 0 ? Math.max((value / total) * 100, 0) : 0;
//                     const isFirst = index === 0;
//                     const isLast = index === segmentConfig.length - 1;

//                     return (
//                       <div
//                         key={cfg.key}
//                         className="shrink-0"
//                         style={{
//                           width: `${widthPercent}%`,
//                           height: `${barSize}px`,
//                           backgroundColor: cfg.color,
//                           borderTopLeftRadius:
//                             rounded && isFirst ? 999 : rounded ? 999 : 0,
//                           borderBottomLeftRadius:
//                             rounded && isFirst ? 999 : rounded ? 999 : 0,
//                           borderTopRightRadius:
//                             rounded && isLast ? 999 : rounded ? 999 : 0,
//                           borderBottomRightRadius:
//                             rounded && isLast ? 999 : rounded ? 999 : 0,
//                         }}
//                       />
//                     );
//                   })}
//                 </div>

//                 <div className="shrink-0 text-[12px] leading-[16px] text-neutral-3">
//                   {valueFormatter(row.total)}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {showLegend && (
//         <div className="mt-[16px] flex flex-wrap gap-[12px]">
//           {segmentConfig.map((cfg) => (
//             <div
//               key={cfg.key}
//               className="flex items-center gap-[6px] text-[12px] leading-[16px] text-neutral-3"
//             >
//               <span
//                 className="inline-block h-[8px] w-[8px] rounded-full"
//                 style={{ backgroundColor: cfg.color }}
//               />
//               <span>{cfg.label}</span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import * as React from "react";

type SegmentKey = string;

export interface SegmentConfig {
  key: SegmentKey;
  label: string;
  color: string;
}

export interface SegmentedHorizontalBarRow {
  label: string;
  total: number;
  segments: Record<SegmentKey, number>;
}

interface SegmentedHorizontalBarChartProps {
  data: SegmentedHorizontalBarRow[];
  segmentConfig: SegmentConfig[];
  width?: number | string;
  height?: number | string;
  barSize?: number;
  rowGap?: number;
  labelWidth?: number;
  valueFormatter?: (value: number) => string;
  rounded?: boolean;
  showLegend?: boolean;

  showIndicator?: boolean;
  indicatorRowIndex?: number;
  indicatorSegmentKey?: SegmentKey;
  indicatorColor?: string;
  indicatorOuterColor?: string;
  indicatorSize?: number;
  indicatorOuterSize?: number;

  showRowLabel?: boolean;
  showRowTotal?: boolean;
  segmentGap?: number;
}

const defaultValueFormatter = (value: number) => `${value}`;

export function SegmentedHorizontalBarChart({
  data,
  segmentConfig,
  width = "100%",
  height = "auto",
  barSize = 16,
  rowGap = 24,
  labelWidth = 160,
  valueFormatter = defaultValueFormatter,
  rounded = true,
  showLegend = false,

  showIndicator = false,
  indicatorRowIndex = 0,
  indicatorSegmentKey,
  indicatorColor = "#5A9BD5",
  indicatorOuterColor = "#EAF4FB",
  indicatorSize = 10,
  indicatorOuterSize = 20,

  showRowLabel = true,
  showRowTotal = true,
  segmentGap = 3,
}: SegmentedHorizontalBarChartProps) {
  return (
    <div
      className="w-full"
      style={{
        width,
        height,
      }}
    >
      <div
        className="flex flex-col"
        style={{
          gap: `${rowGap}px`,
        }}
      >
        {data.map((row, rowIndex) => {
          const segmentTotal = segmentConfig.reduce(
            (sum, cfg) => sum + (row.segments[cfg.key] ?? 0),
            0
          );

          const total =
            row.total && row.total > 0 ? row.total : Math.max(segmentTotal, 0);

          let indicatorLeftPercent = 0;

          if (showIndicator && rowIndex === indicatorRowIndex && total > 0) {
            const targetKey =
              indicatorSegmentKey ?? segmentConfig[0]?.key ?? "";

            let accumulated = 0;

            for (let i = 0; i < segmentConfig.length; i += 1) {
              const cfg = segmentConfig[i];
              const value = row.segments[cfg.key] ?? 0;

              if (cfg.key === targetKey) {
                indicatorLeftPercent =
                  ((accumulated + value / 2) / total) * 100;
                break;
              }

              accumulated += value;
            }
          }

          return (
            <div key={row.label} className="flex items-center gap-[12px]">
              {showRowLabel && (
                <div
                  className="shrink-0 text-[14px] leading-[18px] text-neutral-2"
                  style={{ width: `${labelWidth}px` }}
                >
                  {row.label}
                </div>
              )}

              <div className="flex flex-1 items-center gap-[4px]">
                <div
                  className="relative flex flex-1 items-center"
                  style={{ gap: `${segmentGap}px` }}
                >
                  {segmentConfig.map((cfg, index) => {
                    const value = row.segments[cfg.key] ?? 0;
                    const widthPercent =
                      total > 0 ? Math.max((value / total) * 100, 0) : 0;
                    const isFirst = index === 0;
                    const isLast = index === segmentConfig.length - 1;

                    return (
                      <div
                        key={cfg.key}
                        className="shrink-0"
                        style={{
                          width: `${widthPercent}%`,
                          height: `${barSize}px`,
                          backgroundColor: cfg.color,
                          borderTopLeftRadius:
                            rounded && isFirst ? 999 : rounded ? 999 : 0,
                          borderBottomLeftRadius:
                            rounded && isFirst ? 999 : rounded ? 999 : 0,
                          borderTopRightRadius:
                            rounded && isLast ? 999 : rounded ? 999 : 0,
                          borderBottomRightRadius:
                            rounded && isLast ? 999 : rounded ? 999 : 0,
                        }}
                      />
                    );
                  })}

                  {showIndicator && rowIndex === indicatorRowIndex && (
                    <div
                      className="pointer-events-none absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `${indicatorLeftPercent}%`,
                        width: `${indicatorOuterSize}px`,
                        height: `${indicatorOuterSize}px`,
                        borderRadius: "999px",
                        backgroundColor: indicatorOuterColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: `${indicatorSize}px`,
                          height: `${indicatorSize}px`,
                          borderRadius: "999px",
                          backgroundColor: indicatorColor,
                        }}
                      />
                    </div>
                  )}
                </div>

                {showRowTotal && (
                  <div className="shrink-0 text-[12px] leading-[16px] text-neutral-3">
                    {valueFormatter(row.total)}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {showLegend && (
        <div className="mt-[16px] flex flex-wrap gap-[12px]">
          {segmentConfig.map((cfg) => (
            <div
              key={cfg.key}
              className="flex items-center gap-[6px] text-[12px] leading-[16px] text-neutral-3"
            >
              <span
                className="inline-block h-[8px] w-[8px] rounded-full"
                style={{ backgroundColor: cfg.color }}
              />
              <span>{cfg.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

