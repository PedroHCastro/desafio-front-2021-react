import React, { useRef } from "react";
import { Form } from "@unform/web";

import * as S from "./styles";

export function FormDataUser() {
  const formRef = useRef();
  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <S.Container>
      <h3>Finalizar Compra</h3>
      <S.FormStyled ref={formRef} onSubmit={handleFormSubmit}>
        <input name="complete_name" placeholder="Nome Completo" />
        <input name="cpf" placeholder="CPF" />
        <input name="email" placeholder="E-mail" />
        <input name="cep" placeholder="CEP" />
        <input name="cel" placeholder="Celular" />
        <input name="address" placeholder="Endereço" />
        <input name="city" placeholder="Cidade" />
        <input name="state" placeholder="Estado" />
        {/* <button type="submit">Save</button> */}
      </S.FormStyled>
    </S.Container>
  );
}
