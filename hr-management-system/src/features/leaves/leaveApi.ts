import api from "../../services/api";
export const leaveApi = { list: () => api.get("/leaves"), create: (data: unknown) => api.post("/leaves",data), updateStatus: (id:string,status:string) => api.patch(`/leaves/${id}`,{status}) };
