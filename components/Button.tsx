import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const buttonStyles = cva(
  "flex items-center gap-2 w-full font-bold disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      intent: {
        primary: [
          "bg-gray-900",
          "text-white",
          "enabled:hover:bg-gray-800",
          "enabled:active:outline-none",
          "enabled:active:ring",
          "enabled:active:ring-offset-2",
          "enabled:active:bg-gray-900",
          "enabled:active:ring-gray-900",
          "shadow-[0_6px_12px_-2px_rgba(33,36,39,0.50)]",
        ],
        secondary: [
          "bg-accent",
          "text-gray-900",
          "enabled:hover:bg-gray-200",
          "enabled:active:outline-none",
          "enabled:active:ring",
          "enabled:active:ring-offset-2",
          "enabled:active:bg-accent",
          "enabled:active:ring-accent",
          "shadow-[0_6px_12px_-2px_rgba(253,132,74,0.25)]",
        ],
      },
      size: {
        default: ["py-3 px-6 rounded-2xl text-base"],
        small: ["py-2 px-4 rounded-xl text-xs"],
      },
      content: {
        start: ["justify-start"],
        center: ["justify-center"],
        end: ["justify-end"],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "default",
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({
  children,
  intent,
  size,
  content,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={buttonStyles({ intent, size, content })}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
