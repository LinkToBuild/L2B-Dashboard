"use client";

import * as React from "react";

export interface FunnelBarField {
  label: string;
  value: string | number;
}

export interface FunnelBarRow {
  title: string;
  subtitle?: string;
  fields?: FunnelBarField[];
  bgColor?: string;
  textColor?: string;
}

interface FunnelBarProps {
  rows: FunnelBarRow[];
  className?: string;
  minWidthPercent?: number;
  rowGap?: number;
}

function parsePercentage(value: string | number | undefined): number {
  if (typeof value === "number") return value;

  if (typeof value === "string") {
    const cleaned = value.replace("%", "").trim();
    const parsed = Number(cleaned);
    return Number.isNaN(parsed) ? 100 : parsed;
  }

  return 100;
}

function getEngagementPercentage(row: FunnelBarRow): number {
  const engagementField = row.fields?.find(
    (field) => field.label.toLowerCase() === "engagement"
  );

  return parsePercentage(engagementField?.value);
}

function getFadedColor(percentage: number) {
  if (percentage >= 95) return "rgba(72, 137, 188, 0.96)";
  if (percentage >= 85) return "rgba(72, 137, 188, 0.88)";
  if (percentage >= 75) return "rgba(72, 137, 188, 0.80)";
  if (percentage >= 65) return "rgba(72, 137, 188, 0.72)";
  if (percentage >= 55) return "rgba(72, 137, 188, 0.62)";
  return "rgba(72, 137, 188, 0.52)";
}

function FunnelBarItem({
  row,
  minWidthPercent,
}: {
  row: FunnelBarRow;
  minWidthPercent: number;
}) {
  const engagementPercentage = getEngagementPercentage(row);
  const widthPercent = Math.max(engagementPercentage, minWidthPercent);
  const backgroundColor = row.bgColor || getFadedColor(engagementPercentage);

  const fieldCount = row.fields?.length ?? 0;
  const isSmall = widthPercent <= 65;
  const isVerySmall = widthPercent <= 55;

  const titleSize = isVerySmall
    ? "text-[10px] leading-[12px]"
    : "text-[11px] leading-[14px]";

  const subtitleSize = isVerySmall
    ? "text-[9px] leading-[11px]"
    : "text-[10px] leading-[13px]";

  const fieldLabelSize = isVerySmall
    ? "text-[10px] leading-[12px]"
    : "text-[11px] leading-[14px]";

  const fieldValueSize = isVerySmall
    ? "text-[9px] leading-[11px]"
    : "text-[10px] leading-[13px]";

  const titleColumn = isVerySmall ? "minmax(0,1fr)" : "minmax(0,1.2fr)";
  const fieldColumn = isVerySmall ? "48px" : isSmall ? "56px" : "72px";
  const lastFieldColumn = isVerySmall ? "58px" : isSmall ? "68px" : "88px";

  const gridTemplateColumns =
    fieldCount > 0
      ? `${titleColumn} ${Array.from({ length: fieldCount })
          .map((_, index) =>
            index === fieldCount - 1 ? lastFieldColumn : fieldColumn
          )
          .join(" ")}`
      : titleColumn;

  return (
    <div
      className="rounded-[12px] px-[12px] py-[8px] overflow-hidden"
      style={{
        width: `${widthPercent}%`,
        height: "52px",
        backgroundColor,
        color: row.textColor || "#FFFFFF",
      }}
    >
      <div
        className="grid items-center gap-x-[10px] h-full"
        style={{ gridTemplateColumns }}
      >
        <div className="min-w-0">
          <p className={`font-normal truncate ${titleSize}`}>{row.title}</p>
          {row.subtitle && (
            <p className={`font-normal truncate mt-[2px] ${subtitleSize}`}>
              {row.subtitle}
            </p>
          )}
        </div>

        {row.fields?.map((field, index) => (
          <div key={`${field.label}-${index}`} className="min-w-0">
            <p className={`font-normal truncate ${fieldLabelSize}`}>
              {field.label}
            </p>
            <p className={`font-normal truncate mt-[2px] ${fieldValueSize}`}>
              {field.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FunnelBar({
  rows,
  className = "",
  minWidthPercent = 0,
  rowGap = 14,
}: FunnelBarProps) {
  const sortedRows = React.useMemo(() => {
    return [...rows].sort(
      (a, b) => getEngagementPercentage(b) - getEngagementPercentage(a)
    );
  }, [rows]);

  return (
    <div className={`w-full flex flex-col ${className}`}>
      {sortedRows.map((row, index) => (
        <div
          key={`${row.title}-${index}`}
          style={{
            marginBottom: index === sortedRows.length - 1 ? 0 : `${rowGap}px`,
          }}
        >
          <FunnelBarItem row={row} minWidthPercent={minWidthPercent} />
        </div>
      ))}
    </div>
  );
}