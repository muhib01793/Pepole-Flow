import api from "../../services/api";
export const payrollApi = { list: () => api.get("/payroll"), create: (data: unknown) => api.post("/payroll",data) };
