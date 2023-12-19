import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const inputStyles = cva(
  "w-full border-2 leading-none font-medium focus:outline-none focus:ring-4 focus:ring-offset-0 focus:ring-accent focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all ease-in-out duration-300",
  {
    variants: {
      intent: {
        text: [
          "border-gray-600",
          "text-gray-600",
          "placeholder:text-gray-600",
          "focus:border-gray-800",
          "focus:text-gray-800",
        ],
        number: [
          "border-gray-400",
          "text-gray-400",
          "focus:border-gray-800",
          "focus:text-gray-800",
        ],
      },
      size: {
        default: [
          "px-4",
          "py-3",
          "rounded-2xl",
          "focus:rounded-2xl",
          "text-sm",
        ],
        small: ["px-4", "py-2", "rounded-xl", "focus:rounded-xl", "text-xs"],
      },
    },
    defaultVariants: {
      intent: "text",
      size: "default",
    },
  },
);
interface InputFieldProps extends VariantProps<typeof inputStyles> {
  placeholder?: string;
  label?: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  min?: number;
  max?: number;
}
export default function InputField({
  intent,
  size,
  placeholder,
  label,
  value,
  disabled,
  required,
  min,
  max,
}: InputFieldProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      {label && (
        <label className="text-h4 text-gray-900 font-semibold">{label}</label>
      )}
      <input
        type={`${intent}`}
        value={value}
        placeholder={placeholder}
        className={`bg-transparent + ${inputStyles({ intent, size })}`}
        min={min}
        max={max}
        disabled={disabled}
        required={required}
      />
    </div>
  );
}
