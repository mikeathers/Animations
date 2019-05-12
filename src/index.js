import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import configureStore from "store/configureStore";
import { PersistGate } from "redux-persist/integration/react";
// import * as serviceWorker from "./serviceWorker";
import "./styles/main.scss";
import Root from "./Root";
import AppRouter from "./router/AppRouter";

const store = configureStore();

const App = (
  <Root>
    <PersistGate persistor={store.persistor}>
      <AppRouter />
    </PersistGate>
  </Root>
);

// serviceWorker.unregister();
ReactDOM.render(App, document.getElementById("root"));
