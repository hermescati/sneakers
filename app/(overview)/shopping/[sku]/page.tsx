import { fetchProductBySku } from "@/app/lib/data";
import Card from "@/components/Products/Card";

export default async function Page({ params }: { params: { sku: string } }) {
  const sku = params.sku;

  const product = await fetchProductBySku(sku);

  return <>{product.sku}</>;
}
