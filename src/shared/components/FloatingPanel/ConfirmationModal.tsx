"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/shared/excomponent/ui/UIButton";
import {
  CircleX,
  Trash2,
  ArrowDownCircle,
  Ban
} from "lucide-react";

export type ConfirmationType =
  | "removeTeamMember"
  | "removePaymentCard"
  | "moneyAdded"
  | "deleteRatingOrFeedback"
  | "removeMachine"
  | "disableMachine"
  | "enableMachine"
  | "walletTransfer"
  | "removeSkill";

interface ConfirmationModalProps {
  open: boolean;
  type: ConfirmationType;
  onConfirm: () => void;
  onCancel: () => void;

  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  icon?: React.ReactNode;
  hideCancel?: boolean;

  confirmButtonClassName?: string;
  cancelButtonClassName?: string;
}

const successIcon = (
  <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border border-[#A7E6B8]">
    <span className="text-[36px] text-[#36C275]">₹</span>
  </div>
);

const dangerCircleIcon = (
  <CircleX className="h-[60px] w-[60px] text-[#F26D6D]" strokeWidth={1.75} />
);

const trashIcon = (
  <Trash2 className="h-[60px] w-[60px] text-[#F25555]" strokeWidth={1.75} />
);

const enableIcon = (
  <ArrowDownCircle className="h-[60px] w-[60px] text-[#36C275]" strokeWidth={1.75} />
);

const disableIcon = (
  <Ban className="h-[60px] w-[60px] text-[#F25555]" strokeWidth={1.75} />
);

const confirmationConfig = {
  removeTeamMember: {
    title: "Remove Team Member",
    description:
      "Are you sure you want to remove Samadhan from Site A? They will no longer have access to site-related tasks and updates.",
    confirmText: "Remove",
    cancelText: "Cancel",
    icon: dangerCircleIcon,
    hideCancel: false,
    confirmButtonClassName: "bg-[#FEB637] text-black hover:bg-[#FEB637]/90",
  },
  removePaymentCard: {
    title: "Remove Payment Card",
    description:
      "Are you sure you want to remove this payment card? This card will no longer be available for future payments.",
    confirmText: "Remove Card",
    cancelText: "Cancel",
    icon: dangerCircleIcon,
    hideCancel: false,
    confirmButtonClassName: "bg-[#FEB637] text-black hover:bg-[#FEB637]/90",
  },
  moneyAdded: {
    title: "Money added successfully. Your wallet balance has been updated.",
    description: "",
    confirmText: "Done",
    cancelText: "Cancel",
    icon: successIcon,
    hideCancel: true,
    confirmButtonClassName: "bg-[#FEB637] text-black hover:bg-[#FEB637]/90",
  },
  deleteRatingOrFeedback: {
    title: "Delete Rating or Feedback?",
    description:
      "You are about to delete your rating or feedback for Order #PDF132424. Once deleted, you will not be able to restore this rating or feedback.",
    confirmText: "Yes, Delete",
    cancelText: "Cancel",
    icon: trashIcon,
    hideCancel: false,
    confirmButtonClassName: "bg-[#FEB637] text-black hover:bg-[#FEB637]/90",
  },
  removeMachine: {
    title: "Remove Machine?",
    description:
      "Are you sure you want to remove this machine? This action cannot be undone.",
    confirmText: "Remove",
    cancelText: "Cancel",
    icon: trashIcon,
    hideCancel: false,
    confirmButtonClassName: "bg-[#FEB637] text-black hover:bg-[#FEB637]/90",
  },
  disableMachine: {
    title: "Disable Machine?",
    description:
      "Are you sure you want to disable this machine? It will no longer be available for bookings or assignments.",
    confirmText: "Disable",
    cancelText: "Cancel",
    icon: disableIcon,
    hideCancel: false,
    confirmButtonClassName: "bg-[#FEB637] text-black hover:bg-[#FEB637]/90",
  },
  enableMachine: {
    title: "Enable Machine?",
    description:
      "Do you want to enable this machine? It will become available for bookings and assignments.",
    confirmText: "Enable",
    cancelText: "Cancel",
    icon: enableIcon,
    hideCancel: false,
    confirmButtonClassName: "bg-[#FEB637] text-black hover:bg-[#FEB637]/90",
  },
  walletTransfer: {
    title:
      "You're about to transfer ₹[amount] to [Recipient Name]. Do you want to continue?",
    description: "",
    confirmText: "Done",
    cancelText: "Cancel",
    icon: successIcon,
    hideCancel: true,
    confirmButtonClassName: "bg-[#FEB637] text-black hover:bg-[#FEB637]/90",
  },
  removeSkill: {
    title: 'Remove “Excavator Operator” Skill?',
    description:
      "This will delete the skill and all uploaded certificates or documents linked to it.",
    confirmText: "Remove",
    cancelText: "Cancel",
    icon: trashIcon,
    hideCancel: false,
    confirmButtonClassName: "bg-[#FEB637] text-black hover:bg-[#FEB637]/90",
  },
} as const;

export default function ConfirmationModal({
  open,
  type,
  onConfirm,
  onCancel,
  title,
  description,
  confirmText,
  cancelText,
  icon,
  hideCancel,
  confirmButtonClassName,
  cancelButtonClassName,
}: ConfirmationModalProps) {
  const preset = confirmationConfig[type];

  const finalTitle = title ?? preset.title;
  const finalDescription = description ?? preset.description;
  const finalConfirmText = confirmText ?? preset.confirmText;
  const finalCancelText = cancelText ?? preset.cancelText;
  const finalIcon = icon ?? preset.icon;
  const finalHideCancel = hideCancel ?? preset.hideCancel;
  const finalConfirmButtonClassName =
    confirmButtonClassName ?? preset.confirmButtonClassName;

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/30 transition-opacity duration-300",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={onCancel}
      />

      <div
        className={cn(
          "fixed left-1/2 top-1/2 z-50 h-[328px] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-[16px] bg-white px-6 py-5 shadow-xl transition-all duration-300",
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex h-[248px] w-[424px] flex-col items-center text-center">
            {finalIcon && <div className="mb-[14px] flex shrink-0 items-center justify-center">{finalIcon}</div>}

            <h2 className="font-['Poppins'] text-[24px] font-medium leading-[100%] tracking-[0] text-center text-[#000000]">
              {finalTitle}
            </h2>

            {finalDescription ? (
              <p className="mt-3 max-w-[424px] font-['Poppins'] text-[16px] font-normal leading-[100%] tracking-[0] text-center text-[#8E8E8E]">
                {finalDescription}
              </p>
            ) : null}

            <div
              className={cn(
                "mt-auto flex w-full items-center gap-6 pt-[28px]",
                finalHideCancel ? "justify-center" : ""
              )}
            >
              {!finalHideCancel && (
                <Button
                  onClick={onCancel}
                  variant="outline"
                  size="default"
                  className={cn(
                    "h-[40px] w-[200px] rounded-[8px] border border-[#D9D9D9] bg-white text-black shadow-none hover:bg-gray-50",
                    cancelButtonClassName
                  )}
                >
                  <span className="font-['Poppins'] text-[16px] font-medium leading-[100%] tracking-[0] text-center">
                    {finalCancelText}
                  </span>
                </Button>
              )}

              <Button
                onClick={onConfirm}
                variant="default"
                size="default"
                className={cn(
                  "h-[40px] rounded-[8px] px-4 py-3 shadow-none",
                  finalHideCancel ? "w-[200px]" : "flex-1",
                  finalConfirmButtonClassName
                )}
              >
                <span className="font-['Poppins'] text-[16px] font-medium leading-[100%] tracking-[0] text-center">
                  {finalConfirmText}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}