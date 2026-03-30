"use client";

import * as React from "react";
import { Info, X, ChevronDown, ChevronsLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { CustomInput } from "@/shared/excomponent/ui/TextField";
import { Button } from "@/shared/excomponent/ui/UIButton";
import { DynamicTable, ColumnConfig } from "@/shared/components/Table";
import {
  L2BDropdownMenu,
  DropdownItem,
} from "@/shared/excomponent/ui/L2BDropdownMenu";

export type ActionPanelType =
  | "addProjectDetails"
  | "addProjectTeamMembers"
  | "receiverDetails"
  | "siteMembers"
  | "assignVendor"
  | "assignedMachines";

interface ActionPanelProps {
  open: boolean;
  onClose: () => void;
  type: ActionPanelType;
  data: any;
  onNext?: (data: any) => void;
  onBack?: () => void;
  onAssign?: (data: any[]) => void;
  onAddProject?: (payload: any) => void;
  onActionClick?: (row: any) => void;
}

type PanelConfig = {
  title: string;
  width: string;
  maxHeight: string;
  showInfoIcon: boolean;
  showCloseIcon: boolean;
};

const DEFAULT_PANEL_CONFIG: Record<ActionPanelType, Omit<PanelConfig, "title">> = {
  addProjectDetails: {
    width: "w-[635px]",
    maxHeight: "max-h-[342px]",
    showInfoIcon: false,
    showCloseIcon: false,
  },
  addProjectTeamMembers: {
    width: "w-[592px]",
    maxHeight: "max-h-[608px]",
    showInfoIcon: false,
    showCloseIcon: false,
  },
  receiverDetails: {
    width: "w-[598px]",
    maxHeight: "max-h-[412px]",
    showInfoIcon: true,
    showCloseIcon: true,
  },
  assignVendor: {
    width: "w-[598px]",
    maxHeight: "max-h-[412px]",
    showInfoIcon: true,
    showCloseIcon: true,
  },
  siteMembers: {
    width: "w-[564px]",
    maxHeight: "max-h-[383px]",
    showInfoIcon: true,
    showCloseIcon: true,
  },
  assignedMachines: {
    width: "w-[564px]",
    maxHeight: "max-h-[383px]",
    showInfoIcon: true,
    showCloseIcon: true,
  },
};

const DEFAULT_TITLES: Record<ActionPanelType, string> = {
  addProjectDetails: "Add Project details",
  addProjectTeamMembers: "Project details",
  receiverDetails: "Receiver details",
  assignVendor: "Assign vendor",
  siteMembers: "Site A (20 members)",
  assignedMachines: "Assigned Machines",
};

export function ActionPanel({
  open,
  onClose,
  type,
  data,
  onNext,
  onBack,
  onAssign,
  onAddProject,
  onActionClick,
}: ActionPanelProps) {
  const [formData, setFormData] = React.useState<any>({});
  const [teamMembers, setTeamMembers] = React.useState<any[]>([]);
  const [receiverTableData, setReceiverTableData] = React.useState<any[]>([]);
  const [siteLikeTableData, setSiteLikeTableData] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (!open) return;

    if (type === "addProjectDetails") {
      setFormData(data?.initialValues || {});
      return;
    }

    if (type === "addProjectTeamMembers") {
      setTeamMembers(data?.rows || []);
      return;
    }

    if (type === "receiverDetails" || type === "assignVendor") {
      setReceiverTableData(data?.rows || []);
      return;
    }

    if (type === "siteMembers" || type === "assignedMachines") {
      setSiteLikeTableData(data?.rows || []);
    }
  }, [open, type, data]);

  const config: PanelConfig = React.useMemo(
    () => ({
      title: data?.title || DEFAULT_TITLES[type],
      ...DEFAULT_PANEL_CONFIG[type],
    }),
    [type, data]
  );

  const handleInputChange =
    (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev: any) => ({
        ...prev,
        [key]: event.target.value,
      }));
    };

  const handleTeamMemberToggle = (id: string) => {
    setTeamMembers((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, action: item.action === "Added" ? "Select" : "Added" }
          : item
      )
    );
  };

  const handleReceiverToggle = (id: string) => {
    const selectionKey = data?.selectionKey || "status";
    const activeValue = data?.activeValue || "Remove";
    const inactiveValue = data?.inactiveValue || "Select";
    const selectableValues = data?.selectableValues || ["Select", "Add"];
    const maxSelectionCount = data?.maxSelectionCount ?? 2;

    setReceiverTableData((prev) => {
      const selectedCount = prev.filter(
        (item) => item?.[selectionKey] === activeValue
      ).length;

      return prev.map((item) => {
        if (item.id !== id) return item;

        if (item?.[selectionKey] === activeValue) {
          return { ...item, [selectionKey]: inactiveValue };
        }

        if (
          selectableValues.includes(item?.[selectionKey]) &&
          selectedCount < maxSelectionCount
        ) {
          return { ...item, [selectionKey]: activeValue };
        }

        return item;
      });
    });
  };

  const getReceiverLikeActionButton = (value: string, row: any) => {
    const selectionKey = data?.selectionKey || "status";
    const activeValue = data?.activeValue || "Remove";
    const addValue = data?.addValue || "Add";
    const selectableValues = data?.selectableValues || ["Select", "Add"];
    const maxSelectionCount = data?.maxSelectionCount ?? 2;

    const selectedCount = receiverTableData.filter(
      (item) => item?.[selectionKey] === activeValue
    ).length;

    const isActive = value === activeValue;
    const isAdd = value === addValue;
    const isSelectable = selectableValues.includes(value);
    const shouldDisable =
      isSelectable && !isActive && selectedCount >= maxSelectionCount;

    const className = isActive
      ? "border border-[#FFD9D9] text-[#FF6B6B] bg-white"
      : isAdd
      ? "border border-[#D8F3E5] text-[#56C293] bg-white"
      : shouldDisable
      ? "border border-neutral-200 text-neutral-300 bg-white cursor-not-allowed opacity-70"
      : "border border-[#D8F3E5] text-[#56C293] bg-white";

    return (
      <button
        type="button"
        disabled={shouldDisable}
        onClick={() => handleReceiverToggle(row.id)}
        className={`min-w-[88px] rounded-[10px] px-4 py-[6px] text-[13px] font-medium ${className}`}
      >
        {value}
      </button>
    );
  };

  const receiverLikeColumns: ColumnConfig<any>[] = React.useMemo(() => {
    if (data?.columns?.length) {
      return data.columns.map((column: ColumnConfig<any>) => {
        if (column.key !== (data?.actionColumnKey || "status")) return column;

        return {
          ...column,
          align: column.align || "center",
          render: (value: string, row: any) =>
            getReceiverLikeActionButton(value, row),
        };
      });
    }

    return [
      {
        header: "Name",
        key: "name",
        render: (_: string, row: any) => {
          const selectionKey = data?.selectionKey || "status";
          const activeValue = data?.activeValue || "Remove";
          const isHighlighted = row?.[selectionKey] === activeValue;

          return (
            <div className="flex flex-col leading-[18px]">
              <span
                className={`text-[14px] font-medium ${
                  isHighlighted ? "text-[#F5A623]" : "text-neutral-500"
                }`}
              >
                {row.name}
              </span>
              <span
                className={`text-[14px] font-semibold ${
                  isHighlighted ? "text-[#F5A623]" : "text-neutral-400"
                }`}
              >
                {row.employeeId}
              </span>
            </div>
          );
        },
      },
      {
        header: "Mobile no",
        key: "mobileNo",
        align: "center",
        render: (value: string) => (
          <span className="text-[14px] font-medium text-neutral-400">{value}</span>
        ),
      },
      {
        header: "Role",
        key: "role",
        align: "center",
        render: (value: string) => (
          <span className="text-[14px] font-medium text-neutral-400">{value}</span>
        ),
      },
      {
        header: "Status",
        key: "status",
        align: "center",
        render: (value: string, row: any) =>
          getReceiverLikeActionButton(value, row),
      },
    ];
  }, [data, receiverTableData]);

  const siteLikeColumns: ColumnConfig<any>[] = React.useMemo(() => {
    if (data?.columns?.length) return data.columns;

    return [
      {
        header: "Name",
        key: "name",
        render: (_: string, row: any) => (
          <div className="flex flex-col leading-[18px]">
            <span className="text-[14px] font-medium text-neutral-500">
              {row.name}
            </span>
            <span className="text-[14px] font-semibold text-neutral-400">
              {row.employeeId}
            </span>
          </div>
        ),
      },
      {
        header: "Mobile no",
        key: "mobileNo",
        align: "center",
        render: (value: string) => (
          <span className="text-[14px] font-medium text-neutral-400">{value}</span>
        ),
      },
      {
        header: "Role",
        key: "role",
        align: "center",
        render: (value: string) => (
          <span className="text-[14px] font-medium text-neutral-400">{value}</span>
        ),
      },
      {
        header: "Action",
        key: "action",
        align: "center",
        render: (value: string, row: any) => {
          const isRemove = value === "Remove";
          return (
            <button
              type="button"
              onClick={() => onActionClick?.(row)}
              className={`min-w-[88px] rounded-[10px] px-4 py-[6px] text-[13px] font-medium ${
                isRemove
                  ? "border border-[#FFD9D9] text-[#FF6B6B] bg-white"
                  : "border border-[#D8F3E5] text-[#56C293] bg-white"
              }`}
            >
              {value}
            </button>
          );
        },
      },
    ];
  }, [data, onActionClick]);

  const renderAddProjectDetails = () => (
    <div className="flex flex-col gap-4">
      <div className="w-[598px] h-[188px] rounded-[16px] border border-[#E5E5E5] p-4">
        <div className="grid grid-cols-2 gap-x-5 gap-y-5">
          {[
            ["siteLocation", "Site Location"],
            ["plotOrHouseNo", "Plot/House no."],
            ["areaLocalityStreetName", "Area, Locality, or Street Name"],
            ["pinCode", "Pin code"],
          ].map(([key, label]) => (
            <div key={key} className="flex flex-col gap-2">
              <label className="text-[12px] font-medium text-neutral-400">
                {label}
              </label>
              <CustomInput
                sizeVariant="lg"
                fullWidth
                placeholder={data?.placeholders?.[key]}
                value={formData[key] || ""}
                onChange={handleInputChange(key)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          onClick={() => onNext?.(formData)}
          className="min-w-[118px] min-h-[40px] rounded-[8px] !bg-[#FEB637] hover:!bg-[#e3a92f] !text-black"
        >
          Next
        </Button>
      </div>
    </div>
  );

  const renderAddProjectTeamMembers = () => {
    const selectedMembers = teamMembers.filter((item) => item.action === "Added");

    const getRoleItems = (row: any): DropdownItem[] =>
      (data?.roleOptions || []).map((role: string) => ({
        label: role,
        onClick: () => {
          setTeamMembers((prev) =>
            prev.map((item) => (item.id === row.id ? { ...item, role } : item))
          );
        },
      }));

    const columns: ColumnConfig<any>[] = [
      {
        header: "Name",
        key: "name",
        render: (_: string, row: any) => (
          <div className="flex flex-col leading-[18px]">
            <span className="text-[14px] font-medium text-neutral-500">
              {row.name}
            </span>
            <span className="text-[14px] font-semibold text-neutral-400">
              {row.employeeId}
            </span>
          </div>
        ),
      },
      {
        header: "Mobile no",
        key: "mobileNo",
        align: "center",
        render: (value: string) => (
          <span className="text-[14px] font-medium text-[#9E9E9E]">{value}</span>
        ),
      },
      {
        header: "Role",
        key: "role",
        align: "center",
        render: (value: string, row: any) => (
          <div className="flex items-center justify-center">
            <L2BDropdownMenu
              align="center"
              items={getRoleItems(row)}
              className="w-[170px]"
              trigger={
                <button
                  type="button"
                  className="flex h-[30px] min-w-[145px] items-center justify-between gap-2 rounded-[6px] border-none bg-transparent px-2 text-[14px] font-medium text-[#8D8D8D] outline-none"
                >
                  <span className="truncate">{value}</span>
                  <ChevronDown className="h-4 w-4 text-[#56C293]" />
                </button>
              }
            />
          </div>
        ),
      },
      {
        header: "Action",
        key: "action",
        align: "center",
        render: (value: string, row: any) => {
          const isAdded = value === "Added";
          return (
            <button
              type="button"
              onClick={() => handleTeamMemberToggle(row.id)}
              className={`flex h-[28px] min-w-[79px] items-center justify-center rounded-[10px] border text-[13px] font-medium ${
                isAdded
                  ? "border-[#56C293] bg-[#F2FAF6] text-[#56C293]"
                  : "border-[#E5E5E5] bg-white text-[#56C293]"
              }`}
            >
              {value}
            </button>
          );
        },
      },
    ];

    return (
      <div className="flex flex-col gap-[14px]">
        <div className="h-[102px] w-[559px] rounded-[16px] border border-[#E8E8E8] px-[14px] py-[12px]">
          <div className="grid grid-cols-2 gap-[14px]">
            <div className="flex flex-col gap-[8px]">
              <span className="pl-[6px] text-[14px] font-normal leading-[16px] text-[#8D8D8D]">
                Project name
              </span>
              <CustomInput
                fullWidth
                sizeVariant="xl"
                value={data?.projectName || ""}
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <button
                      type="button"
                      onClick={onBack}
                      className="mr-[8px] text-[14px] font-medium text-[#56C293]"
                    >
                      Change
                    </button>
                  ),
                }}
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <span className="pl-[6px] text-[14px] font-normal leading-[16px] text-[#8D8D8D]">
                Select team
              </span>
              <CustomInput
                fullWidth
                sizeVariant="xl"
                value={`${String(selectedMembers.length).padStart(2, "0")} member`}
                InputProps={{ readOnly: true }}
              />
            </div>
          </div>
        </div>

        <div className="flex w-[560px] items-center justify-between">
          <h3 className="text-[18px] font-semibold text-[#2D2D2D]">
            Add team member
          </h3>
          <span className="text-[18px] font-semibold text-[#2D2D2D]">
            {String(teamMembers.length).padStart(2, "0")} member
          </span>
        </div>

        <div className="w-[560px]">
          <DynamicTable
            columns={columns}
            data={teamMembers}
            maxHeight={294}
            minWidth={560}
          />
        </div>

        <div className="flex w-[560px] items-center justify-end gap-[18px] pb-[34px]">
          <button
            type="button"
            onClick={onBack}
            className="flex h-[44px] w-[24px] items-center justify-center text-[#3A3A3A]"
          >
            <ChevronsLeft className="h-6 w-6" />
          </button>

          <Button
            onClick={() =>
              onAddProject?.({
                projectDetails: data?.projectDetails || null,
                selectedMembers: teamMembers.filter((item) => item.action === "Added"),
              })
            }
            className="h-[40px] w-[200px] rounded-[10px] !bg-[#F6B332] !text-black hover:!bg-[#e0a227]"
          >
            Add project
          </Button>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (type) {
      case "addProjectDetails":
        return renderAddProjectDetails();
      case "addProjectTeamMembers":
        return renderAddProjectTeamMembers();
      case "receiverDetails":
      case "assignVendor":
        return (
          <div className="flex flex-col gap-4">
            <DynamicTable
              columns={receiverLikeColumns}
              data={receiverTableData}
              maxHeight={data?.tableMaxHeight ?? 249}
              minWidth={data?.tableMinWidth ?? 544}
            />
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={onClose}
                className="min-w-[200px] min-h-[40px] rounded-[8px]"
              >
                {data?.cancelText || "Cancel"}
              </Button>
              <Button
                onClick={() => onAssign?.(receiverTableData)}
                className="min-w-[200px] min-h-[40px] rounded-[8px] !bg-[#FEB637] hover:!bg-[#e3a92f] !text-black"
              >
                {data?.confirmText || "Assign"}
              </Button>
            </div>
          </div>
        );
      case "siteMembers":
      case "assignedMachines":
        return (
          <DynamicTable
            columns={siteLikeColumns}
            data={siteLikeTableData}
            maxHeight={data?.tableMaxHeight ?? 294}
            minWidth={data?.tableMinWidth ?? 532}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 bg-black/30 transition-opacity duration-300",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      <div
        className={cn(
          "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-[16px] bg-white shadow-xl transition-all duration-300",
          "flex flex-col overflow-hidden",
          config.width,
          config.maxHeight,
          open ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        )}
      >
        <div className="flex items-center justify-between px-5 pt-5 pb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-[20px] font-semibold text-[#2D2D2D]">
              {config.title}
            </h2>
            {config.showInfoIcon ? (
              <Info className="h-4 w-4 text-[#8D8D8D]" />
            ) : null}
          </div>

          {config.showCloseIcon ? (
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-md text-[#8D8D8D] hover:bg-neutral-100"
            >
              <X className="h-5 w-5" />
            </button>
          ) : null}
        </div>

        <div className="flex-1 overflow-hidden px-5 pb-5">{renderContent()}</div>
      </div>
    </>
  );
}