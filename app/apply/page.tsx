"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { createEnrollmentWithPayment } from "@/lib/firestore";
import { PRICE_INR } from "@/lib/constants";
import { ApprovalBanner } from "@/components/ApprovalBanner";

export default function ApplyPage() {
  const { user } = useAuth();
  const params = useSearchParams();
  const [form, setForm] = useState({ name:"", email:"", phone:"", class:"11", city:"", referral:"" });
  const [justPaid, setJustPaid] = useState<{paymentId?:string;enrollmentId?:string}|null>(null);

  useEffect(()=>{
    if (user) setForm(f => ({...f, name: user.displayName || f.name, email: user.email || f.email, class: (params.get("batch")|| "11") }));
  }, [user, params]);

  const onPay = async () => {
    if (!user) { alert("Please login first."); return; }
    const res = await createEnrollmentWithPayment(user.uid, form.class);
    setJustPaid(res);
  };

  return (
    <div className="container py-10 max-w-2xl">
      <h1 className="text-3xl font-semibold">Apply / Buy Access</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="card p-6 space-y-3">
          <label className="label">Name</label><input className="input" value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
          <label className="label">Email</label><input className="input" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
          <label className="label">Phone</label><input className="input" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})}/>
          <label className="label">Class / Batch</label>
          <select className="input" value={form.class} onChange={e=>setForm({...form, class:e.target.value})}>
            <option value="11">Class 11</option>
            <option value="12">Class 12</option>
            <option value="NEET">NEET</option>
            <option value="JEE">JEE</option>
          </select>
          <label className="label">City</label><input className="input" value={form.city} onChange={e=>setForm({...form, city:e.target.value})}/>
          <label className="label">Referral Code (optional)</label><input className="input" value={form.referral} onChange={e=>setForm({...form, referral:e.target.value})}/>
          <p className="text-xs text-slate-500">By continuing, you agree to our <a className="underline" href="/terms">Terms</a> and <a className="underline" href="/privacy">Privacy Policy</a>.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Payment</h3>
          <p className="mt-2 text-slate-600">Amount: ₹{PRICE_INR}</p>
          <div className="mt-4">
            <button className="btn-primary w-full" onClick={onPay}>Pay ₹{PRICE_INR} (mock)</button>
          </div>
          {justPaid && (
            <div className="mt-4 space-y-2">
              <ApprovalBanner />
              <div className="text-sm text-slate-600">Payment Ref: {justPaid.paymentId}</div>
              <div className="text-sm text-slate-600">Enrollment: Pending</div>
              <div className="text-xs text-slate-500">Approvals typically within 24 hours.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
