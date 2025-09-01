export type Role = "student" | "instructor" | "admin";

export type UserDoc = {
  name: string;
  email: string;
  phone?: string;
  role: Role;
  class?: "11" | "12" | "NEET" | "JEE";
  createdAt: number;
  approvedBatches?: string[];
};

export type Batch = {
  id: string;
  name: string;
  stream: "11" | "12" | "NEET" | "JEE";
  price: number;
  syllabus: string[];
  visible: boolean;
  createdAt: number;
  createdBy?: string;
  hours?: number;
  instructors?: string[];
};

export type EnrollmentStatus = "pending" | "approved" | "rejected";
export type Enrollment = {
  id: string;
  uid: string;
  batchId: string;
  paid: boolean;
  status: EnrollmentStatus;
  paymentRef?: string;
  createdAt: number;
};

export type Lecture = {
  id: string;
  batchId: string;
  title: string;
  youtubeId: string;
  chapters?: { t: number; label: string }[];
  duration?: number;
  subject: "Physics" | "Chemistry" | "Math" | "Biology";
  resources?: { name: string; url: string }[];
  published: boolean;
  createdAt: number;
};

export type Progress = {
  id?: string;
  uid: string;
  lectureId: string;
  batchId: string;
  watchedPct: number;
  updatedAt: number;
};

export type PaymentStatus = "initiated" | "success" | "failed" | "refunded";
export type Payment = {
  id: string;
  uid: string;
  batchId: string;
  amount: number;
  status: PaymentStatus;
  method?: string;
  createdAt: number;
};

export type Note = {
  id?: string;
  uid: string;
  lectureId: string;
  text: string;
  ts?: number;
  createdAt: number;
};
