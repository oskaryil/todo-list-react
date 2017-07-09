import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import { createLogger } from "redux-logger";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(createLogger());
}

const store = createStore(
  reducers,
  undefined,
  compose(applyMiddleware(...middlewares))
);

export default store;
