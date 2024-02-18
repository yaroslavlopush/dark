import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { StyledHeader, StyledContainer, StyledInnerContainer, StyledLeftSide, StyledRightSide } from './Home.styled';
import laptopImage from '@/../public/laptop-image.jpg';
import SignUpForm from '../../SignUpForm/SignUpForm';

const HomePage = () => {
  const [someState, setSomeState] = useState('some state');

  return (
    <>
        <StyledHeader>
            AI Ignition
        </StyledHeader>
        
        <StyledContainer>
            <StyledInnerContainer>
                <StyledLeftSide>
                    <SignUpForm/>
                </StyledLeftSide>
                <StyledRightSide>
                    <Image src={laptopImage} alt='laptop image' />
                </StyledRightSide>
            </StyledInnerContainer>
        </StyledContainer>
    </>
  )
}

export default HomePage;