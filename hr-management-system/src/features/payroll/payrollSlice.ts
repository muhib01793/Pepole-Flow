import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { PayrollRecord } from "../../types/payroll.types";
const seed:PayrollRecord[]=[{id:"PAY-001",employee:"Ayesha Khan",month:"November 2026",baseSalary:95000,bonus:5000,deductions:2000,status:"Paid"},{id:"PAY-002",employee:"Hamza Ali",month:"November 2026",baseSalary:78000,bonus:0,deductions:1500,status:"Pending"},{id:"PAY-003",employee:"Sara Ahmed",month:"November 2026",baseSalary:85000,bonus:2500,deductions:0,status:"Paid"}];
const initial=(()=>{try{return JSON.parse(localStorage.getItem("hr_payroll")||"null")||seed;}catch{return seed;}})() as PayrollRecord[];
const slice=createSlice({name:"payroll",initialState:initial,reducers:{setPayrollStatus(state,action:PayloadAction<{id:string;status:PayrollRecord["status"]}>){const row=state.find(x=>x.id===action.payload.id);if(row)row.status=action.payload.status;localStorage.setItem("hr_payroll",JSON.stringify(state));}}});
export const {setPayrollStatus}=slice.actions; export default slice.reducer;
