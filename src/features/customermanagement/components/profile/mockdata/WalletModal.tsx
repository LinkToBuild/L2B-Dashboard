"use client";

import * as React from "react";
import {
  EarningIncentivePanel,
  WalletTransaction,
} from "@/shared/components/EarningIncentivePanel";
import { AddMoneyPanel } from "@/shared/components/AddMoneyPanel";
import ConfirmationModal from "@/shared/components/ConfirmationModal";

interface WalletModalProps {
  open: boolean;
  onClose: () => void;
  walletBalance?: string;
  onAddMoney?: () => void;
  onFilterClick?: () => void;
}

const MOCK_TRANSACTIONS: WalletTransaction[] = [
  {
    id: "1",
    title: "ICICI Bank card",
    dateTime: "10 nov 25, 12.30 PM",
    amount: "₹1,200",
    type: "credited",
  },
  {
    id: "2",
    title: "ICICI Bank card",
    dateTime: "10 nov 25, 12.30 PM",
    amount: "₹1,200",
    type: "credited",
  },
  {
    id: "3",
    title: "#ABC1234567",
    dateTime: "10 nov 25, 12.30 PM",
    amount: "₹1,200",
    type: "debited",
  },
  {
    id: "4",
    title: "#ABC1234567",
    dateTime: "10 nov 25, 12.30 PM",
    amount: "₹1,200",
    type: "debited",
  },
  {
    id: "5",
    title: "#ABC1234567",
    dateTime: "10 nov 25, 12.30 PM",
    amount: "₹1,200",
    type: "debited",
  },
  {
    id: "6",
    title: "#ABC1234567",
    dateTime: "10 nov 25, 12.30 PM",
    amount: "₹1,200",
    type: "debited",
  },
];

export function WalletModal({
  open,
  onClose,
  walletBalance = "₹ 6,00,000",
  onAddMoney,
  onFilterClick,
}: WalletModalProps) {
  const [isAddMoneyOpen, setIsAddMoneyOpen] = React.useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = React.useState(false);
  const [amount, setAmount] = React.useState("20,000");

  const handleOpenAddMoneyPanel = () => {
    setIsAddMoneyOpen(true);
    onAddMoney?.();
  };

  const handleCloseAddMoneyPanel = () => {
    setIsAddMoneyOpen(false);
    onClose();
  };

  const handleSubmitAddMoney = () => {
    console.log("Add money amount:", amount);
    setIsAddMoneyOpen(false);
    setIsSuccessModalOpen(true);
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
    onClose();
  };

  const showWalletPanel = open && !isAddMoneyOpen && !isSuccessModalOpen;
  const showAddMoneyPanel = open && isAddMoneyOpen && !isSuccessModalOpen;

  return (
    <>
      {showWalletPanel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
          <button
            type="button"
            onClick={onClose}
            className="absolute inset-0"
            aria-label="Close wallet modal"
          />

          <div className="relative">
            <EarningIncentivePanel
              walletBalance={walletBalance}
              transactions={MOCK_TRANSACTIONS}
              onAddMoney={handleOpenAddMoneyPanel}
              onFilterClick={onFilterClick}
              panelWidth="w-[522px]"
              panelHeight="h-[588px]"
              walletCardWidth="w-[474px]"
              walletCardHeight="h-[120px]"
              transactionBoxWidth="w-[474px]"
              transactionBoxHeight="h-[308px]"
            />
          </div>
        </div>
      )}

      {showAddMoneyPanel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
          <button
            type="button"
            onClick={handleCloseAddMoneyPanel}
            className="absolute inset-0"
            aria-label="Close add money panel"
          />

          <div className="relative">
            <AddMoneyPanel
              amount={amount}
              onAmountChange={setAmount}
              onCancel={handleCloseAddMoneyPanel}
              onSubmit={handleSubmitAddMoney}
            />
          </div>
        </div>
      )}

      <ConfirmationModal
        open={isSuccessModalOpen}
        type="moneyAdded"
        onConfirm={handleCloseSuccessModal}
        onCancel={handleCloseSuccessModal}
      />
    </>
  );
}