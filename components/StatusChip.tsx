import { clsx } from "clsx";
export const StatusChip = ({ status }: { status: "Paid" | "Pending" | "Approved" | "Rejected" }) => {
  const styles: Record<string,string> = {
    Paid: "bg-blue-50 text-blue-700 border-blue-200",
    Pending: "bg-amber-50 text-amber-700 border-amber-200",
    Approved: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Rejected: "bg-rose-50 text-rose-700 border-rose-200"
  };
  return <span className={clsx("chip", styles[status])}>{status}</span>;
};
