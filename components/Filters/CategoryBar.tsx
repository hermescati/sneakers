"use client";

import { useState } from "react";
import Checkbox from "@/components/svgs/icons/checkmark.svg";
import Calendar from "@/components/svgs/icons/calendar.svg";
import Discount from "@/components/svgs/icons/discount.svg";
import Adidas from "@/components/svgs/brands/adidas.svg";
import Jordan from "@/components/svgs/brands/jordan.svg";
import NewBalance from "@/components/svgs/brands/new-balance.svg";
import Nike from "@/components/svgs/brands/nike.svg";
import Yeezy from "@/components/svgs/brands/yeezy.svg";
import CategoryItem from "./CategoryItem";

export default function CategoryBar() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const iconSize = 24;

  const categorycategorys = [
    {
      id: 0,
      name: "All Sneakers",
      icon: <Checkbox width={iconSize} height={24} />,
    },
    {
      id: 1,
      name: "New Releases",
      icon: <Calendar width={iconSize} height={24} />,
    },
    {
      id: 2,
      name: "Below Retail",
      icon: <Discount width={iconSize} height={24} />,
    },
    {
      id: 3,
      name: "Nike",
      icon: <Nike width={iconSize} height={24} />,
    },
    {
      id: 4,
      name: "Jordan",
      icon: <Jordan width={iconSize} height={24} />,
    },
    {
      id: 5,
      name: "Yeezy",
      icon: <Yeezy width={iconSize} height={24} />,
    },
    {
      id: 6,
      name: "Adidas",
      icon: <Adidas width={iconSize} height={24} />,
    },
    {
      id: 7,
      name: "New Balance",
      icon: <NewBalance width={iconSize} height={24} />,
    },
  ];

  const handlecategoryClick = (category: number) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex gap-8 w-full">
      {categorycategorys.map((category) => (
        <CategoryItem
          key={category.id}
          name={category.name}
          isActive={selectedCategory === category.id}
          onSelect={() => handlecategoryClick(category.id)}
        >
          {category.icon}
        </CategoryItem>
      ))}
    </div>
  );
}
