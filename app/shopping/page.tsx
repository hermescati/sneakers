import type { Metadata } from "next";
import CardGrid from "@/components/Products/CardGrid";

export const metadata: Metadata = {
  title: "Buy Sneakers",
};

export default function Sneakers() {
  return (
    <div className="flex gap-12">
      <div className="w-[16rem] hidden lg:block">Filter panel</div>
      <div className="w-full">
        <CardGrid />
      </div>
    </div>
  );
}
