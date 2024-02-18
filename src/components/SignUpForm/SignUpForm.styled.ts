import styled from 'styled-components';

const StyledContainer = styled.div`
    
`;


const StyledButton = styled.button`
    width: 472px;
    height: 48px;
    border: 1px solid rgb(76, 77, 79);
    border-radius: 24px;
    color: #4C4D4F;
    background: #fff;
    cursor: pointer;
    position: relative;

    &:active {
        top: 1px;
    }

    &:hover {
        background: #fbfbfb;
    }
`;

const StyledSubmitButton = styled(StyledButton)`
    background-color: #000;
    color: #fff;

    &:hover {
        background-color: #312a2a;
        color: #fff;
    }
`;

const StyledLine = styled.div`
    margin-bottom: 40px;
    position: relative;
    text-align: center;
    max-width: 100%;
    width: 100%;
    opacity: 0.5;

    @media only screen and (min-width: 1024px) {
        width: 472px;
    }

    &::before {
        left: 0;
        right: 50%;
        content: "";
        position: absolute;
        height: 1px;
        background-color: #4c4d4f;
        width: calc(50% - 22px);
        top: 50%;
        transform: translateY(-50%);
    }

    &:: after {
        content: "";
        position: absolute;
        height: 1px;
        background-color: #4c4d4f;
        width: calc(50% - 22px);
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        left: calc(50% + 22px);
    }
`;

export { StyledContainer, StyledButton, StyledSubmitButton, StyledLine };

