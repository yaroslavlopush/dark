import styled from 'styled-components';

const StyledContainer = styled.div`
    background-color: white;
    border-radius: 14px;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 22px;
`;

const Arrow = styled.button`
    display: block;
    border: 1px solid #444444;
    border-radius: 100px;
    width: 43px;
    height: 43px;
    line-height: 0px;
    &:hover, 
    &:focus, 
    &:active {
        cursor: pointer;
    } 
`;

const PrevButton = styled(Arrow)`
    margin-right: 15px;
    background-color: white;
    &:hover, 
    &:focus, 
    &:active {
        background-color: #eeeeee;
    } 
`;
const NextButton = styled(Arrow)`
    background-color: #444444;
    &:hover, 
    &:focus, 
    &:active {
        background-color: #888888;
    } 
`;

export { StyledContainer, Nav, NextButton, PrevButton };

