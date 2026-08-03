import { L2BButton } from "@/design-system/components/L2BButton";

export const assignedMachinesMockData = {
  title: "Assigned Machines",
  tableMaxHeight: 249,
  tableMinWidth: 520,
  actionKey: "manage",
  actionColumnKey: "manage",
  removeValue: "Remove",
  inactiveValue: "Select",
  actionMode: "toggle",
  columns: [
    {
      header: "Machine",
      key: "machine",
      render: (value: string) => (
        <span className="text-[14px] font-medium text-neutral-400">{value}</span>
      ),
    },
    {
      header: "Brand",
      key: "brand",
      align: "center",
      render: (value: string) => (
        <span className="text-[14px] font-medium text-neutral-400">{value}</span>
      ),
    },
    {
      header: "Capacity",
      key: "capacity",
      align: "center",
      render: (value: string) => (
        <span className="text-[14px] font-medium text-neutral-400">{value}</span>
      ),
    },
    {
      header: "Assigned",
      key: "assigned",
      align: "center",
      render: (value: string) => (
        <span className="text-[14px] font-medium text-neutral-400">{value}</span>
      ),
    },
    {
      header: "Manage",
      key: "manage",
      align: "center",
      render: (value: string) => {
        const isRemove = value === "Remove";

        return (
          <L2BButton
            type="button"
            variant="outline"
            size="auto"
            className={`min-w-[88px] h-auto rounded-[10px] px-4 py-[6px] text-[13px] font-medium ${
              isRemove
                ? "border-danger-3 bg-white text-danger-1"
                : "border-success-3 bg-white text-success-1"
            }`}
          >
            {value}
          </L2BButton>
        );
      },
    },
  ],
  rows: [
    {
      id: "1",
      machine: "Excavator",
      brand: "Volvo",
      capacity: "10 tones",
      assigned: "Primary",
      manage: "Remove",
    },
    {
      id: "2",
      machine: "Tipper",
      brand: "MAN",
      capacity: "16 tones",
      assigned: "Secondary",
      manage: "Remove",
    },
    {
      id: "3",
      machine: "Tipper",
      brand: "MAN",
      capacity: "16 tones",
      assigned: "Tertiary",
      manage: "Remove",
    },
    {
      id: "4",
      machine: "Tipper",
      brand: "Volvo",
      capacity: "10 tones",
      assigned: "-",
      manage: "Select",
    },
  ],
};