"use client";
import { useAuth } from "@/lib/auth";
import { useEffect, useState } from "react";
import { getUserEnrollments } from "@/lib/firestore";
import { StatusChip } from "@/components/StatusChip";

export default function DashboardPage() {
  const { user } = useAuth();
  const [enrolls, setEnrolls] = useState<any[]>([]);
  useEffect(()=>{ if(user) getUserEnrollments(user.uid).then(setEnrolls); }, [user]);

  if (!user) return <div className="container py-10">Please <a className="underline" href="/login">login</a>.</div>;

  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-3xl font-semibold">Student Dashboard</h1>

      <section className="space-y-3">
        <h3 className="font-semibold">My Batches</h3>
        <div className="grid md:grid-cols-2 gap-4">