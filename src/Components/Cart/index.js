import React from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem";

import * as S from "./styles";

function Cart({ ItemsCart, dispatch }) {

  function clearCart(film) {
    return {
      type: "CLEARCART"
    };
  }
  
  return (
    <S.Container>
      <S.HeaderContent>
        <S.Title>Meu Carrinho</S.Title>
        <S.ClearCart onClick={() => dispatch(clearCart())}>Esvaziar</S.ClearCart>
      </S.HeaderContent>

      <S.ItemsContainer>
        {ItemsCart.map((film) => (
          <CartItem key={film.id} data={film} />
        ))}
      </S.ItemsContainer>
    </S.Container>
  );
}

export default connect((state) => ({ ItemsCart: state }))(Cart);
