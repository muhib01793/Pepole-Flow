export interface PayrollRecord { id: string; employee: string; month: string; baseSalary: number; bonus: number; deductions: number; status: "Paid" | "Pending" }
