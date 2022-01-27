import React from "react";
import * as S from "./styles";

export function Modal() {

    return (
        <S.Container>
            <S.Title>
                {`Obrigado ${"Uzumaki Naruto"}!`} 
            </S.Title>
            <S.Message>
                Sua Compra foi finalizada com sucesso!
            </S.Message>
            <S.GoToStore to="/">
                Ir para loja
            </S.GoToStore>
        </S.Container>
    )
}