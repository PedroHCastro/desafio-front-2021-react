import { Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";

import { Header } from "./Components/Header";
import { Checkout } from "./Pages/Checkout";
import Favorite from "./Pages/Favorite";
import { Home } from "./Pages/Home";
import { GlobalStyle } from "./styles/global";

import store from "./store";

export function App() {
  return (
    <Provider store={store}>
      <Header />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="favoritos" element={<Favorite />} />
      </Routes>
    </Provider>
  );
}
