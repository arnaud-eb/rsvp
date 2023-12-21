import { FC, PropsWithChildren } from "react";

declare global {
  type FCC<P = {}> = FC<PropsWithChildren<P>>;
}
