"use client";

import * as React from "react";
import { Wallet, Plus, CirclePlus, CircleMinus, ListFilter } from "lucide-react";
import { L2BButton } from "@/design-system/components/L2BButton";
import {
  L2BDropdownMenu,
  DropdownItem,
} from "@/shared/excomponent/ui/L2BDropdownMenu";

export type WalletTransaction = {
  id: string;
  title: string;
  dateTime: string;
  amount: string;
  type: "credited" | "debited";
};

interface EarningIncentivePanelProps {
  walletBalance: string;
  transactions: WalletTransaction[];
  onAddMoney?: () => void;
  onFilterClick?: () => void;
  filterItems?: DropdownItem[];

  panelWidth?: string;
  panelHeight?: string;
  walletCardWidth?: string;
  walletCardHeight?: string;
  transactionBoxWidth?: string;
  transactionBoxHeight?: string;
}

function TransactionRow({ item }: { item: WalletTransaction }) {
  const isCredited = item.type === "credited";

  return (
    <div className="flex items-start justify-between border-b border-[#E9E9E9] px-[16px] py-[14px] last:border-b-0">
      <div className="flex items-start gap-[12px]">
        <div className="mt-[2px]">
          {isCredited ? (
            <CirclePlus className="h-[18px] w-[18px] text-[#56C293]" />
          ) : (
            <CircleMinus className="h-[18px] w-[18px] text-[#F6B332]" />
          )}
        </div>

        <div className="flex flex-col">
          <span className="text-[14px] font-semibold text-[#2D2D2D]">
            {item.title}
          </span>
          <span className="text-[12px] font-normal text-[#B3B3B3]">
            {item.dateTime}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <span className="text-[14px] font-semibold text-[#2D2D2D]">
          {item.amount}
        </span>
        <span className="text-[12px] font-normal capitalize text-[#D0D0D0]">
          {item.type}
        </span>
      </div>
    </div>
  );
}

export function EarningIncentivePanel({
  walletBalance,
  transactions,
  onAddMoney,
  onFilterClick,
  filterItems,
  panelWidth = "w-[522px]",
  panelHeight = "h-[588px]",
  walletCardWidth = "w-[474px]",
  walletCardHeight = "h-[120px]",
  transactionBoxWidth = "w-[474px]",
  transactionBoxHeight = "h-[308px]",
}: EarningIncentivePanelProps) {
  const resolvedFilterItems: DropdownItem[] =
    filterItems && filterItems.length > 0
      ? filterItems
      : [
          { label: "All Transactions", onClick: onFilterClick },
          { label: "Credited", onClick: onFilterClick },
          { label: "Debited", onClick: onFilterClick },
        ];

  return (
    <div
      className={`${panelWidth} ${panelHeight} rounded-[16px] bg-white px-[24px] py-[20px] shadow-[0_4px_20px_0_rgba(0,0,0,0.08)]`}
    >
      <div className="flex h-full flex-col">
        <h2 className="text-[18px] font-semibold text-[#2D2D2D]">
          Earning & Incentive
        </h2>

        <div className="mt-[20px] flex flex-col gap-[20px]">
          <div
            className={`${walletCardWidth} ${walletCardHeight} rounded-[16px] border border-[#E7E1D7] bg-[linear-gradient(180deg,rgba(246,179,50,0.18)_0%,rgba(255,255,255,0)_60%)] px-[18px] py-[16px]`}
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-[8px]">
                <div className="flex items-center gap-[8px]">
                  <Wallet className="h-[18px] w-[18px] text-[#8C8C8C]" />
                  <span className="text-[15px] font-medium text-[#8C8C8C]">
                    Wallet Balance
                  </span>
                </div>

                <span className="text-[24px] font-semibold leading-none text-[#2D2D2D]">
                  {walletBalance}
                </span>
              </div>

              <L2BButton
                onClick={onAddMoney}
                variant="outline"
                radius="rounded-[12px]"
                textColor="text-[#4A4A4A]"
                className="h-[48px] w-auto border border-[#E8E8E8] bg-white px-[16px] shadow-none hover:bg-white"
              >
                <Plus className="mr-[6px] h-[16px] w-[16px]" />
                Add Money
              </L2BButton>
            </div>
          </div>

          <div className={`${transactionBoxWidth} flex items-center justify-between`}>
            <h3 className="text-[18px] font-semibold text-[#2D2D2D]">
              Transaction History
            </h3>

            <L2BDropdownMenu
              align="end"
              items={resolvedFilterItems}
              className="w-[180px]"
              trigger={
                <button
                  type="button"
                  className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] border border-[#E8E8E8] bg-white"
                >
                  <ListFilter className="h-[16px] w-[16px] text-[#6B6B6B]" />
                </button>
              }
            />
          </div>
            <div
  className={`${transactionBoxWidth} ${transactionBoxHeight} rounded-[16px] border border-[#E8E8E8] bg-white`}
>
  {transactions.length === 0 ? (
    <div className="flex h-full items-center justify-center text-[14px] text-[#9B9B9B]">
      No transactions available
    </div>
  ) : (
    <div className="h-full overflow-y-scroll pr-[4px]">
      {transactions.map((item) => (
        <TransactionRow key={item.id} item={item} />
      ))}
    </div>
  )}
</div>
        </div>
      </div>
    </div>
  );
}