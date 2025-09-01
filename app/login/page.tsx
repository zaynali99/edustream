"use client";
import { useState } from "react";
import { useAuth } from "@/lib/auth";

export default function LoginPage() {
  const { loginEmail, registerEmail, loginGoogle } = useAuth();
  const [email, setEmail] = useState(""); const [pass, setPass] = useState(""); const [name, setName] = useState("");

  return (
    <div className="container py-12 max-w-md">
      <h1 className="text-3xl font-semibold">Login / Register</h1>
      <div className="card p-6 mt-6 space-y-3">
        <label className="label">Name (for register)</label>
        <input className="input" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your full name"/>
        <label className="label">Email</label>
        <input className="input" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com" />
        <label className="label">Password</label>
        <input className="input" type="password" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="••••••••" />
        <div className="flex gap-2">
          <button className="btn-primary" onClick={()=>loginEmail(email, pass)}>Login</button>
          <button className="btn-secondary" onClick={()=>registerEmail(name, email, pass)}>Register</button>
        </div>
        <div className="text-center text-sm text-slate-500">or</div>
        <button className="btn-secondary" onClick={loginGoogle}>Continue with Google</button>
      </div>
    </div>
  );
}
