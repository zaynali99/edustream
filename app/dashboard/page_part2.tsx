"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

interface Enrollment {
  id: string;
  batchId: string;
}

export default function PagePart2() {
  const [enrolls, setEnrolls] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrolls = async () => {
      try {
        const snapshot = await getDocs(collection(db, "enrollments"));
        const data = snapshot.docs.map(
          (doc) => ({ id: doc.id, ...(doc.data() as { batchId: string }) })
        );
        setEnrolls(data);
      } catch (err) {
        console.error("Error fetching enrollments:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEnrolls();
  }, []);

  if (loading) {
    return <div className="container py-10">Loading enrollments...</div>;
  }

  if (enrolls.length === 0) {
    return <div className="container py-10">No enrollments found.</div>;
  }

  return (
    <div className="space-y-4">
      {enrolls.map((e) => (
        <div key={e.id} className="card p-4">
          <div className="flex items-center justify-between">
            <div>Batch: {e.batchId}</div>
            <button className="btn">View</button>
          </div>
        </div>
      ))}
    </div>
  );
}
