# EduStream — ₹500 Premium Lecture Streaming (NEET/JEE, 11th, 12th)

Mobile‑first, fast, and gated by admin approval (post‑payment). Unlisted YouTube embeds, role‑based views, progress/notes, receipts, and dashboards.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Firebase Auth + Firestore + Storage (PDFs)
- YouTube unlisted embeds
- Icons: lucide-react

## Setup
1) Clone and install
   - npm i

2) Create Firebase project
   - Enable: Auth (Email/Password + Google), Firestore, Storage
   - Get web config and fill .env.local

3) Environment (.env.local)
   - Copy from .env.local.example and fill all NEXT_PUBLIC_FIREBASE_* keys

4) Firestore rules
   - Firebase Console → Firestore → Rules → paste firestore.rules

5) Seed sample data (optional)
   - Use seed.sample.json with Firestore import tool or add manually in Console:
     - batches (4 docs), lectures (a few), visible=true, price=500

6) Run
   - npm run dev

7) Make yourself admin (first time)
   - In Firestore users/{uid}, set role="admin" for your account

## Routes
- / (Home) • /batches • /apply • /login
- /lectures (gated) • /lecture/[id] (gated)
- /dashboard (student) • /admin (admin only)
- /about • /faq • /privacy • /terms

## Notes
- All batches are ₹500. Enrollment unlocks only after admin approval.
- Lectures load only for approved enrollments.
- Payments are mocked (placeholder) — integrate Razorpay/Stripe later.
