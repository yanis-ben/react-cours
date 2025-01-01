import { cva } from "class-variance-authority";

export const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md px-3 py-1.5 ring-indigo-500 ring-offset-2 focus-visible:outline-none focus-visible:ring",
  {
    variants: {
      variant: {
        default: "bg-gray-950 text-gray-50 shadow hover:bg-gray-800",
        ghost: " bg-transparent text-gray-950 hover:bg-gray-200 active:bg-gray-300",
        secondary: "bg-gray-200 text-gray-950 hover:bg-gray-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const Button = ({ children, variant, ...props }) => {
  return <button className={buttonVariants({  variant })}>{children}</button>;
};
