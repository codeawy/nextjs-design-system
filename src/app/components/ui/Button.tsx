import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { tailwindCMerge } from "@/utils";

const buttonVariants = cva("inline-flex items-center rounded-md duration-200", {
  variants: {
    variant: {
      primary: "bg-indigo-500 text-white  dark:bg-primary dark:text-white",
      outline: "bg-transparent text-black dark:text-white border border-gray-600",
      destructive: "bg-red-600 text-black dark:bg-red-800 dark:text-white",
    },
    size: {
      xs: "px-2 text-xs h-6",
      sm: "px-6 text-sm h-8",
      base: "px-4 text-base h-10",
      lg: "px-6 text-lg h-12",
    },
    fullWidth: {
      true: "w-full justify-center",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "base",
  },
});

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const Button = ({ children, className, variant, size, fullWidth, ...rest }: IProps) => {
  return (
    <button className={tailwindCMerge(buttonVariants({ variant, size, fullWidth }))} {...rest}>
      {children}
    </button>
  );
};

export default Button;
