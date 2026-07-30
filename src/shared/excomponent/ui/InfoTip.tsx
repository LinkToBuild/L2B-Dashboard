"use client";

import * as React from "react";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

export type InfoTipSize = "xs" | "sm" | "md" | "lg";

const sizeClasses: Record<InfoTipSize, string> = {
  xs: "h-3 w-3",
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

export interface InfoTipProps {
  /** Tooltip / accessible description */
  label?: string;
  size?: InfoTipSize;
  className?: string;
  iconClassName?: string;
}

/**
 * Shared info affordance for section titles, cards, toolbars.
 * Lucide lives here — feature screens should not import Info directly.
 */
export function InfoTip({
  label = "Information",
  size = "md",
  className,
  iconClassName,
}: InfoTipProps) {
  return (
    <span
      title={label}
      aria-label={label}
      role="img"
      className={cn(
        "inline-flex shrink-0 cursor-help items-center text-neutral-3 transition-colors hover:text-neutral-2",
        className,
      )}
    >
      <Info className={cn(sizeClasses[size], iconClassName)} aria-hidden />
    </span>
  );
}
