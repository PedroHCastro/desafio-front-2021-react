import { useDispatch, useSelector } from "react-redux";

import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { toggleCart } from "../../../../store/cart";
import { toggleFavorite } from "../../../../store/favorite";

import * as S from "./styles";

export function ActionButtons(rest) {
  const dispatch = useDispatch();
  const { countItems, cartIsOpen } = useSelector((state) => state.cart);
  const { countItems: countItemsFavorite, favoriteIsOpen } = useSelector(
    (state) => state.favorite
  );
  function handleToogleFavorite() {
    cartIsOpen && dispatch(toggleCart());
    dispatch(toggleFavorite());
  }
  function handleToggleCart() {
    favoriteIsOpen && dispatch(toggleFavorite());
    dispatch(toggleCart());
  }
  return (
    <S.Container {...rest}>
      <S.ButtonOpen onClick={() => dispatch(handleToogleFavorite())}>
        {countItemsFavorite > 0 && <span>{countItemsFavorite}</span>}
        <FontAwesomeIcon icon={faHeart} />
      </S.ButtonOpen>
      <S.ButtonOpen onClick={() => dispatch(handleToggleCart())}>
        {countItems > 0 && <span>{countItems}</span>}
        <FontAwesomeIcon icon={faShoppingCart} />
      </S.ButtonOpen>
    </S.Container>
  );
}
