import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import Leaves from "./pages/Leaves";
import Payroll from "./pages/Payroll";
import NotFound from "./pages/NotFound";

export default function App() {
  return <Routes>
    <Route element={<AuthLayout />}><Route path="/login" element={<Login />} /></Route>
    <Route element={<ProtectedRoute />}><Route element={<AdminLayout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/leaves" element={<Leaves />} />
      <Route path="/payroll" element={<Payroll />} />
    </Route></Route>
    <Route path="/404" element={<NotFound />} /><Route path="*" element={<Navigate to="/404" replace />} />
  </Routes>;
}
