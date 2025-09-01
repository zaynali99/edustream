"use client";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { adminApproveEnrollment, adminRejectEnrollment } from "@/lib/firestore";

export const ApprovalsTable = () => {
  const [rows, setRows] = useState<any[]>([]);
  useEffect(()=>{
    const q = query(collection(db, "enrollments"), where("status","==","pending"));
    const unsub = onSnapshot(q, (snap) => setRows(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
    return () => unsub();
  }, []);
  return (
    <div className="card p-4 overflow-x-auto">
      <h3 className="font-semibold mb-3">Pending Approvals</h3>
      <table className="w-full text-sm">
        <thead className="text-left text-slate-500">
          <tr><th>User</th><th>Batch</th><th>PaymentRef</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id} className="border-t">
              <td>{r.uid}</td><td>{r.batchId}</td><td>{r.paymentRef}</td>
              <td className="space-x-2 py-2">
                <button className="btn-primary" onClick={()=>adminApproveEnrollment(r.id, r.uid, r.batchId)}>Approve</button>
                <button className="btn-secondary" onClick={()=>adminRejectEnrollment(r.id, "Not eligible")}>Reject</button>
              </td>
            </tr>
          ))}
          {!rows.length && <tr><td className="py-4 text-slate-500" colSpan={4}>Nothing to review.</td></tr>}
        </tbody>
      </table>
    </div>
  );
};
