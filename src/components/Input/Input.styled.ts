import { cabin } from '@/styles/fonts';
import styled from 'styled-components';

const StyledInputContainer = styled.div<{ $small?: boolean; }>`
    width: 100%;
    margin-bottom: 16px;
    font-family: ${cabin.style.fontFamily};

    @media only screen and (min-width: 1024px) {
        width: ${props => props.$small ? "47%" : "100%"};
    }
`;

const StyledInput = styled.input`
    background-color: transparent;
    color: #4c4d4f;
    border: none;
    border-bottom: 1px solid #4c4d4f; 
    width: 100%;
    height: 50px;
    font-size: 16px;
    line-height: 24px;
    font-family: ${cabin.style.fontFamily};

    &:focus-visible {
        outline: none;
    }

    &:-webkit-autofill {
        background-color: transparent;
    }
`;

const Styledlable = styled.label`
    font-size: 14px;
    line-height: 21px;
`;

const StyledError = styled.div`
    min-height: 16px;
    color: #E11D48;
    margin-top: 5px;
    font-size: 12px;
    line-height: 16px;
`;

export { StyledInputContainer, Styledlable, StyledError, StyledInput };
