import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login",
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
