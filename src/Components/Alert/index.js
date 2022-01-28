import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleAlert } from "../../store/alert";

import * as S from "./styles";

export function Alert() {
  const { alertIsOpen, title, content, button } = useSelector(
    (state) => state.alert
  );
  const dispatch = useDispatch();

  return (
    <S.Container className={alertIsOpen ? "open" : ""}>
      <S.Title>{title}</S.Title>
      <S.Content dangerouslySetInnerHTML={{ __html: content }}></S.Content>
      {button && (
        <S.ButtonConfirm onClick={() => dispatch(toggleAlert())}>
          {button}
        </S.ButtonConfirm>
      )}
    </S.Container>
  );
}
