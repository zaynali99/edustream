export default function AboutPage() {
  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-3xl font-semibold">About & Instructors</h1>
      <p className="text-slate-600">Mission: Affordable, structured, high‑impact learning at ₹500 per batch. Pedagogy: Concept‑first, practice‑focused, tracked progress.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {name:"Mr. C", subj:"Physics", bio:"Ex-IIT faculty. 8+ years coaching JEE/NEET."},
          {name:"Prof. B", subj:"Chemistry", bio:"Physical & Organic specialist."},
          {name:"Dr. A", subj:"Biology", bio:"NEET Bio expert, MBBS."}
        ].map(p => (
          <div key={p.name} className="card p-4">
            <div className="font-semibold">{p.name}</div>
            <div className="text-sm text-slate-600">{p.subj}</div>
            <p className="text-sm mt-2">{p.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
