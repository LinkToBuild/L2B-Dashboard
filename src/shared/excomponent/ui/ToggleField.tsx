"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ToggleFieldProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
  label?: string;
  className?: string;
}

export function ToggleField({
  checked = false,
  disabled = false,
  onChange,
  label,
  className,
}: ToggleFieldProps) {
  return (
    <div className={cn("flex items-center justify-between gap-3", className)}>
      {label ? (
        <span className="text-sm font-medium text-neutral-800">{label}</span>
      ) : null}

      <button
        type="button"
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={cn(
          "relative h-6 w-11 rounded-full transition-colors",
          checked ? "bg-green-500" : "bg-neutral-1",
          disabled && "cursor-not-allowed opacity-50"
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all",
            checked ? "left-[22px]" : "left-0.5"
          )}
        />
      </button>
    </div>
  );
}