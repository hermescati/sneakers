import React from "react";
import Image from "next/image";
import cart from "@/public/assets/icons/cart-light.svg";

export default function ShoppingCart() {
  return (
    <div className="relative flex w-10 h-10 items-center justify-center bg-gray-800 rounded-3xl">
      <Image src={cart} width={20} height={20} alt="shopping-cart" />
      <div className="absolute left-5 bottom-1 flex items-center justify-center px-1 py-0.5 bg-accent rounded-xl leading-none text-gray-50 font-bold text-[0.7rem]">
        9+
      </div>
    </div>
  );
}
