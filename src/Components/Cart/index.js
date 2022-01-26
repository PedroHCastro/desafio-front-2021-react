import React from "react";
import { connect } from "react-redux";
import { CartItem } from "../CartItem";

import * as S from "./styles";

function Cart({ ItemsCart }) {
  return (
    <S.Container>
      <S.Title>Meu Carrinho</S.Title>
      <S.ClearCart>Esvaziar</S.ClearCart>

      <S.ItemsContainer>
        {ItemsCart.map((film) => (
          <CartItem key={film.id} data={film} />
        ))}
      </S.ItemsContainer>
    </S.Container>
  );
}

export default connect((state) => ({ ItemsCart: state }))(Cart);
