"use client";
export const ChaptersList = ({ chapters, onSeek }: { chapters?: { t:number; label:string }[]; onSeek?: (t:number)=>void; }) => (
  <div className="card p-4">
    <h4 className="font-semibold mb-2">Chapters</h4>
    <ul className="space-y-2">
      {chapters?.map((c, i) => (
        <li key={i} className="flex items-center justify-between text-sm">
          <button className="text-accent1 underline" onClick={()=>onSeek?.(c.t)}>{c.label}</button>
          <span className="text-slate-500">{fmtTime(c.t)}</span>
        </li>
      )) || <div className="text-sm text-slate-500">No chapters available.</div>}
    </ul>
  </div>
);
const fmtTime = (t: number) => new Date(t * 1000).toISOString().substring(14, 19);
