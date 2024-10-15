import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Learn with Mr. PC</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
