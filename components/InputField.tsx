import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const inputStyles = cva(" flex items-center px-4", {
  variants: {
    intent: {
      default: [
        "px-11",
        "py-1",
        "w-full",
        "mr-3",
        "border",
        "border-gray-400",
        "rounded-[50px]",
        "inline-flex",
        "flex-col",
        "justify-center",
        "items-start",
        "gap-8",
      ],
    },
  },
});
interface InputProps extends VariantProps<typeof inputStyles> {
  disabled?: boolean;
  onChange: () => void;
  placeholder?: string;
}
export default function InputField({
  disabled,
  onChange,
  intent,
  placeholder,
}: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={inputStyles({ intent })}
      disabled={disabled}
      onChange={onChange}
    />
  );
}
