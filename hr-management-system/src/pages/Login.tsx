import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { login } from "../features/auth/authSlice";
import { loginRequest } from "../features/auth/authApi";
import LoginForm from "../components/forms/LoginForm";
export default function Login(){const dispatch=useAppDispatch();const navigate=useNavigate();async function handle(email:string,password:string){const user=await loginRequest(email,password);dispatch(login(user));navigate("/",{replace:true});}
return <div className="login-card"><div className="login-icon">✦</div><p className="eyebrow">WELCOME BACK</p><h1>Sign in to your workspace</h1><p className="muted">Manage your people, operations and growth in one place.</p><LoginForm onSubmit={handle}/></div>;}
