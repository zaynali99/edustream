"use client";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";
import { auth, db, googleProvider } from "./firebase";
import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import type { Role, UserDoc } from "./types";

type Ctx = {
  user: (import("firebase/auth").User & { role?: Role }) | null;
  loading: boolean;
  loginEmail: (email: string, pass: string) => Promise<void>;
  registerEmail: (name: string, email: string, pass: string) => Promise<void>;
  loginGoogle: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthCtx = createContext<Ctx>({} as any);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Ctx["user"]>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, async (u) => {
      if (!u) { setUser(null); setLoading(false); return; }
      const ref = doc(db, "users", u.uid);
      const snap = await getDoc(ref);
      if (!snap.exists()) {
        const udoc: UserDoc = {
          name: u.displayName || "",
          email: u.email || "",
          role: "student",
          createdAt: Date.now(),
          approvedBatches: []
        };
        await setDoc(ref, udoc, { merge: true });
        setUser(Object.assign(u, { role: "student" }));
      } else {
        const data = snap.data() as UserDoc;
        setUser(Object.assign(u, { role: data.role }));
      }
      setLoading(false);
    });
  }, []);

  const loginEmail = async (email: string, pass: string) => {
    await signInWithEmailAndPassword(auth, email, pass);
  };
  const registerEmail = async (name: string, email: string, pass: string) => {
    const res = await createUserWithEmailAndPassword(auth, email, pass);
    await setDoc(doc(db, "users", res.user.uid), {
      name, email, role: "student", createdAt: Date.now(), approvedBatches: []
    }, { merge: true });
  };
  const loginGoogle = async () => { await signInWithPopup(auth, googleProvider); };
  const logout = async () => { await signOut(auth); };

  return <AuthCtx.Provider value={{ user, loading, loginEmail, registerEmail, loginGoogle, logout }}>{children}</AuthCtx.Provider>
};

export const useAuth = () => useContext(AuthCtx);
