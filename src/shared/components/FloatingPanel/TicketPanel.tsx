"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { L2BButton } from "@/design-system/components/L2BButton";
import {
  L2BDropdownMenu,
  DropdownItem,
} from "@/shared/excomponent/ui/L2BDropdownMenu";
import { ToggleField } from "@/shared/excomponent/ui/ToggleField";

export type TicketActionType = "escalate" | "transfer" | "resolve";

type DropdownOption = {
  label: string;
  value: string;
};

interface TicketActionModalProps {
  open: boolean;
  type: TicketActionType;
  date: string;
  reason: string;
  onReasonChange: (value: string) => void;
  onClose: () => void;
  onSubmit: () => void;

  escalateLevel?: string;
  onEscalateLevelChange?: (value: string) => void;
  escalateLevelOptions?: DropdownOption[];

  assignee?: string;
  onAssigneeChange?: (value: string) => void;
  assigneeOptions?: DropdownOption[];

  autoAssignEnabled?: boolean;
  onAutoAssignChange?: (value: boolean) => void;
}

const panelContent = {
  escalate: {
    title: "Escalate to Technical Team",
    submitText: "Escalate",
    heightClass: "min-h-[550px]",
    reasonLabel: "Reason to escalated",
    showEscalateLevel: true,
    showAssignTo: true,
    showToggle: true,
  },
  transfer: {
    title: "Transfer Ticket",
    submitText: "Transfer",
    heightClass: "min-h-[402px]",
    reasonLabel: "Reason to Transfer",
    showEscalateLevel: false,
    showAssignTo: true,
    showToggle: false,
  },
  resolve: {
    title: "Ticket Resolved",
    submitText: "Submit",
    heightClass: "min-h-[306px]",
    reasonLabel: "Agent Annotation",
    showEscalateLevel: false,
    showAssignTo: false,
    showToggle: false,
  },
} as const;

function DropdownField({
  value,
  placeholder,
  options,
  onSelect,
}: {
  value?: string;
  placeholder?: string;
  options: DropdownOption[];
  onSelect?: (value: string) => void;
}) {
  const items: DropdownItem[] = options.map((item) => ({
    label: item.label,
    onClick: () => onSelect?.(item.value),
  }));

  return (
    <div className="mt-[8px] w-full">
      <L2BDropdownMenu
        align="end"
        items={items}
        trigger={
          <L2BButton
            type="button"
            variant="outline"
            size="full"
            className="flex h-[44px] items-center justify-between rounded-[8px] border-neutral-4 bg-white px-[14px] text-left text-[15px] font-medium text-neutral-2"
          >
            <span>{value || placeholder}</span>

            <span className="flex h-[14px] w-[14px] items-center justify-center rounded-[4px] bg-success-1">
              <ChevronDown
                className="h-[10px] w-[10px] text-white"
                strokeWidth={2.5}
              />
            </span>
          </L2BButton>
        }
      />
    </div>
  );
}

export function TicketActionModal({
  open,
  type,
  date,
  reason,
  onReasonChange,
  onClose,
  onSubmit,
  escalateLevel = "",
  onEscalateLevelChange,
  escalateLevelOptions = [],
  assignee = "",
  onAssigneeChange,
  assigneeOptions = [],
  autoAssignEnabled = false,
  onAutoAssignChange,
}: TicketActionModalProps) {
  const content = panelContent[type];

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div
        className={`w-[656px] rounded-[16px] bg-white px-6 pb-5 pt-6 shadow-xl ${content.heightClass}`}
      >
        <div className="flex items-start justify-between">
          <h2 className="text-[18px] font-semibold text-neutral-2">
            {content.title}
          </h2>

          <p className="text-[14px] font-medium text-[#6B6B6B]">
            Date: {date}
          </p>
        </div>

        <div className="mt-[20px] flex flex-col">
          <span className="text-[16px] font-medium text-[#6B6B6B]">
            {content.reasonLabel}
          </span>

          <textarea
            value={reason}
            onChange={(e) => onReasonChange(e.target.value)}
            className="mt-[8px] h-[102px] w-full resize-none rounded-[8px] border border-[#D9D9D9] bg-white px-[16px] py-[12px] text-[15px] font-medium leading-[22px] text-[#4A4A4A] outline-none"
          />
        </div>

        {content.showEscalateLevel && (
          <div className="mt-[20px] flex flex-col">
            <span className="text-[16px] font-medium text-[#6B6B6B]">
              Escalate level
            </span>

            <DropdownField
              value={escalateLevel}
              placeholder="Select level"
              options={escalateLevelOptions}
              onSelect={onEscalateLevelChange}
            />
          </div>
        )}

        {content.showAssignTo && (
          <div className="mt-[20px] flex flex-col">
            <span className="text-[16px] font-medium text-[#6B6B6B]">
              Assign to
            </span>

            <DropdownField
              value={assignee}
              placeholder="Select assignee"
              options={assigneeOptions}
              onSelect={onAssigneeChange}
            />
          </div>
        )}

        {content.showToggle && (
          <div className="mt-[20px] flex items-center gap-[12px]">
            <ToggleField
              checked={autoAssignEnabled}
              onChange={onAutoAssignChange}
              className="w-auto shrink-0 justify-start gap-0"
            />

            <p className="text-[12px] font-normal leading-[18px] text-[#6B6B6B]">
              When enabled, tickets will be automatically assigned to the
              available support agent.
            </p>
          </div>
        )}

        <div className="mt-[20px] flex items-center justify-end gap-[12px]">
          <L2BButton
            onClick={onClose}
            variant="outline"
            radius="rounded-[8px]"
            className="h-[40px] w-[83px]"
          >
            Cancel
          </L2BButton>

          <L2BButton
            onClick={onSubmit}
            variant="primary"
            radius="rounded-[8px]"
            className="h-[40px] w-[83px]"
          >
            {content.submitText}
          </L2BButton>
        </div>
      </div>
    </div>
  );
}