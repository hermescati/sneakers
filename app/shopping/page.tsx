import type { Metadata } from "next";
import CardGrid from "@/components/Products/CardGrid";
import CategoryBar from "@/components/Filters/CategoryBar";

export const metadata: Metadata = {
  title: "Buy Sneakers",
};

export default function Sneakers() {
  return (
    <div className="flex flex-col gap-4">
      <CategoryBar />
      <div className="flex gap-12">
        <div className="w-[16rem] hidden lg:block">Filter panel</div>
        <div className="w-full">
          <CardGrid />
        </div>
      </div>
    </div>
  );
}
