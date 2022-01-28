import { createStore, combineReducers } from "redux";

import cartReducer from "./cart";
import favoriteReducer from "./favorite";
import configReducer from "./config";
import movieReducer from "./movie";
import alertReducer from "./alert";

const rootReducer = combineReducers({
  cart: cartReducer,
  favorite: favoriteReducer,
  config: configReducer,
  movie: movieReducer,
  alert: alertReducer,
});

const store = createStore(rootReducer);
export default store;
