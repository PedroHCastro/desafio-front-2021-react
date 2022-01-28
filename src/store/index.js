import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart";
import favoriteReducer from "./favorite";
import configReducer from "./config";
import movieReducer from "./movie";
import alertReducer from "./alert";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  favorite: favoriteReducer,
  config: configReducer,
  movie: movieReducer,
  alert: alertReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
