import Image from "next/image";
import { useState } from "react";

interface CategoryItemProps {
  name: string;
  src: any;
  alt: string;
  width?: number;
  height?: number;
  isActive: boolean;
  onSelect: () => void;
}

export default function CategoryItem({
  name,
  src,
  alt,
  width,
  height,
  isActive,
  onSelect,
}: CategoryItemProps) {
  const handleOnChange = () => {
    onSelect();
  };

  const opacity = isActive ? 100 : 60;
  const hidden = isActive ? 100 : 0;

  return (
    <label className="flex flex-col gap-2 cursor-pointer">
      <input
        type="radio"
        onChange={handleOnChange}
        className="hidden"
        checked={isActive}
      />
      <div
        className={`flex flex-col gap-2 px-1 items-center justify-center opacity-${opacity} hover:opacity-100`}
      >
        <Image src={src} width={width} height={height} alt={alt} />
        <span className="text-gray-900 text-span font-bold">{name}</span>
      </div>
      <span
        className={`w-full h-0.5 bg-gray-900 rounded-sm`}
        style={{ opacity: hidden }}
      />
    </label>
  );
}
