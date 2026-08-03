"use client";

import * as React from "react";
import { Download } from "lucide-react";
import { L2BButton } from "@/design-system/components/L2BButton";
import { CustomInput } from "@/shared/excomponent/ui/TextField";

export interface AddPaymentMethodFormData {
  accountNo: string;
  ifscCode: string;
  bankBranchName: string;
  mobileNo: string;
  upiId: string;
  cancelledCheck: string;
}

interface AddPaymentMethodPanelProps {
  onCancel: () => void;
  onUpdate?: (data: AddPaymentMethodFormData) => void;
  title?: string;
  panelWidth?: string;
  panelHeight?: string;
}

const INITIAL_FORM_DATA: AddPaymentMethodFormData = {
  accountNo: "",
  ifscCode: "",
  bankBranchName: "",
  mobileNo: "",
  upiId: "",
  cancelledCheck: "",
};

function getInputTextClass(value: string) {
  return value.trim() ? "text-[#4A4A4A]" : "text-[#A7A7A7]";
}

export function AddPaymentMethodPanel({
  onCancel,
  onUpdate,
  title = "Add new payment method",
  panelWidth = "w-[572px]",
  panelHeight = "h-[418px]",
}: AddPaymentMethodPanelProps) {
  const [formData, setFormData] =
    React.useState<AddPaymentMethodFormData>(INITIAL_FORM_DATA);

  const handleChange =
    (key: keyof AddPaymentMethodFormData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [key]: event.target.value,
      }));
    };

  const handleUpdate = () => {
    onUpdate?.(formData);
  };

  const isFormFilled = Object.values(formData).some((value) => value.trim());

  return (
    <div
      className={`${panelWidth} ${panelHeight} rounded-[20px] bg-white px-[24px] pt-[24px] pb-[20px] shadow-xl`}
    >
      <div className="flex h-full flex-col">
        <h2 className="text-[18px] font-semibold text-neutral-2">{title}</h2>

        <div className="mt-[24px] grid grid-cols-2 gap-x-[20px] gap-y-[22px]">
          <div className="flex w-[252px] flex-col gap-[8px]">
            <span className="text-[16px] font-medium text-[#9A9A9A]">
              Account no
            </span>
            <div className="h-[44px] w-[252px]">
              <CustomInput
                fullWidth
                sizeVariant="xl"
                value={formData.accountNo}
                onChange={handleChange("accountNo")}
                placeholder="-"
                InputProps={{
                  className: getInputTextClass(formData.accountNo),
                }}
              />
            </div>
          </div>

          <div className="flex w-[252px] flex-col gap-[8px]">
            <span className="text-[16px] font-medium text-[#9A9A9A]">
              IFSC Code
            </span>
            <div className="h-[44px] w-[252px]">
              <CustomInput
                fullWidth
                sizeVariant="xl"
                value={formData.ifscCode}
                onChange={handleChange("ifscCode")}
                placeholder="-"
                InputProps={{
                  className: getInputTextClass(formData.ifscCode),
                }}
              />
            </div>
          </div>

          <div className="flex w-[252px] flex-col gap-[8px]">
            <span className="text-[16px] font-medium text-[#9A9A9A]">
              Bank branch name
            </span>
            <div className="h-[44px] w-[252px]">
              <CustomInput
                fullWidth
                sizeVariant="xl"
                value={formData.bankBranchName}
                onChange={handleChange("bankBranchName")}
                placeholder="-"
                InputProps={{
                  className: getInputTextClass(formData.bankBranchName),
                }}
              />
            </div>
          </div>

          <div className="flex w-[252px] flex-col gap-[8px]">
            <span className="text-[16px] font-medium text-[#9A9A9A]">
              Mobile no
            </span>
            <div className="h-[44px] w-[252px]">
              <CustomInput
                fullWidth
                sizeVariant="xl"
                value={formData.mobileNo}
                onChange={handleChange("mobileNo")}
                placeholder="-"
                InputProps={{
                  className: getInputTextClass(formData.mobileNo),
                }}
              />
            </div>
          </div>

          <div className="flex w-[252px] flex-col gap-[8px]">
            <span className="text-[16px] font-medium text-[#9A9A9A]">
              UPI Id
            </span>
            <div className="h-[44px] w-[252px]">
              <CustomInput
                fullWidth
                sizeVariant="xl"
                value={formData.upiId}
                onChange={handleChange("upiId")}
                placeholder="-"
                InputProps={{
                  className: getInputTextClass(formData.upiId),
                }}
              />
            </div>
          </div>

          <div className="flex w-[252px] flex-col gap-[8px]">
            <span className="text-[16px] font-medium text-[#9A9A9A]">
              Cancelled check
            </span>
            <div className="h-[44px] w-[252px]">
              <CustomInput
                fullWidth
                sizeVariant="xl"
                value={formData.cancelledCheck}
                onChange={handleChange("cancelledCheck")}
                placeholder="-"
                InputProps={{
                  className: getInputTextClass(formData.cancelledCheck),
                  endAdornment: (
                    <L2BButton
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="mr-[8px] flex items-center justify-center bg-transparent p-0 hover:bg-transparent"
                    >
                      <Download className="h-[16px] w-[16px] text-neutral-3" />
                    </L2BButton>
                  ),
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-end gap-[12px] pt-[20px]">
          <L2BButton
            onClick={onCancel}
            variant="outline"
            size="medium"
            radius="rounded-[10px]"
          >
            Cancel
          </L2BButton>

          <L2BButton
            onClick={handleUpdate}
            variant="primary"
            size="medium"
            radius="rounded-[10px]"
            disabled={!isFormFilled}
          >
            Update
          </L2BButton>
        </div>
      </div>
    </div>
  );
}