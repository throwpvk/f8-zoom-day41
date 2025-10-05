import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import productReducer from "./product/reducer";
import uiReducer from "./ui/reducer";

const rootReducer = combineReducers({
  product: productReducer,
  ui: uiReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
