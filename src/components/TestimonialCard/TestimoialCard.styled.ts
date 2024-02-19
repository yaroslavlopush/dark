import styled from 'styled-components';
import { cabin, ptSerif } from '@/styles/fonts';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
`;

const AvatarContainer = styled.div`
    width: 62px;
    height: 62px;
    overflow: hidden;
    border-radius: 100px;
`;

const AvatarPhoto = styled.img`
    width: 100%;
`;

const UserName = styled.h3`
    font-family: ${ptSerif.style.fontFamily}, serif;
    font-weight: 400;
    font-style: normal;
    font-size: 24px;
    line-height: 51px;
    letter-spacing: 0em;
    text-align: center;
`;

const TestimonialText = styled.p`
    font-family: ${cabin.style.fontFamily}, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    color: #A5A6A7;
`;

export { StyledContainer, AvatarContainer, AvatarPhoto, UserName, TestimonialText };

