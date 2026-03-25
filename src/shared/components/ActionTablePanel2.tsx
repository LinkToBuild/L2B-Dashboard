"use client";

import * as React from "react";
import { Info, ListFilter, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { DynamicTable, ColumnConfig } from "@/shared/components/Table";
import { Button } from "@/shared/excomponent/ui/UIButton";
import {
  L2BDropdownMenu,
  DropdownItem,
} from "@/shared/excomponent/ui/L2BDropdownMenu";

export type MachineDetailsModalType =
  | "odometerHistory"
  | "documentDetails"
  | "skillsDetails"
  | "machineDocumentDetails";

type OdometerRow = {
  id: string;
  status: string;
  readingKm: string;
  hourMeter: string;
  reason: string;
  photo?: string;
};

type SharedRow = {
  id: string;
  [key: string]: any;
};

type OdometerData = {
  title?: string;
  dateText?: string;
  rows: OdometerRow[];
  totalKm: string;
  totalHours: string;
  downloadButtonText?: string;
};

type SharedDetailsData = {
  title?: string;
  rows: SharedRow[];
  columns: ColumnConfig<SharedRow>[];
  topActionType?: "dropdown" | "button";
  topActionText?: string;
  topActionOptions?: string[];
  selectedTopAction?: string;
  tableMaxHeight?: number;
  tableMinWidth?: number;
};

export type MachineDetailsModalData = OdometerData | SharedDetailsData;

interface MachineDetailsModalProps {
  open: boolean;
  onClose: () => void;
  type: MachineDetailsModalType;
  data: MachineDetailsModalData;
  onTopActionChange?: (value: string) => void;
  onDownloadLogs?: () => void;
}

const chipClasses: Record<string, string> = {
  Start: "bg-[#FFF1D8] text-[#F6B332]",
  Pause: "bg-[#E7EEFF] text-[#6E9BFF]",
  Resume: "bg-[#DCF8E6] text-[#56C293]",
  End: "bg-[#FDE7E7] text-[#F05A5A]",
  Disable: "bg-[#F48D8D] text-white",
  Remove: "bg-[#F48D8D] text-white",
  Approve: "bg-[#56C293] text-white",
  Approved: "bg-[#56C293] text-white",
  Rejected: "bg-[#F48D8D] text-white",
  Pending: "bg-[#E5E5E5] text-[#777777]",
  "On hold": "bg-[#E5E5E5] text-[#777777]",
  Enable: "bg-[#E5E5E5] text-[#777777]",
};

const modalConfig: Record<
  MachineDetailsModalType,
  { width: string; showInfo: boolean }
> = {
  odometerHistory: {
    width: "w-[731px]",
    showInfo: false,
  },
  documentDetails: {
    width: "w-[731px]",
    showInfo: true,
  },
  skillsDetails: {
    width: "w-[731px]",
    showInfo: true,
  },
  machineDocumentDetails: {
    width: "w-[731px]",
    showInfo: true,
  },
};

export function MachineDetailsModal({
  open,
  onClose,
  type,
  data,
  onTopActionChange,
  onDownloadLogs,
}: MachineDetailsModalProps) {
  const config = modalConfig[type];

  const renderTopRight = () => {
    if (type === "odometerHistory") {
      const odometerData = data as OdometerData;

      return (
        <div className="flex items-center gap-3">
          <span className="inline-flex h-[22px] items-center rounded-full bg-[#FFF1D8] px-3 text-[10px] font-medium text-[#F6B332]">
            {odometerData.dateText || "16 Dec 2025"}
          </span>

          <button
            type="button"
            className="flex h-[24px] w-[24px] items-center justify-center rounded-[6px] text-neutral-500 hover:bg-neutral-100"
          >
            <ListFilter size={16} />
          </button>
        </div>
      );
    }

    const sharedData = data as SharedDetailsData;

    if (sharedData.topActionType === "button") {
      return (
        <button
          type="button"
          onClick={() => onTopActionChange?.(sharedData.topActionText || "")}
          className={cn(
            "inline-flex h-[24px] items-center rounded-full px-3 text-[10px] font-medium leading-none",
            chipClasses[sharedData.topActionText || ""] ||
              "bg-[#F48D8D] text-white"
          )}
        >
          {sharedData.topActionText || "Remove"}
        </button>
      );
    }

    const items: DropdownItem[] = (sharedData.topActionOptions || []).map(
      (option) => ({
        label: option,
        onClick: () => onTopActionChange?.(option),
      })
    );

    return (
      <L2BDropdownMenu
        align="end"
        className="min-w-[98px] rounded-[8px] border border-[#E5E5E5] bg-white shadow-[0_6px_16px_rgba(0,0,0,0.12)] p-0"
        items={items}
        trigger={
          <button
            type="button"
            className={cn(
              "inline-flex h-[24px] items-center gap-1 rounded-full px-3 text-[10px] font-medium leading-none",
              chipClasses[sharedData.selectedTopAction || ""] ||
                "bg-[#F48D8D] text-white"
            )}
          >
            <span>{sharedData.selectedTopAction || "Disable"}</span>
            <ChevronDown className="h-3 w-3" />
          </button>
        }
      />
    );
  };

  const renderOdometer = () => {
    const odometerData = data as OdometerData;

    const columns: ColumnConfig<OdometerRow>[] = [
      {
        header: "Status",
        key: "status",
        width: 100,
        align: "center",
        render: (value: string) => (
          <span
            className={cn(
              "inline-flex min-w-[64px] items-center justify-center rounded-full px-3 py-1 text-[10px] font-medium",
              chipClasses[value] || "bg-neutral-100 text-neutral-500"
            )}
          >
            {value}
          </span>
        ),
      },
      {
        header: "Reading (Km)",
        key: "readingKm",
        width: 110,
        align: "center",
        render: (value: string) => (
          <span className="text-[11px] font-medium text-neutral-500">
            {value}
          </span>
        ),
      },
      {
        header: "Hour meter",
        key: "hourMeter",
        width: 100,
        align: "center",
        render: (value: string) => (
          <span className="text-[11px] font-medium text-neutral-500">
            {value}
          </span>
        ),
      },
      {
        header: "Reason",
        key: "reason",
        width: 110,
        align: "center",
        render: (value: string) => (
          <span className="text-[11px] font-medium text-neutral-400">
            {value}
          </span>
        ),
      },
      {
        header: "Photo",
        key: "photo",
        width: 70,
        align: "center",
        render: (value: string) =>
          value ? (
            <img
              src={value}
              alt="photo"
              className="mx-auto h-[22px] w-[22px] rounded-[4px] object-cover"
            />
          ) : (
            <span className="text-[11px] text-neutral-300">-</span>
          ),
      },
    ];

    return (
      <div className="flex flex-col gap-4">
        <DynamicTable
          columns={columns}
          data={odometerData.rows}
          maxHeight={110}
          minWidth={650}
        />

        <div className="flex items-end justify-between gap-6">
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-[12px] font-medium text-neutral-400">
                Total km
              </span>
              <div className="flex h-[38px] w-[96px] items-center rounded-[8px] border border-neutral-200 px-3 text-[13px] font-medium text-neutral-600">
                {odometerData.totalKm}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[12px] font-medium text-neutral-400">
                Total hours
              </span>
              <div className="flex h-[38px] w-[96px] items-center rounded-[8px] border border-neutral-200 px-3 text-[13px] font-medium text-neutral-600">
                {odometerData.totalHours}
              </div>
            </div>
          </div>

          <Button
            onClick={onDownloadLogs}
            className="h-[40px] min-w-[130px] rounded-[8px] !bg-[#F6B332] !text-black hover:!bg-[#e3a92f]"
          >
            {odometerData.downloadButtonText || "Download Logs"}
          </Button>
        </div>
      </div>
    );
  };

  const renderShared = () => {
    const sharedData = data as SharedDetailsData;

    return (
      <DynamicTable
        columns={sharedData.columns}
        data={sharedData.rows}
        maxHeight={sharedData.tableMaxHeight ?? 110}
        minWidth={sharedData.tableMinWidth ?? 650}
      />
    );
  };

  return (
    <>
      <div
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 bg-black/30 transition-opacity duration-300",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      />

      <div
        className={cn(
          "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-[16px] bg-white shadow-xl transition-all duration-300",
          "flex flex-col px-6 py-5",
          config.width,
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        )}
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-[18px] font-semibold text-[#2D2D2D]">
              {(data as any).title}
            </h2>
            {config.showInfo ? (
              <Info className="h-4 w-4 text-[#8D8D8D]" />
            ) : null}
          </div>

          {renderTopRight()}
        </div>

        <div>{type === "odometerHistory" ? renderOdometer() : renderShared()}</div>
      </div>
    </>
  );
}