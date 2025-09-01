"use client";

import { useAuth } from "@/lib/auth";

export default function DashboardPage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="container py-10">
        Please{" "}
        <a className="underline" href="/login">
          login
        </a>
        .
      </div>
    );
  }

  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-3xl font-semibold">Student Dashboard</h1>

      <section className="space-y-3">
        <p>Welcome to your dashboard! 🎉</p>
        <p>
          Here you can access your batches, lectures, and notes once your
          account is approved.
        </p>
      </section>
    </div>
  );
}
