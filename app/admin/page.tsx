"use client";

import { useAuth } from "@/lib/auth";

export default function DashboardPage() {
  const { user } = useAuth();

  // ✅ Fixed JSX syntax
  if (!user) {
    return (
      <div className="container py-10">
        Please <a className="underline" href="/login">login</a>.
      </div>
    );
  }

  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-3xl font-semibold">Student Dashboard</h1>

      <section className="space-y-3">
        {/* Example sections */}
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-medium">Your Batches</h2>
          <p className="text-gray-600">View and manage your enrolled batches here.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-medium">Recent Lectures</h2>
          <p className="text-gray-600">Catch up on your latest lecture videos.</p>
        </div>
      </section>
    </div>
  );
}
