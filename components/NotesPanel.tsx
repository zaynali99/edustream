"use client";
import { useState } from "react";
import { addNote } from "@/lib/firestore";

export const NotesPanel = ({ uid, lectureId }: { uid: string; lectureId: string }) => {
  const [text, setText] = useState("");
  const [ts, setTs] = useState<number | undefined>(undefined);
  const add = async () => {
    if (!text.trim()) return;
    await addNote(uid, lectureId, text, ts);
    setText(""); setTs(undefined);
  };
  return (
    <div className="card p-4">
      <h4 className="font-semibold mb-2">Notes</h4>
      <div className="flex gap-2 mb-2">
        <input className="input" placeholder="Add a timestamp (sec)" value={ts ?? ""} onChange={(e)=> setTs(parseInt(e.target.value) || undefined)} />
      </div>
      <textarea className="input h-24 py-2" placeholder="Write a note..." value={text} onChange={(e)=>setText(e.target.value)} />
      <button className="btn-primary mt-3" onClick={add}>Save Note</button>
    </div>
  );
};
