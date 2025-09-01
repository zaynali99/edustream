          {enrolls.map(e => (
            <div key={e.id} className="card p-4">
              <div className="flex items-center justify-between">
                <div>Batch: {e.batchId}</div>
                <StatusChip status={e.status === "approved" ? "Approved" : e.status === "pending" ? "Pending" : "Rejected"} />
              </div>
              <div className="text-sm text-slate-600">Paid: {e.paid ? "Yes" : "No"}</div>
            </div>
          ))}
          {!enrolls.length && <div className="text-slate-600">No batches yet.</div>}
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="font-semibold">Quick Actions</h3>
        <div className="flex gap-3">
          <a className="btn-primary" href="/lectures">Go to Lectures</a>
          <a className="btn-secondary" href="/apply">Buy another Batch (₹500)</a>
        </div>
      </section>
    </div>
  );
}
