import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";
export default function AdminLayout(){return <div className="app-shell"><Sidebar/><main className="main-area"><Navbar/><div className="page-content"><Outlet/></div></main></div>;}
