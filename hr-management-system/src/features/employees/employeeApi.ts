// API-ready service example. Set VITE_API_URL and connect these methods to your backend.
import api from "../../services/api";
import type { Employee } from "../../types/employee.types";
export const employeeApi = {
 list: () => api.get<Employee[]>("/employees"),
 create: (data: Omit<Employee,"id">) => api.post<Employee>("/employees",data),
 update: (id:string,data:Partial<Employee>) => api.patch<Employee>(`/employees/${id}`,data),
 remove: (id:string) => api.delete(`/employees/${id}`)
};
