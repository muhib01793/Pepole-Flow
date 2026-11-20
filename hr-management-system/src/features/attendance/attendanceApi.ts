import api from "../../services/api";
export const attendanceApi = { list: () => api.get("/attendance"), create: (data: unknown) => api.post("/attendance",data) };
