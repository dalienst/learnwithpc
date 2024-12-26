"use client";

import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/providers/NextAuthProvider";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const shouldApplyPadding = !pathname.includes('auth') || pathname.includes('tutor');
  return (
    <html lang="en">
      <head>
        <title>Learn with Mr. PC</title>
      </head>
      <body>
        <Toaster position="top-center" />
        <NextAuthProvider>
          <TanstackQueryProvider>
            {!pathname.includes('auth') && !pathname.includes('tutor') && <div className="fixed top-0 z-50 w-full">
              <Navbar />
            </div>}
            <div className={!pathname.includes('tutor') && !pathname.includes('auth') ? 'pt-[90px]' : 'pt-0'}>{children}</div>
           {!pathname.includes('auth') || !pathname.includes('tutor') && <Footer />}
          </TanstackQueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
