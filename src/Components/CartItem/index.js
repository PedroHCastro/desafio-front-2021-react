import React from "react";

import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import * as S from "./styles";

function CartItem({ data, dispatch }) {
  const { title, poster_path, count, value } = data;

  console.log(data);
  function removeItemToCart(film) {
    return {
      type: "REMOVECART",
      film
    };
  }

  return (
    <S.Item>
      <S.ImageContainer>
        <S.ImageStyled src={`${poster_path}`} />
      </S.ImageContainer>
      <S.ItemInfo>{title}</S.ItemInfo>
      <S.ItemInfo>{count}</S.ItemInfo>
      <S.ItemInfo>{`R$ ${value.toFixed(2)}`}</S.ItemInfo>
      <S.ItemInfo><button onClick={() => dispatch(removeItemToCart(data))}><FontAwesomeIcon icon={faTrash}/></button></S.ItemInfo>
    </S.Item>
  );
}

// export default connect(() => ()(CartItem));
export default connect()(CartItem);
