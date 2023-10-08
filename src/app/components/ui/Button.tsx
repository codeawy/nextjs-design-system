import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { tailwindCMerge } from "@/utils";

const buttonVariants = cva("inline-flex items-center justify-center duration-200", {
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      // TODO: Replace the styles below with variables and values from variants.
      outline: "bg-transparent text-black dark:text-white border border-gray-600",
    },
    size: {
      xs: "px-2 text-xs h-6",
      sm: "px-6 text-sm h-8",
      base: "px-4 text-base h-10",
      lg: "px-6 text-lg h-12",
    },
    fullWidth: {
      true: "w-full",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "base",
    rounded: "md",
  },
});

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const Button = ({ children, className, variant, size, fullWidth, rounded, ...rest }: IProps) => {
  return (
    <button
      className={`${tailwindCMerge(buttonVariants({ variant, size, fullWidth, rounded }))} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
