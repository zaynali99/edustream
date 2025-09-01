import { collection, doc, getDoc, getDocs, query, where, setDoc, addDoc, serverTimestamp, updateDoc, Timestamp } from "firebase/firestore";
import { db } from "./firebase";
import type { Batch, Enrollment, EnrollmentStatus, Payment, Lecture, Progress, Note, UserDoc } from "./types";
import { PRICE_INR } from "./constants";

// Batches
export const listVisibleBatches = async () => {
  const q = query(collection(db, "batches"), where("visible", "==", true));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...(d.data() as any) } as Batch));
};

// Enrollment + payments (mock)
export const createEnrollmentWithPayment = async (uid: string, batchId: string) => {
  // Payment placeholder: success by default
  const payRef = await addDoc(collection(db, "payments"), {
    uid, batchId, amount: PRICE_INR, status: "success", method: "mock", createdAt: Date.now()
  } as Payment);
  const enrRef = await addDoc(collection(db, "enrollments"), {
    uid, batchId, paid: true, status: "pending", paymentRef: payRef.id, createdAt: Date.now()
  } as Omit<Enrollment, "id">);
  return { paymentId: payRef.id, enrollmentId: enrRef.id };
};

export const getUserEnrollments = async (uid: string) => {
  const q = query(collection(db, "enrollments"), where("uid", "==", uid));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...(d.data() as any) } as Enrollment));
};

export const listLecturesForApprovedBatches = async (uid: string) => {
  const enrollSnap = await getDocs(query(collection(db, "enrollments"), where("uid", "==", uid), where("status", "==", "approved")));
  const batchIds = enrollSnap.docs.map(d => d.data().batchId);
  if (!batchIds.length) return [];
  const lecSnap = await getDocs(query(collection(db, "lectures"), where("batchId", "in", batchIds)));
  return lecSnap.docs.map(d => ({ id: d.id, ...(d.data() as any) } as Lecture));
};

export const getLecture = async (id: string) => {
  const snap = await getDoc(doc(db, "lectures", id));
  if (!snap.exists()) return null;
  return { id: snap.id, ...(snap.data() as any) } as Lecture;
};

// Admin actions
export const adminApproveEnrollment = async (enrollId: string, userId: string, batchId: string) => {
  await updateDoc(doc(db, "enrollments", enrollId), { status: "approved" });
  // Add to user's approvedBatches
  const uref = doc(db, "users", userId);
  const usnap = await getDoc(uref);
  const arr = (usnap.data()?.approvedBatches || []) as string[];
  if (!arr.includes(batchId)) {
    await updateDoc(uref, { approvedBatches: [...arr, batchId] });
  }
};
export const adminRejectEnrollment = async (enrollId: string, reason: string) => {
  await updateDoc(doc(db, "enrollments", enrollId), { status: "rejected", reason });
};

// Progress
export const setProgress = async (uid: string, batchId: string, lectureId: string, pct: number) => {
  const id = `${uid}_${lectureId}`;
  await setDoc(doc(db, "progress", id), { uid, batchId, lectureId, watchedPct: pct, updatedAt: Date.now() } as Progress, { merge: true });
};

// Notes
export const addNote = async (uid: string, lectureId: string, text: string, ts?: number) => {
  await addDoc(collection(db, "notes"), { uid, lectureId, text, ts, createdAt: Date.now() } as Note);
};
