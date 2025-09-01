"use client";
import { useAuth } from "@/lib/auth";
import { useEffect, useState } from "react";
import { listLecturesForApprovedBatches, getUserEnrollments } from "@/lib/firestore";
import { LectureCard } from "@/components/LectureCard";
import Link from "next/link";

export default function LecturesPage() {
  const { user } = useAuth();
  const [lectures, setLectures] = useState<any[]>([]);
  const [approved, setApproved] = useState<boolean>(false);
  const [paidNotApproved, setPaidNotApproved] = useState<boolean>(false);

  useEffect(() => {
    const run = async () => {
      if (!user) return;
      const enrolls = await getUserEnrollments(user.uid);
      const paid = enrolls.some(e => e.paid);
      const isApproved = enrolls.some(e => e.status === "approved");
      setApproved(isApproved);
      setPaidNotApproved(paid && !isApproved);
      if (isApproved) {
        const lecs = await listLecturesForApprovedBatches(user.uid);
        setLectures(lecs);
      }
    };
    run();
  }, [user]);

  if (!user) return (
    <div className="container py-10">
      <h1 className="text-3xl font-semibold">Lectures</h1>
      <p className="text-slate-600">Please login to view lectures.</p>
      <Link className="btn-primary mt-4 inline-flex" href="/login">Login</Link>
    </div>
  );

  if (paidNotApproved) return (
    <div className="container py-10">
      <h1 className="text-3xl font-semibold">Lectures</h1>
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 mt-4 text-amber-800">Your payment is received. Access unlocks after admin approval.</div>
      <p className="text-sm text-slate-600 mt-2">Need help? <a className="underline text-accent1" href={process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP}>WhatsApp support</a></p>
    </div>
  );

  if (!approved) return (
    <div className="container py-10">
      <h1 className="text-3xl font-semibold">Lectures</h1>
      <p className="text-slate-600">You have not purchased any batch yet.</p>
      <Link className="btn-primary mt-4 inline-flex" href="/apply">Buy Batch (₹500)</Link>
    </div>
  );

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-semibold">My Lectures</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {lectures.map(l => (
          <LectureCard key={l.id} id={l.id} title={l.title} duration={l.duration ? `${l.duration}m` : ""} tags={[l.subject]} progressPct={0} />
        ))}
        {!lectures.length && <div className="text-slate-600">No lectures yet—check back soon.</div>}
      </div>
    </div>
  );
}
