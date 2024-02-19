import React from "react";
import { StyledInputContainer, Styledlable, StyledError, StyledInput } from './Input.styled';

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  small?: boolean;
}

export const Input = (props: InputProps) => {
  const { label, placeholder, type, name, value, onChange, error, small, ...rest } = props;

  return (
    <StyledInputContainer $small={small}>
      <Styledlable htmlFor={label}>
        {label}
      </Styledlable>
      <StyledInput
        onChange={onChange}
        name={name}
        type={type}
        id={label}
        placeholder={placeholder}
        value={value}
        {...rest}
      />
      <StyledError>{error && error}</StyledError>
    </StyledInputContainer>
  )
}