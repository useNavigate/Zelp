import { createStore } from "redux"
import { applyMiddleware, combineReducers,compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import errorReducer from "./error";
import { businessReducer } from "./business";
import reviewReducer from "./review";
import userReducer from "./user";

const rootReducer=combineReducers({
  session:sessionReducer,
  business:businessReducer,
  review:reviewReducer,
  user:userReducer
})

let enhancer;
if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}
const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore
