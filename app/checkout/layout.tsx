import { Quicksand } from "next/font/google";
import type { Metadata } from "next";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Checkout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
