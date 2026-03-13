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

interface HoverState {
  rowId: string;
  segmentId: string;
  x: number;
  y: number;
  segment: SegmentedOrdersBarSegment;
}

function defaultPercentageFormatter(value: number | string) {
  return typeof value === "number" ? `${value}%` : value;
}

export default function SegmentedOrdersBarChart({
  data,
  height = "auto",
  className = "",
  rowGap = 22,
  barHeight = 16,
  segmentGap = 3,
  maxBarWidth = "100%",
  percentageFormatter = defaultPercentageFormatter,
  showTooltip = true,
}: SegmentedOrdersBarChartProps) {
  const [hovered, setHovered] = React.useState<HoverState | null>(null);

  return (
    <div
      className={`relative w-full ${className}`}
      style={{ height }}
      onMouseLeave={() => setHovered(null)}
    >
      <div className="flex flex-col" style={{ gap: `${rowGap}px` }}>
        {data.map((row) => {
          const total = row.segments.reduce((sum, item) => sum + item.value, 0);

          return (
            <div key={row.id} className="w-full">
              <div className="mb-[8px] flex items-center gap-[18px]">
                <p className="text-[14px] leading-[18px] text-neutral-2">
                  {row.label}
                </p>
                <span className="text-[14px] leading-[18px] text-neutral-3">
                  {percentageFormatter(row.percentage)}
                </span>
              </div>

              <div
                className="flex items-center"
                style={{
                  gap: `${segmentGap}px`,
                  maxWidth:
                    typeof maxBarWidth === "number"
                      ? `${maxBarWidth}px`
                      : maxBarWidth,
                }}
              >
                {row.segments.map((segment, index) => {
                  const widthPercent = total > 0 ? (segment.value / total) * 100 : 0;
                  const isFirst = index === 0;
                  const isLast = index === row.segments.length - 1;

                  return (
                    <div
                      key={segment.id}
                      className="relative shrink-0 cursor-pointer transition-opacity duration-150 hover:opacity-90"
                      style={{
                        width: `${widthPercent}%`,
                        height: `${barHeight}px`,
                        backgroundColor: segment.color,
                        borderTopLeftRadius: isFirst ? 999 : 999,
                        borderBottomLeftRadius: isFirst ? 999 : 999,
                        borderTopRightRadius: isLast ? 999 : 999,
                        borderBottomRightRadius: isLast ? 999 : 999,
                      }}
                      onMouseEnter={(e) => {
                        if (!showTooltip) return;
                        const rect = e.currentTarget.getBoundingClientRect();
                        const parentRect =
                          e.currentTarget.offsetParent?.getBoundingClientRect();

                        setHovered({
                          rowId: row.id,
                          segmentId: segment.id,
                          x: rect.left - (parentRect?.left ?? 0) + rect.width / 2,
                          y: rect.top - (parentRect?.top ?? 0),
                          segment,
                        });
                      }}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {showTooltip && hovered && (
        <div
          className="pointer-events-none absolute z-20 min-w-[170px] rounded-[10px] border border-neutral-6 bg-white px-[12px] py-[10px] shadow-sm"
          style={{
            left: hovered.x,
            top: hovered.y - 72,
            transform: "translateX(-50%)",
          }}
        >
          <div className="mb-[6px] flex items-center gap-[6px]">
            <span
              className="inline-block h-[8px] w-[8px] rounded-full"
              style={{ backgroundColor: hovered.segment.color }}
            />
            <span className="text-[12px] text-neutral-2">
              {hovered.segment.label}
            </span>
          </div>

          <div className="text-[12px] text-neutral-3">
            <span className="font-medium text-neutral-2">{hovered.segment.value}</span>
          </div>

          {hovered.segment.trendText && (
            <div className="mt-[4px] text-[11px] text-danger-1">
              {hovered.segment.trendText}
            </div>
          )}

          {hovered.segment.fromText && (
            <div className="mt-[2px] text-[11px] text-neutral-3">
              {hovered.segment.fromText}
            </div>
          )}
        </div>
      )}
    </div>
  );
}