export const assignedMachinesMockData = {
  title: "Assigned Machines",
  tableMaxHeight: 249,
  tableMinWidth: 520,
  actionKey: "manage",
  actionColumnKey: "manage",
  removeValue: "Remove",
  inactiveValue: "Select",
  actionMode: "toggle", // or "callback" if you want outside handling
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