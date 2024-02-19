import styled from 'styled-components';

const StyledContainer = styled.div`
    max-width: 472px;
`;

const StyledH1 = styled.h1`
    font-size: 34px;
    line-height: 51px;
    font-weight: 400;
`;

const StyledSubHeader = styled.div`
    color: rgba(76, 77, 79, 0.5);
    margin-top: 24px;
    margin-bottom: 40px;
    font-size: 14px;
    line-height: 21px;

    button {
        color: rgba(76, 77, 79, 1);
        background: none;
        border: none;
        text-decoration: underline;
        cursor: pointer;
    }
`;

const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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

const StyledSubmitButton = styled(StyledButton)`
    background-color: #000;
    color: #fff;
    font-size: 14px;
    line-height: 21px;

    &:hover {
        background-color: #312a2a;
        color: #fff;
    }
`;

const StyledLine = styled.div`
    margin-bottom: 40px;
    margin-top: 24px;
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

const StyledTermsText = styled.div`
    color: rgba(76, 77, 79, 0.5);
    margin-top: 24px;
    margin-bottom: 16px;
    font-size: 12px;
    line-height: 21px;
    
    a {
        color: rgba(76, 77, 79, 1);
        text-decoration: underline;
    }
`;

const StyledBottomLogIn = styled(StyledSubHeader)`
    text-align: center;
    font-size: 12px;
    margin-bottom: 41px;
    margin-top: 10px;
`;

export { StyledContainer, StyledH1, StyledSubHeader, StyledForm, StyledButton, StyledSubmitButton, StyledLine, StyledTermsText, StyledBottomLogIn };

