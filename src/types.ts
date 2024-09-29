import { MouseEventHandler, ReactNode } from "react";

export type ButtonProps = {
  className: string;
  href: string | undefined;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode | string;
  px: string | undefined;
};
