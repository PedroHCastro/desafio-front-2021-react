import React from "react";

import * as S from "./styles";

export function CartItem({ data }) {
  const { title, poster_path } = data;
  return (
    <S.Item>
      <S.ImageContainer>
        <S.ImageStyled src={`${poster_path}`} />
      </S.ImageContainer>
      <S.ItemInfo>{title}</S.ItemInfo>
      <S.ItemInfo>1</S.ItemInfo>
      <S.ItemInfo>R$ 9,99</S.ItemInfo>
      <S.ItemInfo>Lixo</S.ItemInfo>
    </S.Item>
  );
}
