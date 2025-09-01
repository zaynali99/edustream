import Link from "next/link";
import { Lock, PlayCircle } from "lucide-react";

export const LectureCard = ({ id, title, duration, tags, progressPct=0, locked=false }: { id: string; title: string; duration?: string; tags?: string[]; progressPct?: number; locked?: boolean; }) => (
  <div className="card p-4 flex flex-col gap-3">
    <div className="flex items-center justify-between">
      <h4 className="font-semibold">{title}</h4>
      <span className="text-xs text-slate-500">{duration}</span>
    </div>
    <div className="flex gap-2 flex-wrap">{tags?.map((t)=> <span key={t} className="chip text-slate-700 border-slate-200">{t}</span>)}</div>
    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
      <div className="h-2 bg-accent1" style={{ width: `${progressPct}%` }} />
    </div>
    {locked ? (
      <div className="text-slate-600 text-sm flex items-center gap-2"><Lock className="w-4 h-4"/> Approval required</div>
    ) : (
      <Link href={`/lecture/${id}`} className="btn-primary"><PlayCircle className="w-4 h-4 mr-2"/>Continue</Link>
    )}
  </div>
);
