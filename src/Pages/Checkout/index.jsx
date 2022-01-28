import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { CartItem } from "../../Components/CartItem";
import { Modal } from "../../Components/Modal";
import { Input } from "../../Components/Input";
import { InputMask } from "../../Components/InputMask";

import { removeItemToCart } from "../../store/cart";
import { schema } from "../../utils/schema/checkoutSchema";
import { setDataAlert, toggleAlert } from "../../store/alert";

import * as S from "./styles";

export function Checkout() {
  const data = useSelector((state) => state.cart.data);
  const [openModal, setOpenModal] = useState(false);
  const formRef = useRef();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    if (data.length === 0) {
      navigate("/");
    }
  }, [data, navigate]);

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleFinalizePurchase() {
    formRef.current && formRef.current.submitForm();
  }
  const handleFormSubmit = async (data) => {
    try {
      formRef.current?.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });
      handleOpenModal()
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorMessages = {};
        let contentError = "<ul style='color: red;'>";
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
          contentError += ` <li>${error.message}</li>`;
        });
        contentError += "</ul>";
        dispatch(
          setDataAlert({
            title: "Atenção",
            content: contentError,
            button: "OK",
          })
        );
        dispatch(toggleAlert());
        formRef.current.setErrors(errorMessages);
      } else {
        dispatch(
          setDataAlert({
            title: "Atenção",
            content: "Ocorrou um erro ao finalizar a compra, por favor tente novamente mais tarde.",
            button: "OK",
          })
        );
        dispatch(toggleAlert());
      }
      
      return;
    }

    schema.isValid(data).then(function (valid) {
      handleOpenModal();
    });
  };
  return (
    <S.Container>
      <S.FirstSection>
        <S.FormContainer>
          <h3>Finalizar Compra</h3>
          <S.FormStyled
            schema={schema}
            ref={formRef}
            onSubmit={handleFormSubmit}
          >
            <Input name="name" id="name" placeholder="Nome Completo" mask="" />
            <InputMask
              name="cpf"
              id="cpf"
              placeholder="CPF"
              mask="999.999.999-99"
            />
            <Input name="email" id="email" placeholder="E-mail" />
            <InputMask name="cep" id="cep" placeholder="CEP" mask="99999‑999" />
            <InputMask
              name="cel"
              id="cel"
              placeholder="Celular"
              mask="(99) 99999-9999"
            />
            <Input name="address" id="address" placeholder="Endereço" mask="" />
            <Input name="city" id="city" placeholder="Cidade" mask="" />
            <Input name="state" id="state" placeholder="Estado" mask="" />
          </S.FormStyled>
        </S.FormContainer>
      </S.FirstSection>
      <S.SecondSection>
        <S.ContainerTable>
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
                <CartItem
                  key={film.id}
                  data={film}
                  handleRemove={removeItemToCart}
                />
              ))}
            </tbody>
          </table>
        </S.ContainerTable>
        <S.FinalizePurchase onClick={() => handleFinalizePurchase()}>
          Finalizar
        </S.FinalizePurchase>
      </S.SecondSection>
      {openModal && <Modal />}
    </S.Container>
  );
}
