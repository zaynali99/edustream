"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { ShieldCheck, LogOut } from "lucide-react";

export const NavBar = () => {
  const path = usePathname();
  const { user, logout } = useAuth();
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-8" />
          <span className="font-semibold">EduStream</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link className={navCls(path==="/batches")} href="/batches">Batches</Link>
          <Link className={navCls(path?.startsWith("/lectures"))} href="/lectures">Lectures</Link>
          <Link className={navCls(path==="/apply")} href="/apply">Apply</Link>
          <Link className={navCls(path==="/about")} href="/about">About</Link>
          <Link className={navCls(path==="/faq")} href="/faq">FAQ</Link>
        </nav>
        <div className="flex items-center gap-3">
          {!user && (
            <Link className="btn-secondary" href="/login">Login</Link>
          )}
          {user && (
            <>
              <Link className="btn-secondary" href="/dashboard">Dashboard</Link>
              {user?.role === "admin" && <Link className="btn-primary" href="/admin"><ShieldCheck className="w-4 h-4 mr-2"/>Admin</Link>}
              <button onClick={logout} className="btn-secondary"><LogOut className="w-4 h-4 mr-2"/>Logout</button>
            </>
          )}
          <Link className="btn-primary" href="/apply">Buy Batch (₹500)</Link>
        </div>
      </div>
    </header>
  );
};
const navCls = (active?: boolean) => `text-sm ${active ? "text-ink font-semibold" : "text-slate-600 hover:text-ink"}`;
