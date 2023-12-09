import { fetchProducts } from "@/app/lib/data";
import Card from "./Card";

export default async function CardGrid() {
  const products = await fetchProducts();

  return (
    <div className="flex xs:mx-auto">
      <div className="flex flex-wrap">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full xs:w-1/2 sm:w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5"
          >
            <Card key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
