import { ptSerif } from '@/styles/fonts';
import styled from 'styled-components';

const StyledInput = styled.input`
    background-color: transparent;
    color: #4c4d4f;
    border: 1px solid #4c4d4f;
    border-radius: 6px;
    width: 22px;
    height: 22px;
    appearance: none;
    cursor: pointer;

    &:checked {
        appearance: auto;
    }

`;

const StyledCheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`;

const StyledLabel = styled.label`
    cursor: pointer;
    font-size: 12px;
    line-height: 21px;
    margin-left: 12px;
    font-family: ${ptSerif.style.fontFamily};
`;

export { StyledCheckboxContainer, StyledInput, StyledLabel };
