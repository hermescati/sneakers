import Card from "./Card";
import { Product } from "@/app/lib/definitions";

interface Props {
  products: Product[];
}

export default function CardGrid({ products }: Props) {
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
