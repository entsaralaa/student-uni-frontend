import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
};

export function Card({ title, children }: CardProps) {
  return (
    <div className="component-card">
      {title && <h2>{title}</h2>}

      {children}
    </div>
  );
}