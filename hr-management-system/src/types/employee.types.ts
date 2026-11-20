export type EmployeeStatus = "Active" | "On leave" | "Inactive";
export interface Employee {
  id: string; name: string; email: string; department: string; role: string;
  status: EmployeeStatus; salary: number; joinedAt: string;
}
