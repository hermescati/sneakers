"use client";

import Checkbox from "@/public/assets/icons/checkmark.svg";
import Calendar from "@/public/assets/icons/calendar.svg";
import Discount from "@/public/assets/icons/discount.svg";
import Adidas from "@/public/assets/brands/adidas.svg";
import Jordan from "@/public/assets/brands/jordan.svg";
import NewBalance from "@/public/assets/brands/new-balance.svg";
import Nike from "@/public/assets/brands/nike.svg";
import Yeezy from "@/public/assets/brands/yeezy.svg";

import CategoryItem from "./CategoryItem";
import { useState } from "react";

export default function CategoryBar() {
  const [activeItem, setActiveItem] = useState(0);

  const filterItems = [
    {
      id: 0,
      icon: Checkbox,
      category: "All Sneakers",
      alt: "all",
    },
    {
      id: 1,
      icon: Calendar,
      category: "New Releases",
      alt: "new",
    },
    {
      id: 2,
      icon: Discount,
      category: "Below Retail",
      alt: "retail",
    },
    {
      id: 3,
      icon: Nike,
      category: "Nike",
      alt: "nike",
    },
    {
      id: 4,
      icon: Jordan,
      category: "Jordan",
      alt: "jordan",
    },
    {
      id: 5,
      icon: Yeezy,
      category: "Yeezy",
      alt: "yeezy",
    },
    {
      id: 6,
      icon: Adidas,
      category: "Adidas",
      alt: "adidas",
    },
    {
      id: 7,
      icon: NewBalance,
      category: "New Balance",
      alt: "new-balance",
    },
  ];

  const handleItemClick = (item: number) => {
    setActiveItem(item);
  };

  return (
    <div className="flex gap-8 w-full">
      {filterItems.map((item) => (
        <CategoryItem
          key={item.id}
          name={item.category}
          src={item.icon}
          alt={item.alt}
          width={24}
          height={24}
          isActive={activeItem == item.id}
          onSelect={() => handleItemClick(item.id)}
        />
      ))}
    </div>
  );
}
