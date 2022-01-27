import React, {useEffect, useState, useRef} from "react";
import { useSelector } from "react-redux";
import CartItem from "../../Components/CartItem";
import {Modal} from "../../Components/Modal";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import { Input } from "../../Components/Input";

export function Checkout() {
  const data = useSelector((state) => state.cart.data);
const [openModal, setOpenModal] = useState(false);
const formRef = useRef();

const navigate = useNavigate();
  useEffect(() => {
    if (data.length === 0) {
      navigate("/")
    }
  }, [data])

function handleOpenModal() {
  setOpenModal(true)
}

function handleFinalizePurchase() {
  formRef.current && formRef.current.submitForm();
}
const handleFormSubmit = (data) => {
  console.log("data---->", data);
  handleOpenModal();
};
  return (
    <S.Container>
      <S.FirstSection>
        <S.FormContainer>
          <h3>Finalizar Compra</h3>
          <S.FormStyled ref={formRef} onSubmit={handleFormSubmit}>
            <Input name="complete_name" placeholder="Nome Completo" />
            <Input name="cpf" placeholder="CPF" mask='999.999.999-99'/>
            <Input name="email" placeholder="E-mail" />
            <Input name="cep" placeholder="CEP" mask='99999‑999'/>
            <Input name="cel" placeholder="Celular" mask='(99) 99999-9999' />
            <Input name="address" placeholder="Endereço" />
            <Input name="city" placeholder="Cidade" />
            <Input name="state" placeholder="Estado" />
          </S.FormStyled>
        </S.FormContainer>
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
        <S.FinalizePurchase onClick={() => handleFinalizePurchase()}>Finalizar</S.FinalizePurchase>
      </S.SecondSection>
      {openModal && <Modal />}
    </S.Container>
  );
}
