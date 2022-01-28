import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";

import { Header } from "./Components/Header";
import { Cart } from "./Components/Cart";
import { Favorite } from "./Components/Favorite";

import { Checkout } from "./Pages/Checkout";
import { Home } from "./Pages/Home";

import { getConfig } from "./Services/ConfigurationServices";
import { getGenres } from "./Services/MovieServices";

import { addConfig } from "./store/config";
import { addAddGeneres } from "./store/movie";

import { GlobalStyle } from "./styles/global";
import store from "./store";
import { Alert } from "./Components/Alert";

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const { images } = await getConfig();
      const { genres } = await getGenres();

      dispatch(addConfig(images));
      dispatch(addAddGeneres(genres));
    }

    fetchData();
  });

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Cart />
      <Favorite />
      <Alert />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </Provider>
  );
}
