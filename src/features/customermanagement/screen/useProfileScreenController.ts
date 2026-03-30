"use client";

import { useMemo, useState } from "react";
import { walletPanelMockData } from "@/features/customermanagement/components/profile/mockdata/WalletModal";
import { addProjectDetailsMockData } from "@/features/customermanagement/components/profile/mockdata/AddProjectDetailsModal";
import { addProjectTeamMembersMockData } from "@/features/customermanagement/components/profile/mockdata/AddProjectTeamMembersModal";
import { receiverDetailsMockData } from "@/features/customermanagement/components/profile/mockdata/ReceiverDetailsModal";
import { siteMembersMockData } from "@/features/customermanagement/components/profile/mockdata/SiteMembersModal";
import { assignedMachinesMockData } from "@/features/vendormanagement/components/profile/mockdata/AssignedMachines";
import {
  ActionPanelType,
} from "@/shared/components/FloatingPanel/ActionTablePanel";

export type ProjectTableRow = {
  id?: string;
  siteName?: string;
  address?: string;
  teamMembers?: number;
  receiverName?: string;
  status?: string;
  documents?: string;
  [key: string]: any;
};

export type TeamTableRow = {
  name?: string;
  memberName?: string;
  employeeName?: string;
  nameId?: string;
  memberCode?: string;
  employeeId?: string;
  associatedSite?: string | number;
  associatedSites?: string | number;
  siteCount?: string | number;
  dlNo?: string;
  dlNumber?: string;
  licenseNo?: string;
  [key: string]: any;
};

interface UseProfileScreenControllerProps {
  role?: string;
  headerTitle?: string;
}

export function useProfileScreenController({
  role = "Customer Admin",
  headerTitle = "Customer Profile",
}: UseProfileScreenControllerProps) {
  const [teamFilter, setTeamFilter] = useState("Site A");
  const [projectFilter, setProjectFilter] = useState("Site A");

  const [isRemovePaymentModalOpen, setIsRemovePaymentModalOpen] =
    useState(false);
  const [isRemoveTeamMemberModalOpen, setIsRemoveTeamMemberModalOpen] =
    useState(false);
  const [isDisableMachineModalOpen, setIsDisableMachineModalOpen] =
    useState(false);

  const [isEnableDocumentModalOpen, setIsEnableDocumentModalOpen] =
    useState(false);
  const [isDisableDocumentModalOpen, setIsDisableDocumentModalOpen] =
    useState(false);
  const [isRemoveDocumentModalOpen, setIsRemoveDocumentModalOpen] =
    useState(false);

  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isAddPaymentMethodOpen, setIsAddPaymentMethodOpen] = useState(false);

  const [isAddMoneyPanelOpen, setIsAddMoneyPanelOpen] = useState(false);
  const [isTransferMoneyPanelOpen, setIsTransferMoneyPanelOpen] =
    useState(false);
  const [isRequestMoneyPanelOpen, setIsRequestMoneyPanelOpen] =
    useState(false);

  const [moneyAmount, setMoneyAmount] = useState("20,000");
  const [selectedReceiver, setSelectedReceiver] = useState("Adesh mendekar");

  const [isMachineDocumentModalOpen, setIsMachineDocumentModalOpen] =
    useState(false);
  const [selectedDocumentRow, setSelectedDocumentRow] =
    useState<ProjectTableRow | null>(null);

  const [isAssignRemoveSiteModalOpen, setIsAssignRemoveSiteModalOpen] =
    useState(false);
  const [selectedMemberName, setSelectedMemberName] = useState("");
  const [selectedMemberCode, setSelectedMemberCode] = useState("");
  const [selectedMachineRow, setSelectedMachineRow] =
    useState<ProjectTableRow | null>(null);

  const [isActionPanelOpen, setIsActionPanelOpen] = useState(false);
  const [actionPanelType, setActionPanelType] =
    useState<ActionPanelType | null>(null);

  const [selectedProjectRow, setSelectedProjectRow] =
    useState<ProjectTableRow | null>(null);
  const [selectedSiteTitle, setSelectedSiteTitle] =
    useState("Site A (20 members)");
  const [projectDetailsData, setProjectDetailsData] = useState<any>(null);

  const handleOpenWalletModal = () => {
    setIsWalletModalOpen(true);
  };

  const handleCloseWalletModal = () => {
    setIsWalletModalOpen(false);
  };

  const handleAddMoney = () => {
    setIsWalletModalOpen(false);
    setIsAddMoneyPanelOpen(true);
  };

  const handleTransfer = () => {
    setIsWalletModalOpen(false);
    setIsTransferMoneyPanelOpen(true);
  };

  const handleRequest = () => {
    setIsWalletModalOpen(false);
    setIsRequestMoneyPanelOpen(true);
  };

  const handleCloseAddMoneyPanel = () => {
    setIsAddMoneyPanelOpen(false);
  };

  const handleCloseTransferMoneyPanel = () => {
    setIsTransferMoneyPanelOpen(false);
  };

  const handleCloseRequestMoneyPanel = () => {
    setIsRequestMoneyPanelOpen(false);
  };

  const handleSubmitAddMoney = () => {
    setIsAddMoneyPanelOpen(false);
  };

  const handleSubmitTransferMoney = () => {
    setIsTransferMoneyPanelOpen(false);
  };

  const handleSubmitRequestMoney = () => {
    setIsRequestMoneyPanelOpen(false);
  };

  const handleWalletFilterClick = (value?: string) => {
    console.log("Wallet filter clicked", value);
  };

  const handleRemovePayment = () => {
    setIsRemovePaymentModalOpen(true);
  };

  const handleCloseRemovePaymentModal = () => {
    setIsRemovePaymentModalOpen(false);
  };

  const handleConfirmRemovePayment = () => {
    console.log("Payment method removed");
    setIsRemovePaymentModalOpen(false);
  };

  const handleOpenRemoveTeamMemberModal = () => {
    setIsRemoveTeamMemberModalOpen(true);
  };

  const handleCloseRemoveTeamMemberModal = () => {
    setIsRemoveTeamMemberModalOpen(false);
  };

  const handleConfirmRemoveTeamMember = () => {
    console.log("Team member removed");
    setIsRemoveTeamMemberModalOpen(false);
  };

  const handleOpenDisableMachineModal = (row: ProjectTableRow) => {
    setSelectedMachineRow(row);
    setIsDisableMachineModalOpen(true);
  };

  const handleCloseDisableMachineModal = () => {
    setIsDisableMachineModalOpen(false);
    setSelectedMachineRow(null);
  };

  const handleConfirmDisableMachine = () => {
    console.log("Disable machine confirmed", selectedMachineRow);
    setIsDisableMachineModalOpen(false);
    setSelectedMachineRow(null);
  };

  const handleOpenAddPaymentMethod = () => {
    setIsAddPaymentMethodOpen(true);
  };

  const handleCloseAddPaymentMethod = () => {
    setIsAddPaymentMethodOpen(false);
  };

  const handleUpdatePaymentMethod = (data: {
    accountNo: string;
    ifscCode: string;
    bankBranchName: string;
    mobileNo: string;
    upiId: string;
    cancelledCheck: string;
  }) => {
    console.log("Updated payment method:", data);
    setIsAddPaymentMethodOpen(false);
  };

  const handleCloseActionPanel = () => {
    setIsActionPanelOpen(false);
    setActionPanelType(null);
  };

  const handleOpenReceiverDetails = (row: ProjectTableRow) => {
    setSelectedProjectRow(row);
    setActionPanelType("receiverDetails");
    setIsActionPanelOpen(true);
  };

  const handleAssignReceiver = (data: any[]) => {
    console.log("Assign clicked", {
      selectedProjectRow,
      receiverTableData: data,
    });
    handleCloseActionPanel();
  };

  const handleOpenSiteMembers = (_row: ProjectTableRow) => {
    setSelectedSiteTitle("Site A (20 members)");
    setActionPanelType("siteMembers");
    setIsActionPanelOpen(true);
  };

  const handleOpenAssignedMachines = (row: TeamTableRow) => {
    console.log("Assigned machines row:", row);
    setActionPanelType("assignedMachines");
    setIsActionPanelOpen(true);
  };

  const handleOpenMachineDocumentModal = (row: ProjectTableRow) => {
    setSelectedDocumentRow(row);
    setIsMachineDocumentModalOpen(true);
  };

  const handleCloseMachineDocumentModal = () => {
    setIsMachineDocumentModalOpen(false);
    setSelectedDocumentRow(null);
  };

  const handleMachineDocumentTopActionChange = (value: string) => {
    handleCloseMachineDocumentModal();

    if (value === "Enable") {
      setIsEnableDocumentModalOpen(true);
      return;
    }

    if (value === "Disable") {
      setIsDisableDocumentModalOpen(true);
      return;
    }

    if (value === "Remove") {
      setIsRemoveDocumentModalOpen(true);
      return;
    }
  };

  const handleOpenAddProjectModal = () => {
    setActionPanelType("addProjectDetails");
    setIsActionPanelOpen(true);
  };

  const handleNextProjectDetails = (data: any) => {
    setProjectDetailsData(data);
    setActionPanelType("addProjectTeamMembers");
  };

  const handleBackToProjectDetails = () => {
    setActionPanelType("addProjectDetails");
  };

  const handleOpenAssignRemoveSiteModal = (
    memberName: string,
    memberCode: string
  ) => {
    setSelectedMemberName(memberName);
    setSelectedMemberCode(memberCode);
    setIsAssignRemoveSiteModalOpen(true);
  };

  const handleCloseAssignRemoveSiteModal = () => {
    setIsAssignRemoveSiteModalOpen(false);
  };

  const handleSaveAssignedSites = (updatedSites: any[]) => {
    console.log("updatedSites", {
      memberName: selectedMemberName,
      memberCode: selectedMemberCode,
      updatedSites,
    });
    setIsAssignRemoveSiteModalOpen(false);
  };

  const NO_PAYMENT_ROLES = ["Customer Worker"];
  const NO_TABLES_ROLES = ["Customer Individual"];
  const SINGLE_TABLE_ROLES = [
    "Individual Vendor",
    "Individual Operator",
    "L2B Operator",
  ];

  const showPayment = !NO_PAYMENT_ROLES.includes(role);
  const showTables = !NO_TABLES_ROLES.includes(role);
  const isSingleTable = SINGLE_TABLE_ROLES.includes(role);

  const walletContextText = `${role ?? ""} ${headerTitle ?? ""}`.toLowerCase();

  const walletType = useMemo(() => {
    if (walletContextText.includes("vendor")) {
      return "vendorWallet" as const;
    }

    if (
      walletContextText.includes("operator") ||
      walletContextText.includes("driver")
    ) {
      return "operatorWallet" as const;
    }

    return "customerWallet" as const;
  }, [walletContextText]);

  const walletPanelData = useMemo(() => {
    return walletPanelMockData[walletType];
  }, [walletType]);

  const actionPanelData = useMemo(() => {
    switch (actionPanelType) {
      case "addProjectDetails":
        return addProjectDetailsMockData;

      case "addProjectTeamMembers":
        return {
          ...addProjectTeamMembersMockData,
          projectDetails:
            projectDetailsData || addProjectTeamMembersMockData.projectDetails,
        };

      case "receiverDetails":
        return {
          ...receiverDetailsMockData,
          receiverName: selectedProjectRow?.receiverName,
          status: selectedProjectRow?.status,
        };

      case "siteMembers":
        return {
          ...siteMembersMockData,
          title: selectedSiteTitle,
        };

      case "assignedMachines":
        return assignedMachinesMockData;

      default:
        return null;
    }
  }, [
    actionPanelType,
    projectDetailsData,
    selectedProjectRow,
    selectedSiteTitle,
  ]);

  return {
    teamFilter,
    setTeamFilter,
    projectFilter,
    setProjectFilter,

    isRemovePaymentModalOpen,
    isRemoveTeamMemberModalOpen,
    isDisableMachineModalOpen,
    isEnableDocumentModalOpen,
    isDisableDocumentModalOpen,
    isRemoveDocumentModalOpen,
    isWalletModalOpen,
    isAddPaymentMethodOpen,
    isAddMoneyPanelOpen,
    isTransferMoneyPanelOpen,
    isRequestMoneyPanelOpen,
    isMachineDocumentModalOpen,
    isAssignRemoveSiteModalOpen,
    isActionPanelOpen,

    moneyAmount,
    setMoneyAmount,
    selectedReceiver,
    setSelectedReceiver,
    selectedDocumentRow,
    selectedMemberName,
    selectedMemberCode,
    selectedMachineRow,
    actionPanelType,
    actionPanelData,

    showPayment,
    showTables,
    isSingleTable,
    walletPanelData,

    handleOpenWalletModal,
    handleCloseWalletModal,
    handleAddMoney,
    handleTransfer,
    handleRequest,
    handleCloseAddMoneyPanel,
    handleCloseTransferMoneyPanel,
    handleCloseRequestMoneyPanel,
    handleSubmitAddMoney,
    handleSubmitTransferMoney,
    handleSubmitRequestMoney,
    handleWalletFilterClick,
    handleRemovePayment,
    handleCloseRemovePaymentModal,
    handleConfirmRemovePayment,
    handleOpenRemoveTeamMemberModal,
    handleCloseRemoveTeamMemberModal,
    handleConfirmRemoveTeamMember,
    handleOpenDisableMachineModal,
    handleCloseDisableMachineModal,
    handleConfirmDisableMachine,
    handleOpenAddPaymentMethod,
    handleCloseAddPaymentMethod,
    handleUpdatePaymentMethod,
    handleCloseActionPanel,
    handleOpenReceiverDetails,
    handleAssignReceiver,
    handleOpenSiteMembers,
    handleOpenAssignedMachines,
    handleOpenMachineDocumentModal,
    handleCloseMachineDocumentModal,
    handleMachineDocumentTopActionChange,
    handleOpenAddProjectModal,
    handleNextProjectDetails,
    handleBackToProjectDetails,
    handleOpenAssignRemoveSiteModal,
    handleCloseAssignRemoveSiteModal,
    handleSaveAssignedSites,

    setIsEnableDocumentModalOpen,
    setIsDisableDocumentModalOpen,
    setIsRemoveDocumentModalOpen,
  };
}