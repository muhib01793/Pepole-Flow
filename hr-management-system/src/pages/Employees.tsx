import { useMemo, useState } from "react";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";
import { useAppDispatch,useAppSelector } from "../app/hooks";
import { addEmployee,deleteEmployee,updateEmployee } from "../features/employees/employeeSlice";
import type { Employee } from "../types/employee.types";
import Button from "../components/common/Button";
import Modal from "../components/common/Modal";
import EmployeeForm from "../components/forms/EmployeeForm";
import DataTable from "../components/tables/DataTable";
import useDebounce from "../hooks/useDebounce";
export default function Employees(){const rows=useAppSelector(s=>s.employees);const dispatch=useAppDispatch();const[q,setQ]=useState("");const debounced=useDebounce(q);const[editing,setEditing]=useState<Employee|undefined>();const[open,setOpen]=useState(false);
const filtered=useMemo(()=>rows.filter(e=>[e.name,e.email,e.department,e.role].join(" ").toLowerCase().includes(debounced.toLowerCase())),[rows,debounced]);
function save(e:Employee){if(editing)dispatch(updateEmployee(e));else dispatch(addEmployee(e));setOpen(false);setEditing(undefined);}
return <><div className="page-heading"><div><p className="eyebrow">PEOPLE</p><h1>Employees</h1><p className="muted">Manage your people and their information.</p></div><Button onClick={()=>{setEditing(undefined);setOpen(true)}}><Plus size={17}/> Add employee</Button></div><section className="panel"><div className="toolbar"><div className="searchbox"><Search size={17}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search employees…"/></div><span className="muted">{filtered.length} employees</span></div><DataTable headers={["Employee","Department","Job title","Monthly salary","Status","Actions"]}>{filtered.map(e=><tr key={e.id}><td><strong>{e.name}</strong><small className="table-sub">{e.email}</small></td><td>{e.department}</td><td>{e.role}</td><td>PKR {e.salary.toLocaleString()}</td><td><span className={`status ${e.status==="Active"?"success":"warning"}`}>{e.status}</span></td><td><div className="row-actions"><button className="icon-btn" title="Edit" onClick={()=>{setEditing(e);setOpen(true)}}><Pencil size={16}/></button><button className="icon-btn danger-icon" title="Delete" onClick={()=>{if(confirm(`Delete ${e.name}?`))dispatch(deleteEmployee(e.id))}}><Trash2 size={16}/></button></div></td></tr>)}</DataTable>{filtered.length===0&&<p className="empty">No employees match your search.</p>}</section>{open&&<Modal title={editing?"Edit employee":"Add employee"} onClose={()=>setOpen(false)}><EmployeeForm initial={editing} onSave={save} onCancel={()=>setOpen(false)}/></Modal>}</>;}
