import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LeaveRequest } from "../../types/leave.types";
const seed:LeaveRequest[]=[{id:"LV-101",employee:"Sara Ahmed",type:"Annual Leave",from:"2026-11-23",to:"2026-11-25",days:3,status:"Pending"},{id:"LV-102",employee:"Ayesha Khan",type:"Sick Leave",from:"2026-11-10",to:"2026-11-10",days:1,status:"Approved"}];
const initial=(()=>{try{return JSON.parse(localStorage.getItem("hr_leaves")||"null")||seed;}catch{return seed;}})() as LeaveRequest[];
const slice=createSlice({name:"leaves",initialState:initial,reducers:{addLeave(state,action:PayloadAction<LeaveRequest>){state.unshift(action.payload);localStorage.setItem("hr_leaves",JSON.stringify(state));},setLeaveStatus(state,action:PayloadAction<{id:string;status:LeaveRequest["status"]}>){const row=state.find(x=>x.id===action.payload.id);if(row)row.status=action.payload.status;localStorage.setItem("hr_leaves",JSON.stringify(state));}}});
export const {addLeave,setLeaveStatus}=slice.actions; export default slice.reducer;
