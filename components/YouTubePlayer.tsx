"use client";
import { useEffect, useRef } from "react";

export const YouTubePlayer = ({ videoId }: { videoId: string }) => {
  const ref = useRef<HTMLIFrameElement | null>(null);
  useEffect(()=>{},[]);
  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden border border-slate-200">
      <iframe
        ref={ref}
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title="Lecture"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />
    </div>
  );
};
