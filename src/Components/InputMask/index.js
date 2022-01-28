import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import ReactInputMask from "react-input-mask";

import * as S from "./styled";

export function InputMask({ name, label, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue = "", registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
  return (
    <S.ContainerInput>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <ReactInputMask
        ref={inputRef}
        id={fieldName}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <S.Tooltip style={{ color: "#f00" }}>{error}</S.Tooltip>}
    </S.ContainerInput>
  );
}
