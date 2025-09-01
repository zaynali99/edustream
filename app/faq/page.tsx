export default function FAQPage() {
  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-3xl font-semibold">FAQ & Support</h1>
      <div className="card p-4 space-y-3">
        <div>
          <div className="font-semibold">Is access immediate after payment?</div>
          <p className="text-sm text-slate-600">Access unlocks after admin approval. You’ll see a Pending status until then.</p>
        </div>
        <div>
          <div className="font-semibold">What is the batch price?</div>
          <p className="text-sm text-slate-600">Every batch costs ₹500—Class 11, Class 12, NEET, and JEE.</p>
        </div>
        <div>
          <div className="font-semibold">Refunds?</div>
          <p className="text-sm text-slate-600">Refunds only before approval or for duplicate payments. Contact support.</p>
        </div>
        <div>
          <div className="font-semibold">Device limits</div>
          <p className="text-sm text-slate-600">Single user account; fair use enforced.</p>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <p className="text-sm"><a className="underline text-accent1" href={process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP}>WhatsApp</a> • {process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</p>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org",
        "@type":"FAQPage",
        "mainEntity":[
          {"@type":"Question","name":"Is access immediate after payment?","acceptedAnswer":{"@type":"Answer","text":"Access unlocks after admin approval. You’ll see a Pending status until then."}},
          {"@type":"Question","name":"What is the batch price?","acceptedAnswer":{"@type":"Answer","text":"Every batch costs ₹500—Class 11, Class 12, NEET, and JEE."}}
        ]
      })}} />
    </div>
  );
}
