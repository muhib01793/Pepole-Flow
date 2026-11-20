export interface LeaveRequest { id: string; employee: string; type: string; from: string; to: string; days: number; status: "Pending" | "Approved" | "Rejected" }
