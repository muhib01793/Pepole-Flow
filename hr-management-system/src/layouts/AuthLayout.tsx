import { Outlet } from "react-router-dom";
export default function AuthLayout(){return <div className="auth-shell"><div className="auth-brand">✦ PeopleFlow</div><div className="auth-content"><Outlet/></div><p className="auth-footer">© 2026 PeopleFlow HR. Built for better workplaces.</p></div>;}
