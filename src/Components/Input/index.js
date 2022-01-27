import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import InputMask from 'react-input-mask';

export function Input({ name, ...rest }) {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

//   <InputMask
//   mask='(+1) 999 999 9999' 
//   value={props.value} 
//   onChange={props.onChange}>

//   </InputMask>
return <InputMask ref={inputRef} defaultValue={defaultValue} {...rest} />
//   return <input ref={inputRef} defaultValue={defaultValue} {...rest} />
}