import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AttendanceRecord } from "../../types/attendance.types";
const today = new Date().toISOString().slice(0,10);
const seed: AttendanceRecord[] = [{id:"AT-01",employee:"Ayesha Khan",date:today,checkIn:"09:05",checkOut:"17:30",status:"Present"},{id:"AT-02",employee:"Hamza Ali",date:today,checkIn:"09:35",checkOut:"",status:"Late"}];
const initial = (()=>{try{return JSON.parse(localStorage.getItem("hr_attendance")||"null")||seed;}catch{return seed;}})() as AttendanceRecord[];
const slice=createSlice({name:"attendance",initialState:initial,reducers:{addAttendance(state,action:PayloadAction<AttendanceRecord>){state.unshift(action.payload);localStorage.setItem("hr_attendance",JSON.stringify(state));}}});
export const {addAttendance}=slice.actions; export default slice.reducer;
