export type TicketStatus = "Resolved" | "Unassigned" | "Assigned" | "Escalated";

export interface TicketStat {
  title: string;
  value: number;
  percentage?: number;
  info?: string;
}

export interface DeptPerformance {
  person: string;
  performance: number; // e.g., -20.89
  totalResolved: number;
}

export interface EscalatedTicketSummary {
  status: "Escalated";
  dueFor: string;
  typeConcern: "Chat" | "Call" | "Ticket";
}



export interface TicketItem {
  status: string;
  dueFor: string;
  hasWarning: boolean;
  raisedOn: string;
  typeConcern: string;
  assignedTo: string;
  isYou: boolean;
  reOpened: string;
  category: string;
  ticketId: string;
  customerId: string;
  orderId: string;
  item: string;
  topic: string;
  issue: string;
  manageAction: string;
  manageVariant: string;
}

export interface AreaChartData {
  day: string;
  score: number;
}

export interface DonutChartData {
  status: string;
  count: number;
  fill: string;
}

export interface InfoCardData {
  title: string;
  Stats: string;
  percentage: number | null;
  information: string;
}

export interface DeptPerformanceData {
  person: string;
  performance: number;
  hasWarning: boolean;
  totalResolved: number;
}

export interface EscalatedData {
  status: string;
  dueFor: string;
  hasWarning: boolean;
  typeConcern: string;
}