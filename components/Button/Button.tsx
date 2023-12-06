import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva("rounded-2xl py-3 px-7", {
  variants: {
    intent: {
      primary: "bg-gray-900",
      secondary: "bg-accent",
    },
    defaultVariants: {
      intent: "primary",
    },
  },
});

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  content: string;
  disabled?: boolean;
}

export default function Button({
  intent,
  content,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonStyles({ intent })} {...props}>
      {content}
    </button>
  );
}
