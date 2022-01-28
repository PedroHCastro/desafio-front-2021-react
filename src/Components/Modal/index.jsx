import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/cart";
import * as S from "./styles";

export function Modal() {
    const dispatch = useDispatch();
    
    return (
        <S.Container>
            <S.Title>
                {`Obrigado ${"Uzumaki Naruto"}!`} 
            </S.Title>
            <S.Message>
                Sua Compra foi finalizada com sucesso!
            </S.Message>
            <S.GoToStore to="/" onClick={() => dispatch(clearCart())}>
                Ir para loja
            </S.GoToStore>
        </S.Container>
    )
}