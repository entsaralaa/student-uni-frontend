import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  loading?: boolean;
};

export function Button({ children, loading = false, disabled, ...props }: ButtonProps) {
  return (
    <button className="button" disabled={disabled || loading} {...props}>
      {loading ? "Loading..." : children}
    </button>
  );
}
