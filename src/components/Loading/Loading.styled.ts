import styled from 'styled-components';
import { keyframes } from 'styled-components'

const spin = keyframes`
 0% { rotate: 0deg }
 100% { rotate: 360deg }
`;

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledSpinner = styled.div`
    animation: 0.5s linear 0s infinite normal none running ${spin};
    height: 50px;
    width: 50px;
    border-width: 3px;
    border-style: solid;
    border-color: rgb(0, 0, 0) transparent transparent;
    border-image: initial;
    border-radius: 100%;
    box-sizing: border-box;
`;



export { StyledContainer, StyledSpinner };