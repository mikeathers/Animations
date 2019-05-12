import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

export default ({ children }) => {
  const store = configureStore();
  return <Provider store={store.store}>{children}</Provider>;
};
