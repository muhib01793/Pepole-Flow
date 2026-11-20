import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import employeeReducer from "../features/employees/employeeSlice";
import attendanceReducer from "../features/attendance/attendanceSlice";
import leaveReducer from "../features/leaves/leaveSlice";
import payrollReducer from "../features/payroll/payrollSlice";

export const store = configureStore({
  reducer: { auth: authReducer, employees: employeeReducer, attendance: attendanceReducer, leaves: leaveReducer, payroll: payrollReducer }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
