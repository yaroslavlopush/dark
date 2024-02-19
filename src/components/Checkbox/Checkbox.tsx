import React from "react";
import { StyledInput, StyledCheckboxContainer, StyledLabel } from './Checkbox.styled';

interface CheckboxProps {
  label: string;
}

export const Checkbox = (props: CheckboxProps) => {
  const { label, ...rest } = props;

  return (
    <StyledCheckboxContainer>
      <StyledInput
        type='checkbox'
        id={label}
        {...rest}
      />
      <StyledLabel htmlFor={label}>
        {label}
      </StyledLabel>
    </StyledCheckboxContainer>
  )
}