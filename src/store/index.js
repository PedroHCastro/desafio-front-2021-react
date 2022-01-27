import { createStore, combineReducers } from "redux";

import cartReducer from "./cart";
import favoriteReducer from "./favorite";

const rootReducer = combineReducers({
  cart: cartReducer,
  favorite: favoriteReducer,
});

const store = createStore(rootReducer);
export default store;
