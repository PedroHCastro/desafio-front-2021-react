import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "../CartItem";
import { removeItemToCart, clearCart, toggleCart } from "../../store/cart";

import * as S from "./styles";
import { formatMoney } from "../../utils";

export function Cart() {
  const [hasItems, setHasItems] = useState(false);

  const {
    data: itemsCart,
    total,
    cartIsOpen,
  } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setHasItems(itemsCart.length > 0);
  }, [itemsCart]);

  return (
    <S.Container className={cartIsOpen && "open"}>
      <S.HeaderContent>
        <S.Title>Meu Carrinho</S.Title>
        {hasItems && (
          <S.ClearCart onClick={() => dispatch(clearCart())}>
            Esvaziar
          </S.ClearCart>
        )}
      </S.HeaderContent>

      <S.TableContainer>
        <S.ItemsContainer>
          <tbody>
            {itemsCart.map((film) => (
              <CartItem
                key={film.id}
                data={film}
                handleRemove={removeItemToCart}
              />
            ))}
          </tbody>
        </S.ItemsContainer>
      </S.TableContainer>
      {hasItems && (
        <S.PaymentContainer>
          <S.TotalBox>
            <S.LabelTotal>Total:</S.LabelTotal>
            <S.LabelPrice>{`R$ ${formatMoney(total.toFixed(2))}`}</S.LabelPrice>
          </S.TotalBox>
          <S.LinkStyled to="/checkout" onClick={() => dispatch(toggleCart())}>
            Finalizar compra
          </S.LinkStyled>
        </S.PaymentContainer>
      )}
    </S.Container>
  );
}
