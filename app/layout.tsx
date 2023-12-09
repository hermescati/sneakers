import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import "tailwindcss/tailwind.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sneakers - The Latest Sneakers & Premium Streetwear",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body className={quicksand.className}>
        <main className="w-full md:mx-auto md:w-11/12 lg:w-10/12">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
