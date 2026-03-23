"use client";

import * as React from "react";

export interface SegmentedOrdersBarSegment {
  id: string;
  label: string;
  value: number;
  color: string;
  trendText?: string;
  fromText?: string;
}

export interface SegmentedOrdersBarRow {
  id: string;
  label: string;
  percentage: number | string;
  segments: SegmentedOrdersBarSegment[];
}

interface SegmentedOrdersBarChartProps {
  data: SegmentedOrdersBarRow[];
  height?: number | string;
  className?: string;
  rowGap?: number;
  barHeight?: number;
  segmentGap?: number;
  maxBarWidth?: number | string;
  percentageFormatter?: (value: number | string) => string;
  showTooltip?: boolean;
}

const defaultPercentageFormatter = (value: number | string) =>
  typeof value === "number" ? `${value}%` : value;

const getPercentageNumber = (value: number | string) => {
  if (typeof value === "number") return value;
  const parsed = Number(String(value).replace("%", "").trim());
  return Number.isNaN(parsed) ? 0 : parsed;
};

export default function SegmentedOrdersBarChart({
  data,
  height = "auto",
  className = "",
  rowGap = 30,
  barHeight = 24,
  segmentGap = 4,
  maxBarWidth = "100%",
  percentageFormatter = defaultPercentageFormatter,
  showTooltip = true,
}: SegmentedOrdersBarChartProps) {
  const [hoveredRow, setHoveredRow] =
    React.useState<SegmentedOrdersBarRow | null>(null);
  const [tooltipPosition, setTooltipPosition] = React.useState<
    Record<string, "top" | "bottom">
  >({});

  const rowRefs = React.useRef<Record<string, HTMLDivElement | null>>({});

  const updateTooltipPosition = React.useCallback((rowId: string) => {
    const rowElement = rowRefs.current[rowId];
    if (!rowElement) return;

    const rect = rowElement.getBoundingClientRect();
    const estimatedTooltipHeight = 220;
    const spaceBelow = window.innerHeight - rect.bottom;
    const shouldShowAbove = spaceBelow < estimatedTooltipHeight;

    setTooltipPosition((prev) => ({
      ...prev,
      [rowId]: shouldShowAbove ? "top" : "bottom",
    }));
  }, []);

  return (
    <div
      className={`w-full ${className}`}
      style={{
        height,
        maxWidth:
          typeof maxBarWidth === "number" ? `${maxBarWidth}px` : maxBarWidth,
      }}
    >
      <div className="flex flex-col" style={{ gap: `${rowGap}px` }}>
        {data.map((row) => {
          const total = row.segments.reduce(
            (sum, segment) => sum + segment.value,
            0
          );

          const overallWidth = `${getPercentageNumber(row.percentage)}%`;
          const position = tooltipPosition[row.id] || "bottom";

          return (
            <div
              key={row.id}
              className="relative"
              ref={(el) => {
                rowRefs.current[row.id] = el;
              }}
            >
              <div className="mb-[12px] flex items-center gap-[16px]">
                <p className="text-[14px] font-normal leading-[18px] text-neutral-2">
                  {row.label}
                </p>
                <span className="text-[14px] font-normal leading-[18px] text-neutral-3">
                  {percentageFormatter(row.percentage)}
                </span>
              </div>

              <div
                style={{ width: overallWidth }}
                onMouseEnter={() => {
                  if (!showTooltip) return;
                  updateTooltipPosition(row.id);
                  setHoveredRow(row);
                }}
                onMouseLeave={() => showTooltip && setHoveredRow(null)}
              >
                <div
                  className="flex items-center"
                  style={{ gap: `${segmentGap}px` }}
                >
                  {row.segments.map((segment) => {
                    const widthPercent =
                      total > 0 ? (segment.value / total) * 100 : 0;

                    return (
                      <div
                        key={segment.id}
                        className="shrink-0 rounded-full"
                        style={{
                          width: `${widthPercent}%`,
                          height: `${barHeight}px`,
                          backgroundColor: segment.color,
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              {showTooltip && hoveredRow?.id === row.id && (
                <div
                  className={`pointer-events-none absolute left-[58%] z-20 min-w-[220px] rounded-[12px] border border-neutral-6 bg-white px-[14px] py-[12px] shadow-sm ${
                    position === "top" ? "bottom-[36px]" : "top-[8px]"
                  }`}
                >
                  <div className="mb-[10px] text-[16px] text-neutral-2">
                    {row.label}
                  </div>

                  <div className="flex flex-col gap-[10px]">
                    {row.segments.map((segment) => (
                      <div key={segment.id}>
                        <div className="flex items-center justify-between gap-[12px]">
                          <div className="flex items-center gap-[8px]">
                            <span
                              className="inline-block h-[10px] w-[10px] rounded-full"
                              style={{ backgroundColor: segment.color }}
                            />
                            <span className="text-[14px] text-neutral-2">
                              {segment.label}
                            </span>
                          </div>

                          <span className="rounded-[6px] bg-neutral-7 px-[8px] py-[1px] text-[13px] text-neutral-2">
                            {segment.value}%
                          </span>
                        </div>

                        {(segment.trendText || segment.fromText) && (
                          <div className="mt-[4px] flex items-center gap-[6px] pl-[18px]">
                            {segment.trendText && (
                              <span className="text-[12px] text-danger-1">
                                {segment.trendText}
                              </span>
                            )}
                            {segment.fromText && (
                              <span className="text-[12px] text-neutral-3">
                                {segment.fromText}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}


