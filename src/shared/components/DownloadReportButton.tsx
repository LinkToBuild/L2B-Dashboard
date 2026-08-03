"use client";

import React from "react";
import { Download } from "lucide-react";
import { L2BButton } from "@/design-system/components/L2BButton";

interface DownloadReportButtonProps {
  label?: string;
  onClick?: () => void;
}

export function DownloadReportButton({
  label = "Download Report",
  onClick,
}: DownloadReportButtonProps) {
  return (
    <L2BButton
      type="button"
      variant="bgNone"
      size="auto"
      onClick={onClick}
      className="flex items-center gap-[9px] w-[171px] h-[24px] text-success-1"
    >
      <span className="text-[14px] leading-none font-normal whitespace-nowrap">
        {label}
      </span>
      <Download className="w-4 h-4 shrink-0" />
    </L2BButton>
  );
}
