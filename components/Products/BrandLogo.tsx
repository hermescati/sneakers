import Image from "next/image";
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
}

export const BrandLogo = ({ product, size }: Props) => {
  if (product.brand == "Nike")
    return <Image src={Nike} width={size} height={size} alt="nike" />;
  if (product.brand == "Jordan")
    return <Image src={Jordan} width={size} height={size} alt="jordan" />;
  if (product.brand == "New Balance")
    return (
      <Image src={NewBalance} width={size} height={size} alt="new-balance" />
    );
  if (product.brand == "Puma")
    return <Image src={Puma} width={size} height={size} alt="puma" />;
  if (product.brand == "Adidas")
    return <Image src={Adidas} width={size} height={size} alt="adidas" />;
  if (product.brand == "Yeezy")
    return <Image src={Yeezy} width={size} height={size} alt="yeezy" />;
};
