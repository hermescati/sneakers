import { Quicksand } from "next/font/google";
import "@/styles/globals.css";
import "tailwindcss/tailwind.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body className={`${quicksand.className} antialised`}>{children}</body>
    </html>
  );
}
