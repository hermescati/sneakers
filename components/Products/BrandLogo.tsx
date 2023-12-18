import { Product } from "@/app/lib/definitions";
import Adidas from "@/public/assets/brands/adidas.svg";
import Jordan from "@/public/assets/brands/jordan.svg";
import NewBalance from "@/public/assets/brands/new-balance.svg";
import Nike from "@/public/assets/brands/nike.svg";
import Yeezy from "@/public/assets/brands/yeezy.svg";
import Puma from "@/public/assets/brands/puma.svg";

interface Props {
  product: Product;
  size: number;
  color: string;
}

export const BrandLogo = ({ product, size, color }: Props) => {
  if (product.brand == "Nike")
    return <Nike className={`text-${color}`} width={size} height={size} />;
  if (product.brand == "Jordan")
    return <Jordan className={`text-${color}`} width={size} height={size} />;
  if (product.brand == "New Balance")
    return (
      <NewBalance className={`text-${color}`} width={size} height={size} />
    );
  if (product.brand == "Puma")
    return <Puma className={`text-${color}`} width={size} height={size} />;
  if (product.brand == "Adidas")
    return <Adidas className={`text-${color}`} width={size} height={size} />;
  if (product.brand == "Yeezy")
    return <Yeezy className={`text-${color}`} width={size} height={size} />;
};
