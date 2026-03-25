import { 
  TicketItem, AreaChartData, DonutChartData, 
  InfoCardData, DeptPerformanceData, EscalatedData 
} from "../types";

export const mockTicketData: TicketItem[] = [
  { status: "Resolved", dueFor: "18/09/2026", hasWarning: false, raisedOn: "13/09/2026", typeConcern: "Chat", assignedTo: "CS (#0293048)", isYou: false, reOpened: "-", category: "Rental", ticketId: "VN090990999", customerId: "VN090950999", orderId: "#09809180909", item: "Mobile Crane", topic: "Payment gatewa...", issue: "My home page g...", manageAction: "View", manageVariant: "success" },
  { status: "Escalated", dueFor: "19/09/2026", hasWarning: true, raisedOn: "13/09/2026", typeConcern: "Call", assignedTo: "L2 (#5998948)", isYou: false, reOpened: "-", category: "Rental", ticketId: "VN090990899", customerId: "VN090880998", orderId: "#09809180909", item: "Tipper", topic: "Payment gatewa...", issue: "My home page g...", manageAction: "View", manageVariant: "info" },
  { status: "Escalated", dueFor: "23/09/2026", hasWarning: false, raisedOn: "13/09/2026", typeConcern: "Ticket", assignedTo: "L3 (#0939803)", isYou: false, reOpened: "-", category: "Rental", ticketId: "VN090090999", customerId: "VN090950999", orderId: "#09909180909", item: "Truck", topic: "Payment gatewa...", issue: "My home page g...", manageAction: "View", manageVariant: "info" },
  { status: "Resolved", dueFor: "18/09/2026", hasWarning: false, raisedOn: "13/09/2026", typeConcern: "Call", assignedTo: "L3 (#0939093)", isYou: false, reOpened: "+2", category: "Material", ticketId: "VN090990899", customerId: "VN090880998", orderId: "#09809180909", item: "Clay bricks", topic: "Payment gatewa...", issue: "My home page g...", manageAction: "Recording", manageVariant: "success" },
  { status: "Escalated", dueFor: "19/09/2026", hasWarning: true, raisedOn: "13/09/2026", typeConcern: "Ticket", assignedTo: "", isYou: true, reOpened: "+6", category: "Material", ticketId: "VN090990999", customerId: "VN090920999", orderId: "#09909180909", item: "Cement", topic: "Payment gatewa...", issue: "My home page g...", manageAction: "Solve", manageVariant: "danger" },
];

export const mockPerformanceArea: AreaChartData[] = [
  { day: "1", score: 40 }, { day: "2", score: 65 }, { day: "3", score: 45 }, { day: "4", score: 80 }, { day: "5", score: 55 }, { day: "6", score: 85 }, { day: "7", score: 60 }, { day: "8", score: 110 }, { day: "9", score: 75 }, { day: "10", score: 90 }, { day: "11", score: 65 }, { day: "12", score: 100 }, { day: "13", score: 85 }, { day: "14", score: 105 }, { day: "15", score: 70 }, { day: "16", score: 80 },
];

export const mockDonutData: DonutChartData[] = [
  { status: "resolved", count: 144, fill: "#6FC295" },
  { status: "unassigned", count: 14, fill: "#77A1D3" },
  { status: "assigned", count: 70, fill: "#B9D1E8" },
  { status: "escalated", count: 30, fill: "#D4E6F1" },
];

export const mockInfoCardsData: InfoCardData[] = [
  { title: "Resolved", Stats: "144", percentage: -20.89, information: "Total number of resolved tickets." },
  { title: "Unassigned", Stats: "14", percentage: null, information: "Total number of unassigned tickets." },
  { title: "Assigned", Stats: "70", percentage: null, information: "Total number of assigned tickets." },
  { title: "Escalated", Stats: "30", percentage: -20.89, information: "Total number of escalated tickets." },
];

export const mockDeptPerformance: DeptPerformanceData[] = [
  { person: "CS (#0293048)", performance: -20.89, hasWarning: false, totalResolved: 109 },
  { person: "CS (#0293048)", performance: -80.89, hasWarning: true, totalResolved: 25 },
  { person: "CS (#0293048)", performance: 20.89, hasWarning: false, totalResolved: 55 },
];

export const mockEscalatedTickets: EscalatedData[] = [
  { status: "Escalated", dueFor: "19/09/2026", hasWarning: true, typeConcern: "Chat" },
  { status: "Escalated", dueFor: "19/09/2026", hasWarning: true, typeConcern: "Call" },
  { status: "Escalated", dueFor: "19/09/2026", hasWarning: true, typeConcern: "Ticket" },
  { status: "Escalated", dueFor: "19/09/2026", hasWarning: false, typeConcern: "Call" },
  { status: "Escalated", dueFor: "19/09/2026", hasWarning: false, typeConcern: "Ticket" },
];