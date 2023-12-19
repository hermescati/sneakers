import Adidas from "@/components/svgs/brands/adidas.svg";
import Jordan from "@/components/svgs/brands/jordan.svg";
import NewBalance from "@/components/svgs/brands/new-balance.svg";
import Nike from "@/components/svgs/brands/nike.svg";
import Yeezy from "@/components/svgs/brands/yeezy.svg";
import Puma from "@/components/svgs/brands/puma.svg";
import type { Product } from "@/app/lib/definitions";

interface Props {
  product: Product;
  size: number;
  color: string;
}

export const BrandLogo = ({ product, size, color }: Props) => {
  if (product.brand === "Nike")
    return <Nike className={`text-${color}`} width={size} height={size} />;
  if (product.brand === "Jordan")
    return <Jordan className={`text-${color}`} width={size} height={size} />;
  if (product.brand === "New Balance")
    return (
      <NewBalance className={`text-${color}`} width={size} height={size} />
    );
  if (product.brand === "Puma")
    return <Puma className={`text-${color}`} width={size} height={size} />;
  if (product.brand === "Adidas")
    return <Adidas className={`text-${color}`} width={size} height={size} />;
  if (product.brand === "Yeezy")
    return <Yeezy className={`text-${color}`} width={size} height={size} />;
};
