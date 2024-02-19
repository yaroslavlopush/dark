import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledInnerContainer = styled.div`
    display: flex;
    width: 95%;
    margin: 0 auto;

    @media only screen and (min-width: 1024px) {
        width: 960px;
    }
`;

const StyledLeftSide = styled.div`
    background-color: #fff;
    border-radius: 14px 0 0 14px;
    padding: 24px;
    max-width: 100%;

    @media only screen and (min-width: 1024px) {
        width: 576px;
        margin-bottom: 5px;
    }
`;

const StyledRightSide = styled.div`
    border-radius: 0 14px 14px 0;
    overflow: hidden;

    @media only screen and (min-width: 1024px) {
        width: 384px;
    }
`;

export { StyledContainer, StyledInnerContainer, StyledLeftSide, StyledRightSide };

