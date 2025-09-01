export const ReceiptCard = ({ amount, status, paymentRef, date }: { amount: number; status: string; paymentRef?: string; date: string; }) => (
  <div className="card p-4 text-sm">
    <div className="flex items-center justify-between">
      <div className="font-semibold">Receipt</div>
      <div className="text-slate-500">{date}</div>
    </div>
    <div className="mt-2">Amount: ₹{amount}</div>
    <div>Status: <b>{status}</b></div>
    <div>Ref: {paymentRef || "-"}</div>
  </div>
);
