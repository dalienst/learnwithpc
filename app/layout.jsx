import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Learn with Mr. PC</title>
      </head>
      <body>
        <div className="fixed top-0 z-50 w-full">
        <Navbar />
        </div>
        <div className="pt-[90px]">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
