import { PropsWithChildren } from "react";
import { QeuryProvider } from "./queryProvider";

export const Providers = ({ children }: PropsWithChildren) => {
  return <QeuryProvider>{children}</QeuryProvider>;
};
