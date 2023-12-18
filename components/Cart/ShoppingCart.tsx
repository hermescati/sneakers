import React from "react";
import Image from "next/image";
import Cart from "@/public/assets/icons/shopping-cart.svg";

export default function ShoppingCart() {
  return (
    <div className="relative flex w-10 h-10 items-center justify-center bg-gray-800 rounded-3xl">
      <Cart width={20} height={20} className="text-gray-50" />
      <div className="absolute left-5 bottom-1 flex items-center justify-center px-1 py-0.5 bg-accent rounded-xl leading-none text-gray-50 font-bold text-[0.7rem]">
        9+
      </div>
    </div>
  );
}
