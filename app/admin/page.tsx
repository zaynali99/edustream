"use client";
import { useAuth } from "@/lib/auth";
import { ApprovalsTable } from "@/components/AdminTable";

export default function AdminPage() {
  const { user } = useAuth();
  if (!user) return <div className="container py-10">Please login.</div>;
  if (user.role !== "admin") return <div className="container py-10">Access denied.</div>;

  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
      <ApprovalsTable />
      <div className="card p-4">
        <h3 className="font-semibold mb-2">Admin Tools</h3>
        <ul className="list-disc pl-5 text-sm text-slate-600">
          <li>Manage users & roles in Firestore users collection</li>
          <li>Create batches/lectures in Firestore (UI CRUD can be added)</li>
          <li>Verify payments and map paymentId to enrollments</li>
        </ul>
      </div>
    </div>
  );
}
