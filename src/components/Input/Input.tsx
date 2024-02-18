import React from "react";
import { StyledInput } from './Input.styled';

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
}

export const Input = (props: InputProps) => {
  const { label, placeholder, type, ...rest } = props;

  return (
    <>
        <label htmlFor={label}>
            {label}
        </label>
        <StyledInput
            type={type}
            id={label}
            placeholder={placeholder}
            {...rest}
        />
     </>
  )
}