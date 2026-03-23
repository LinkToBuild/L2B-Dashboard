"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const inputSizeVariants = {
  sm: "h-[30px] w-[164px] text-[12px]",
  md: "h-[44px] w-[180px] text-[14px]",
  lg: "h-[44px] w-[270px] text-[14px]",
  xl: "h-[44px] w-[331px] text-[14px]",
  full: "h-[44px] w-full text-[14px]",
} as const;

type SizeVariant = keyof typeof inputSizeVariants;

export interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  sizeVariant?: SizeVariant;
  error?: boolean;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, sizeVariant = "md", error = false, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex rounded-md border bg-white px-3 py-2 text-neutral-900 outline-none transition-colors",
          "placeholder:text-neutral-400",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
          error ? "border-red-500" : "border-neutral-300",
          inputSizeVariants[sizeVariant],
          className
        )}
        {...props}
      />
    );
  }
);

CustomInput.displayName = "CustomInput";

export { CustomInput };