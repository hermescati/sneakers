import {
  SiNike,
  SiJordan,
  SiNewbalance,
  SiPuma,
  SiAdidas,
} from "react-icons/si";
import { Product } from "@/app/lib/definitions";

interface Props {
  product: Product;
  size?: number;
  color?: string;
}

export const BrandLogo = ({ product, size, color }: Props) => {
  const style = { color: color, fontSize: size };

  if (product.brand == "Nike") return <SiNike style={style} />;
  if (product.brand == "Jordan") return <SiJordan style={style} />;
  if (product.brand == "New Balance") return <SiNewbalance style={style} />;
  if (product.brand == "Puma") return <SiPuma style={style} />;
  if (product.brand == "Adidas" || product.brand == "Yeezy")
    return <SiAdidas style={style} />;
};
