import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Employee } from "../../types/employee.types";
const seed: Employee[] = [
 { id:"EMP-1001", name:"Ayesha Khan", email:"ayesha@company.com", department:"Engineering", role:"Frontend Developer", status:"Active", salary:95000, joinedAt:"2024-03-12" },
 { id:"EMP-1002", name:"Hamza Ali", email:"hamza@company.com", department:"Human Resources", role:"HR Executive", status:"Active", salary:78000, joinedAt:"2023-08-04" },
 { id:"EMP-1003", name:"Sara Ahmed", email:"sara@company.com", department:"Finance", role:"Accountant", status:"On leave", salary:85000, joinedAt:"2022-11-20" }
];
const load = (): Employee[] => { try { return JSON.parse(localStorage.getItem("hr_employees") || "null") || seed; } catch { return seed; } };
const slice = createSlice({
 name:"employees", initialState: load(),
 reducers:{
  addEmployee(state, action:PayloadAction<Employee>) { state.unshift(action.payload); localStorage.setItem("hr_employees",JSON.stringify(state)); },
  updateEmployee(state, action:PayloadAction<Employee>) { const i=state.findIndex(x=>x.id===action.payload.id); if(i>=0) state[i]=action.payload; localStorage.setItem("hr_employees",JSON.stringify(state)); },
  deleteEmployee(state, action:PayloadAction<string>) { const next=state.filter(x=>x.id!==action.payload); localStorage.setItem("hr_employees",JSON.stringify(next)); return next; }
 }
});
export const {addEmployee,updateEmployee,deleteEmployee}=slice.actions;
export default slice.reducer;
