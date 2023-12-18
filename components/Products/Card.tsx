import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/lib/definitions";
import { BrandLogo } from "./BrandLogo";
import Cart from "@/public/assets/icons/shopping-cart.svg";

interface Props {
  product: Product;
}

export default function Card({ product }: Props) {
  return (
    <div className="p-4">
      <Link
        key={product.sku}
        href={`/shopping/${product.sku}`}
        className="min-w-0"
      >
        <article className="relative flex flex-col gap-1 p-4 w-full h-full rounded-3xl hover:scale-105 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition-all ease-in-out duration-300">
          <Cart className="text-gray-800" width={24} height={24} />
          <div className="w-full">
            <Image
              src={product.image[0]}
              alt={product.nickname}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-full rounded-3xl"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-1 items-center">
              <BrandLogo product={product} size={16} color="gray-600" />
              <p className="text-gray-600 text-p font-semibold leading-none">
                {product.model}
              </p>
            </div>
            <p className="text-gray-800 text-span font-semibold">
              &ldquo;{product.nickname}&rdquo;
            </p>
          </div>
          <p className="text-gray-900 text-h4 font-bold">
            ${Number(product.resell_price).toFixed(2)}
          </p>
        </article>
      </Link>
    </div>
  );
}
