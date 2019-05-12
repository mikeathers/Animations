import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "reducers";

export default function configureStore(history, initialState) {
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === "development";

  if (
    isDevelopment &&
    typeof window !== "undefined" &&
    window.devToolsExtension
  ) {
    enhancers.push(window.devToolsExtension());
  }

  // const rootReducer = (state, action) => {
  //   if (action.type === "USER_LOGOUT") {
  //     state = undefined;
  //   }
  //   return appReducer(state, action);
  // };

  const middleware = [thunk, routerMiddleware(history)];

  const persistConfig = {
    key: "root",
    storage
    // blacklist: ["auth"]
  };

  const persistedReducer = persistReducer(persistConfig, reducers);

  let store = createStore(
    persistedReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  let persistor = persistStore(store);
  return { store, persistor };
}
