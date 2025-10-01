import { combineReducers, legacy_createStore as createStore } from "redux";
import productReducer from "./product/reducer";

const rootReducer = combineReducers({
  product: productReducer,
});
const store = createStore(rootReducer);

export default store;
