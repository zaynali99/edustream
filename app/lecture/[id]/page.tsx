"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getLecture, setProgress, getUserEnrollments } from "@/lib/firestore";
import { YouTubePlayer } from "@/components/YouTubePlayer";
import { ChaptersList } from "@/components/ChaptersList";
import { NotesPanel } from "@/components/NotesPanel";
import { useAuth } from "@/lib/auth";

export default function LecturePage() {
  const params = useParams<{ id: string }>();
  const { user } = useAuth();
  const router = useRouter();
  const [lecture, setLecture] = useState<any>(null);

  useEffect(() => {
    const run = async () => {
      if (!user) { router.push("/login"); return; }
      const le = await getLecture(params.id);
      if (!le) return;
      const enrs = await getUserEnrollments(user.uid);
      const ok = enrs.some(e => e.status === "approved" && e.batchId === le.batchId);
      if (!ok) { router.push("/lectures"); return; }
      setLecture(le);
    };
    run();
  }, [user, params.id, router]);

  if (!lecture) return <div className="container py-10">Loading...</div>;

  const onMarkComplete = async () => {
    await setProgress(user!.uid, lecture.batchId, lecture.id, 100);
    alert("Marked complete!");
  };

  return (
    <div className="container py-8 grid lg:grid-cols-[2fr_1fr] gap-6">
      <div className="space-y-4">
        <YouTubePlayer videoId={lecture.youtubeId} />
        <div className="card p-4">
          <h1 className="text-2xl font-semibold">{lecture.title}</h1>
          <div className="text-sm text-slate-600">{lecture.subject}</div>
          <button className="btn-primary mt-4" onClick={onMarkComplete}>Mark complete</button>
        </div>
      </div>
      <div className="space-y-4">
        <ChaptersList chapters={lecture.chapters} />
        <NotesPanel uid={user!.uid} lectureId={lecture.id} />
        <div className="card p-4">
          <h4 className="font-semibold mb-2">Resources</h4>
          {lecture.resources?.length ? (
            <ul className="list-disc pl-5 text-sm">
              {lecture.resources.map((r: any, i: number)=> <li key={i}><a className="text-accent1 underline" href={r.url} target="_blank">{r.name}</a></li>)}
            </ul>
          ) : <div className="text-sm text-slate-500">No resources.</div>}
        </div>
      </div>
    </div>
  );
}
