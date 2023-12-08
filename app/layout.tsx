import type { Metadata } from "next";
import "../styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sneakers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body
        className={`w-full md:mx-auto md:w-11/12 lg:w-10/12 ${quicksand.className}`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
