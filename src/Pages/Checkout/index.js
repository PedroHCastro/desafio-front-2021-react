import React from "react";
import { useSelector } from "react-redux";
import { FormDataUser } from "../../Components/FormDataUser";
import CartItem from "../../Components/CartItem";

import * as S from "./styles";

export function Checkout() {
  const data = useSelector((state) => state.cart.data);

  return (
    <S.Container>
      <S.FirstSection>
        <FormDataUser />
      </S.FirstSection>
      <S.SecondSection>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Nome</th>
              <th>Qtd</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {data.map((film) => (
              <CartItem key={film.id} data={film} />
            ))}
          </tbody>
        </table>
      </S.SecondSection>
    </S.Container>
  );
}
