import Link from "next/link";
import { BatchCard } from "@/components/BatchCard";

export default function Home() {
  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0 bg-hero-grad opacity-90"></div>
        <div className="container relative py-20 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold">Crack NEET/JEE with organized lectures at just ₹500 per batch.</h1>
            <p className="mt-4 text-lg opacity-90">Clear syllabus, expert teachers, and progress tracking—pay once, get approved, start learning.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="btn-primary bg-white text-ink" href="/apply">Apply for Access</Link>
              <Link className="btn-secondary bg-transparent border-white text-white" href="/apply">Buy Batch (₹500)</Link>
              <Link className="btn-secondary bg-transparent border-white text-white" href="/login">Login</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid md:grid-cols-5 gap-4">
          {["Organized syllabus","Expert teachers","Progress tracking","Admin‑verified access","Affordable ₹500 price"].map(v => (
            <div key={v} className="card p-4">{v}</div>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-semibold mb-6">Batches</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BatchCard title="Class 11" hours={120} subjects={["Physics","Chemistry","Math"]} stream="11" />
          <BatchCard title="Class 12" hours={120} subjects={["Physics","Chemistry","Math"]} stream="12" />
          <BatchCard title="NEET" hours={180} subjects={["Physics","Chemistry","Biology"]} stream="NEET" />
          <BatchCard title="JEE" hours={180} subjects={["Physics","Chemistry","Math"]} stream="JEE" />
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-semibold mb-4">How it works</h2>
        <ol className="grid md:grid-cols-4 gap-4">
          {["Apply","Pay ₹500","Wait for Admin Approval","Start Learning"].map((s, i)=>(
            <li key={i} className="card p-4">{i+1}. {s}</li>
          ))}
        </ol>
        <p className="text-sm text-slate-600 mt-2">Your payment is received. Access unlocks after admin approval.</p>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-semibold mb-4">Subjects</h2>
        <div className="flex flex-wrap gap-3">
          {["Physics","Chemistry","Math","Biology"].map(s => <span key={s} className="chip border-slate-200">{s}</span>)}
        </div>
      </section>
    </div>
  );
}
