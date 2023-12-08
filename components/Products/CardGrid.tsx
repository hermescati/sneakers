import { fetchProducts } from "@/app/lib/data";
import Card from "./Card";

export default async function CardGrid() {
  const products = await fetchProducts();

  return (
    <div className="grid">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
