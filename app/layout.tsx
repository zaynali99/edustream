import "./globals.css";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NEET & JEE Lectures at ₹500 | EduStream",
  description: "Premium, organized NEET & JEE lectures at ₹500 per batch. Progress tracking, verified access, mobile-first.",
  icons: [{ rel: "icon", url: "/logo.svg" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <AuthProvider>
          <NavBar />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
