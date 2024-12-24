"use client";

import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/providers/NextAuthProvider";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Learn with Mr. PC</title>
      </head>
      <body>
        <Toaster position="top-center" />
        <NextAuthProvider>
          <TanstackQueryProvider>
            <div className="fixed top-0 z-50 w-full">
              <Navbar />
            </div>
            <div className="pt-[90px]">{children}</div>
            <Footer />
          </TanstackQueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
