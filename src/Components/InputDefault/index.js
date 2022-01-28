import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import InputMask from "react-input-mask";

export function InputDefault({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref) => {
        return ref.value;
      },
      setValue: (ref, value) => {
        ref.value = value;
      },
      clearValue: (ref) => {
        ref.value = "";
      },
    });
  }, [fieldName, registerField]);

  //   <InputMask
  //   mask='(+1) 999 999 9999'
  //   value={props.value}
  //   onChange={props.onChange}>

  //   </InputMask>
  return (
    <InputMask
      name={name}
      ref={inputRef}
      defaultValue={defaultValue}
      {...rest}
    />
  );
  //   return <input ref={inputRef} defaultValue={defaultValue} {...rest} />
}
