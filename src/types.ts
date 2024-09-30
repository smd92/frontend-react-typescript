import { MouseEventHandler, ReactNode } from "react";

export type ButtonProps = {
  className: string;
  href: string | undefined;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode | string;
  px: string | undefined;
};

export type ProductData = {
  id: number;
  name: string;
  description: string;
  price: number;
  inStockCount: number;
  img: string;
}