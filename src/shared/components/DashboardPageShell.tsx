"use client";

import React from "react";
import { cn } from "@/lib/utils";

/** Shared page chrome inside the dashboard 1440px shell */
export function DashboardPageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "min-h-screen w-full bg-[#F8F9FA] px-6 py-5 shadow-[-4px_0_15px_0_rgba(0,0,0,0.1),4px_0_15px_0_rgba(0,0,0,0.1)] ",
        className,
      )}
    >
      {children}
    </div>
  );
}
