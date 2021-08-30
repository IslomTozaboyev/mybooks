import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Reducer from "./Reducer/Reducers";

const Store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(...[thunk]))
);
export const dispatch = Store.dispatch;
export default Store;
