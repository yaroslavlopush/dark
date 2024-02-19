import { ptSerif } from '@/styles/fonts';
import styled from 'styled-components';

const StyledHeader = styled.div`
    background-color: #fff;
    text-align: center;
    padding: 20px;
    font-size: 32px;
    margin-bottom: 40px;
`;

const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1308px;
    margin: 0 auto;
`;

const StyledElement = styled.div`
    width: 100%;
    margin: 20px;
    height: 367px;
    border-radius: 14px;
    overflow: hidden;

    @media only screen and (min-width: 1024px) {
        width: calc(50% - 40px);
    }
`;

const StyledBackground = styled(StyledElement)`
    background: linear-gradient(109deg,#c5dce4 25.3%,#dbb898 82.65%);
`;

const CreateCVButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    color: #343537;
    font-family: ${ptSerif.style.fontFamily};
    font-size: 40px;

    &:hover, 
    &:focus, 
    &:active {
        cursor: pointer;
    } 
`;

export { StyledHeader, StyledContainer, StyledBackground, StyledElement, CreateCVButton }



