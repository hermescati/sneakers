import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "../styles/globals.css";

const inter = Quicksand({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
