'use client'
import Store from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
type Prop = { children: ReactNode };
const ReduxProvider = ({ children }: Prop) => {
  return <Provider store={Store}>{children}</Provider>;
};

export default ReduxProvider;
