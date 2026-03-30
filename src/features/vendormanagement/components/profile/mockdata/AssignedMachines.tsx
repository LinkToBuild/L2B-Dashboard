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
          <button
            type="button"
            className={`min-w-[88px] rounded-[10px] px-4 py-[6px] text-[13px] font-medium ${
              isRemove
                ? "border border-[#FFD9D9] bg-white text-[#FF6B6B]"
                : "border border-[#D8F3E5] bg-white text-[#56C293]"
            }`}
          >
            {value}
          </button>
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