import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Caldim | Digitize & Clean Spreadsheets Into Structured Databases",
  description: "Caldim helps businesses convert chaotic Excel files and messy spreadsheets into clean databases, structured systems, and automated workflows.",
  keywords: "data digitization, spreadsheet cleanup, excel automation, database migration, business intelligence dashboards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="antialiased smooth-scroll"
    >
      <body className="flex flex-col bg-brand-charcoal text-[#EDEEF0] selection:bg-brand-orange/20 selection:text-brand-orange">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
