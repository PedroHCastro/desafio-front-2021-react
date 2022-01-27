import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleCart } from "../../store/cart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Header() {
  const dispatch = useDispatch();
  const countItems = useSelector((state) => state.cart.countItems);
  return (
    <Container>
      <div></div>
      <div>
        <input></input>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div>
        <Link to="/favoritos">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <button onClick={() => dispatch(toggleCart())}>
          <span>{countItems}</span>
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </Container>
  );
}
