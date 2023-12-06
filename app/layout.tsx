import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "../styles/globals.css";

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
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
