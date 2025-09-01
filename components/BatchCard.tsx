import Link from "next/link";
import { IndianRupee, BookOpen } from "lucide-react";

export const BatchCard = ({ title, hours, subjects, stream }: { title: string; hours: number; subjects: string[]; stream: string; }) => (
  <div className="card p-6 flex flex-col gap-4">
    <div className="flex items-start justify-between">
      <h3 className="text-xl font-semibold">{title}</h3>
      <span className="chip border-gold text-gold"><IndianRupee className="w-4 h-4"/><b>500</b></span>
    </div>
    <p className="text-sm text-slate-600">{hours}+ hours • {subjects.join(" • ")}</p>
    <div className="flex gap-3 mt-auto">
      <Link className="btn-secondary" href={`/batches?tab=${stream}#syllabus`}>See Syllabus</Link>
      <Link className="btn-primary" href={`/apply?batch=${encodeURIComponent(stream)}`}><BookOpen className="w-4 h-4 mr-2"/>Buy Batch (₹500)</Link>
    </div>
  </div>
);
