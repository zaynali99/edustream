"use client";
import { useEffect, useState } from "react";
import { listVisibleBatches } from "@/lib/firestore";
import { BatchCard } from "@/components/BatchCard";

export default function BatchesPage() {
  const [batches, setBatches] = useState<any[]>([]);
  const [tab, setTab] = useState<string>("11");

  useEffect(()=>{ listVisibleBatches().then(setBatches) }, []);

  const tabs = ["11","12","NEET","JEE"];
  const filtered = batches.filter(b => b.stream === tab);

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-semibold">All Batches (₹500)</h1>
      <p className="text-slate-600 mt-2">Admin approval required post-payment.</p>

      <div className="mt-6 flex gap-2">
        {tabs.map(t => (
          <button key={t} onClick={()=>setTab(t)} className={`px-4 py-2 rounded-full border ${t===tab ? "border-accent1 text-accent1" : "border-slate-200 text-slate-600"}`}>{t}</button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filtered.length ? filtered.map(b => (
          <BatchCard key={b.id} title={`${b.name}`} hours={b.hours || 120} subjects={b.syllabus?.slice(0,3) || []} stream={b.stream}/>
        )) : <div className="text-slate-600">No batches found.</div>}
      </div>
    </div>
  );
}
