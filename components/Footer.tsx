export const Footer = () => (
  <footer className="border-t border-slate-100 bg-white mt-16">
    <div className="container py-10 grid gap-6 md:grid-cols-4">
      <div>
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-8"/>
          <span className="font-semibold">EduStream</span>
        </div>
        <p className="text-sm text-slate-600 mt-3">Organized NEET & JEE lectures at ₹500 per batch. Admin-approved access.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Quick Links</h4>
        <ul className="space-y-2 text-sm text-slate-600">
          <li><a href="/batches">Batches</a></li>
          <li><a href="/lectures">Lectures</a></li>
          <li><a href="/apply">Apply/Buy</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="/terms">Terms</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Subjects</h4>
        <p className="text-sm text-slate-600">Physics • Chemistry • Math • Biology</p>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Support</h4>
        <p className="text-sm">Email: {process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</p>
        <a className="text-sm text-accent1 underline" href={process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP}>WhatsApp us</a>
        <div className="mt-4 text-xs text-slate-500">© {new Date().getFullYear()} EduStream. All rights reserved.</div>
      </div>
    </div>
  </footer>
);
