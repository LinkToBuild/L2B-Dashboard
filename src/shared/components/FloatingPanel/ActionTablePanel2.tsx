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
  manageActionOptions?: string[];
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
  onManageActionChange?: (value: string, row?: SharedRow) => void;
  onDownloadLogs?: () => void;
}

const chipClasses: Record<string, string> = {
  Start: "bg-[#FFF1D8] text-[#F6B332]",
  Pause: "bg-[#E7EEFF] text-[#6E9BFF]",
  Resume: "bg-[#DCF8E6] text-[#56C293]",
  End: "bg-[#FDE7E7] text-[#F05A5A]",
  Disable: "bg-[#EC7E7E] text-white",
  Remove: "bg-[#EC7E7E] text-white",
  Approve: "bg-[#67C999] text-white",
  Approved: "bg-[#67C999] text-white",
  Rejected: "bg-[#E5E5E5] text-[#8A8A8A]",
  Pending: "bg-[#E5E5E5] text-[#8A8A8A]",
  "On hold": "bg-[#E5E5E5] text-[#8A8A8A]",
  Enable: "bg-[#E5E5E5] text-[#8A8A8A]",
};

const DEFAULT_TOP_DROPDOWN_OPTIONS = [
  "Enable",
  "Disable",
  "Remove",
];

const DEFAULT_MANAGE_DROPDOWN_OPTIONS = [
  "Rejected",
  "Approve",
  "Pending",
  "On hold",
];

const modalConfig: Record<
  MachineDetailsModalType,
  { width: string; minHeight: string; showInfo: boolean }
> = {
  odometerHistory: {
    width: "w-[731px]",
    minHeight: "min-h-[310px]",
    showInfo: false,
  },
  documentDetails: {
    width: "w-[731px]",
    minHeight: "min-h-[310px]",
    showInfo: true,
  },
  skillsDetails: {
    width: "w-[731px]",
    minHeight: "min-h-[180px]",
    showInfo: true,
  },
  machineDocumentDetails: {
    width: "w-[731px]",
    minHeight: "min-h-[310px]",
    showInfo: true,
  },
};

function StatusDropdownChip({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange?: (value: string) => void;
  options: string[];
}) {
  const items: DropdownItem[] = options.map((option) => ({
    label: option,
    onClick: () => onChange?.(option),
  }));

  return (
    <L2BDropdownMenu
      align="end"
      className="w-[112px] rounded-[6px] border border-[#D9D9D9] bg-white p-0 shadow-none"
      items={items}
      trigger={
        <button
          type="button"
          className={cn(
            "inline-flex h-[30px] items-center gap-[4px] rounded-full px-[12px] text-[10px] font-medium leading-none",
            chipClasses[value] || "bg-[#EC7E7E] text-white"
          )}
        >
          <span>{value}</span>
          <ChevronDown className="h-[12px] w-[12px]" />
        </button>
      }
    />
  );
}

export function MachineDetailsModal({
  open,
  onClose,
  type,
  data,
  onTopActionChange,
  onManageActionChange,
  onDownloadLogs,
}: MachineDetailsModalProps) {
  const config = modalConfig[type];

  const renderTopRight = () => {
    if (type === "odometerHistory") {
      const odometerData = data as OdometerData;

      return (
        <div className="flex items-center gap-[10px]">
          <span className="inline-flex h-[20px] items-center rounded-full bg-[#FFF1D8] px-[10px] text-[9px] font-medium text-[#F6B332]">
            {odometerData.dateText || "16 Dec 2025"}
          </span>

          <button
            type="button"
            className="flex h-[20px] w-[20px] items-center justify-center rounded-[4px] text-neutral-500 hover:bg-neutral-100"
          >
            <ListFilter size={14} />
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
            "inline-flex h-[30px] items-center rounded-full px-[12px] text-[10px] font-medium leading-none",
            chipClasses[sharedData.topActionText || ""] ||
              "bg-[#EC7E7E] text-white"
          )}
        >
          {sharedData.topActionText || "Remove"}
        </button>
      );
    }

    return (
      <StatusDropdownChip
        value={sharedData.selectedTopAction || "Disable"}
        onChange={onTopActionChange}
        options={sharedData.topActionOptions || DEFAULT_TOP_DROPDOWN_OPTIONS}
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
              "inline-flex min-w-[64px] items-center justify-center rounded-full px-[12px] py-[4px] text-[10px] font-medium",
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
        width: 120,
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
        width: 110,
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
        width: 120,
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
      <div className="flex flex-col gap-[18px]">
        <div className="mx-auto w-[675px]">
          <DynamicTable
            columns={columns}
            data={odometerData.rows}
            maxHeight={202}
            minWidth={675}
          />
        </div>

        <div className="flex items-end justify-between gap-6">
          <div className="flex gap-[12px]">
            <div className="flex flex-col gap-[6px]">
              <span className="text-[12px] font-medium text-neutral-400">
                Total km
              </span>
              <div className="flex h-[40px] w-[96px] items-center rounded-[6px] border border-neutral-200 px-3 text-[13px] font-medium text-neutral-600">
                {odometerData.totalKm}
              </div>
            </div>

            <div className="flex flex-col gap-[6px]">
              <span className="text-[12px] font-medium text-neutral-400">
                Total hours
              </span>
              <div className="flex h-[40px] w-[96px] items-center rounded-[6px] border border-neutral-200 px-3 text-[13px] font-medium text-neutral-600">
                {odometerData.totalHours}
              </div>
            </div>
          </div>

          <Button
            onClick={onDownloadLogs}
            className="h-[40px] min-w-[140px] rounded-[6px] !bg-[#F6B332] !text-black hover:!bg-[#e3a92f]"
          >
            {odometerData.downloadButtonText || "Download Logs"}
          </Button>
        </div>
      </div>
    );
  };

  const renderShared = () => {
    const sharedData = data as SharedDetailsData;

    const columns: ColumnConfig<SharedRow>[] = sharedData.columns.map(
      (column) => {
        const key = String(column.key).toLowerCase();
        const header = column.header.toLowerCase();
        const isManageColumn =
          key.includes("manage") || header.includes("manage");

        if (!isManageColumn) return column;

        return {
          ...column,
          align: "center" as const,
          render: (value: any, row: SharedRow) => (
            <StatusDropdownChip
              value={String(value)}
              onChange={(nextValue) => onManageActionChange?.(nextValue, row)}
              options={
                sharedData.manageActionOptions || DEFAULT_MANAGE_DROPDOWN_OPTIONS
              }
            />
          ),
        };
      }
    );

    return (
      <div className="mx-auto w-[675px]">
        <DynamicTable
          columns={columns}
          data={sharedData.rows}
          maxHeight={sharedData.tableMaxHeight ?? 202}
          minWidth={660}
        />
      </div>
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
          "flex flex-col px-[28px] py-[22px] overflow-hidden",
          "max-h-[85vh]",
          config.width,
          config.minHeight,
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        )}
      >
        <div className="mb-[18px] flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <h2 className="text-[18px] font-semibold text-[#2D2D2D]">
              {(data as any).title}
            </h2>
            {config.showInfo ? (
              <Info className="h-[15px] w-[15px] text-[#8D8D8D]" />
            ) : null}
          </div>

          {renderTopRight()}
        </div>

        <div className="flex-1 overflow-hidden">
          {type === "odometerHistory" ? renderOdometer() : renderShared()}
        </div>
      </div>
    </>
  );
}