import styled from 'styled-components';
import { ptSerif, cabin } from '@/styles/fonts';

const StyledInputContainer = styled.div<{ $small?: boolean; }>`
    height: 100%;
    width: 100%;
    margin-bottom: 16px;

    @media only screen and (min-width: 1024px) {
        width: ${props => props.$small ? "47%" : "100%"};
    }
`;

const StyledInvisibleInput = styled.input`
    display: none;
`;

const StyledLabelFile = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    &:hover, 
    &:focus, 
    &:active {
        cursor: pointer;
    } 
`;

const LabelTitle = styled.div`
    font-family: ${ptSerif.style.fontFamily};
    font-weight: 400;
    font-size: 32px;
    line-height: 42px;
`;

const LabelSubTitle = styled.div`
    font-family: ${cabin.style.fontFamily};
    font-size: 16px;
    line-height: 20px;
`;


const Icon = styled.div`
    border-radius: 100px;
    border: 2px solid #343537;
    width: 94px;
    height: 94px;
    text-align: center;
    padding-top: 18px;
`;

export { StyledInputContainer, StyledInvisibleInput, StyledLabelFile, LabelTitle, LabelSubTitle, Icon };
