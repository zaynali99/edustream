export default function TermsPage() {
  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-3xl font-semibold">Terms of Service</h1>
      <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
        <li>All batches cost ₹500.</li>
        <li>Admin approval required to unlock content after payment.</li>
        <li>Single account per student. Fair use and device limits apply.</li>
        <li>Refunds: only before approval or for duplicate payments.</li>
      </ul>
    </div>
  );
}
