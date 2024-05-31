import { Provider } from "react-redux";
import store from "../redux/store.ts";
import { FC, ReactNode } from "react";

interface ReactProps {
  children: ReactNode;
}

const ReduxProvider: FC<ReactProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
