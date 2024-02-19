
import styled from 'styled-components';
import { ptSerif } from '@/styles/fonts';

const LogOutButton = styled.button`
    border: 1px solid #343537;
    font-family: ${ptSerif.style.fontFamily};
    background-color: transparent;
    color: #343537;
    padding: 16px 32px;
    border-radius: 14px;
    cursor: pointer;
    position: absolute;
    right: 22px;

    &:hover, 
    &:focus, 
    &:active {
        background-color: #eeeeee;
    } 
`;

const StyledHeader = styled.div`
    background-color: #fff;
    text-align: center;
    padding: 20px;
    font-size: 32px;
    margin-bottom: 50px;
    font-family: ${ptSerif.style.fontFamily};
`;

const HeaderContainer = styled.div`
    max-width: 1308px;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    position: relative;
`;

export { StyledHeader, LogOutButton, HeaderContainer };