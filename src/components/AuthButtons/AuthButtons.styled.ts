import { cabin } from '@/styles/fonts';
import styled from 'styled-components';

const StyledButton = styled.button`
    max-width: 100%;
    width: 472px;
    height: 48px;
    border: 1px solid rgb(76, 77, 79);
    border-radius: 24px;
    color: #4C4D4F;
    background: #fff;
    cursor: pointer;
    position: relative;
    font-family: ${cabin.style.fontFamily};

    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    img {
        margin-right: 10px;
    }

    &:active {
        top: 1px;
    }

    &:hover {
        background: #fbfbfb;
    }
`;

export { StyledButton };