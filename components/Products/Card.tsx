import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/lib/definitions";
import { BrandLogo } from "./BrandLogo";
import cart from "../../public/assets/icons/cart-dark.svg";

interface Props {
  product: Product;
}

export default function Card({ product }: Props) {
  return (
    <div className="p-4">
      <Link key={product.sku} href={"/"} className="min-w-0">
        <article className="relative flex flex-col gap-1 p-4 w-full h-full rounded-3xl hover:scale-105 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition-all ease-in-out duration-300">
          {/* Product Image */}
          <Image
            className="absolute"
            src={cart}
            width={24}
            height={24}
            alt={"add-to-cart"}
          />
          <Image
            className="object-cover rounded-3xl"
            src={product.image[0]}
            width={300}
            height={169}
            alt={product.nickname}
          />
          {/* Product Details */}
          <div className="flex flex-col">
            <div className="flex gap-2">
              <BrandLogo product={product} color="gray" />
              <p className="text-gray-600 text-p font-semibold">
                {product.model}
              </p>
            </div>
            <p className="text-gray-800 text-span font-semibold">
              &quot;{product.nickname}&quot;
            </p>
          </div>
          {/* Product Price */}
          <p className="text-gray-900 text-h4 font-bold">
            ${Number(product.resell_price).toFixed(2)}
          </p>
        </article>
      </Link>
    </div>
  );
}
