import { fetchProductBySku } from "@/app/lib/data";

export default async function Page({ params }: { params: { sku: string } }) {
  const sku = params.sku;

  const product = await fetchProductBySku(sku);

  return <>{product.sku}</>;
}
