import { ReactNode } from "react";

interface CategoryItemProps {
  name: string;
  isActive: boolean;
  children: ReactNode;
  onSelect: () => void;
}

export default function CategoryItem({
  name,
  isActive,
  children,
  onSelect,
}: CategoryItemProps) {
  const handleOnChange = () => {
    onSelect();
  };

  return (
    <label className="flex flex-col gap-2 cursor-pointer">
      <input
        type="radio"
        onChange={handleOnChange}
        className="hidden"
        checked={isActive}
      />
      <div
        className={`flex flex-col gap-2 px-1 items-center justify-center font-semibold ${
          isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
        }`}
      >
        {children}
        <span className="text-span">{name}</span>
      </div>
      <span
        className={`w-full h-0.5 bg-gray-900 rounded-sm ${
          isActive ? "" : "hidden"
        }`}
      />
    </label>
  );
}
