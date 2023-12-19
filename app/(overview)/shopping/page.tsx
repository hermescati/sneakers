import CardGrid from "@/components/Products/CardGrid";
import CategoryBar from "@/components/Filters/CategoryBar";
import { fetchProducts } from "@/app/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Sneakers",
};

export default async function Sneakers() {
  const products = await fetchProducts();

  return (
    <div className="flex flex-col gap-4">
      <CategoryBar />
      <div className="flex gap-12">
        <div className="w-[16rem] hidden lg:block">Filter panel</div>
        <div className="w-full">
          <CardGrid products={products} />
        </div>
      </div>
    </div>
  );
}
