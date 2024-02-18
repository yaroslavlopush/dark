import React from "react";
import { StyledInput } from './Checkbox.styled';

interface CheckboxProps {
  label: string;
}

export const Checkbox = (props: CheckboxProps) => {
  const { label, ...rest } = props;

  return (
    <>
        <label htmlFor={label}>
            {label}
        </label>
        <StyledInput
            type='checkbox'
            id={label}
            {...rest}
        />
     </>
  )
}