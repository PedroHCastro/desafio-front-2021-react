import React from "react";

import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import * as S from "./styles";
import { formatMoney } from "../../utils";
import { addToCart } from "../../store/cart";

export function CartItem({ data, showCart = false, handleRemove }) {
  const { title, poster_path, count, value } = data;
  const { data: configImages } = useSelector((state) => state.config);
  const { base_url, poster_sizes } = configImages;

  const dispatch = useDispatch();

  return (
    <S.Item>
      <S.ImageContainer>
        <S.ImageStyled src={`${base_url}${poster_sizes[3]}${poster_path}`} />
      </S.ImageContainer>
      <S.ItemInfo>{title}</S.ItemInfo>
      {!showCart && <S.ItemInfo>{count}</S.ItemInfo>}
      <S.ItemInfo>{`R$ ${formatMoney(value.toFixed(2))}`}</S.ItemInfo>
      {showCart && (
        <S.ItemInfo>
          <button onClick={() => dispatch(addToCart(data))}>
            <S.CartIcon icon={faShoppingCart} />
          </button>
        </S.ItemInfo>
      )}
      <S.ItemInfo>
        <button onClick={() => dispatch(handleRemove(data))}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </S.ItemInfo>
    </S.Item>
  );
}
