import React, { useEffect } from 'react';
import { useSession } from "next-auth/react";
import Loading from '@/components/Loading/Loading';

import { StyledContainer, StyledBackground, StyledElement, CreateCVButton } from './Landing.styled';
import Slider from '../../Slider/Slider';
import InputFile from '@/components/InputFile/InputFile';
import { testimonialsMock } from '../../Slider/testimonials.data'
import useAuthenticated from '../../../hooks/useAuthenticated';
import { useRouter } from 'next/router';

const Landing = () => {
  const { data: session, status } = useSession(); // google session
  const [isAuthenticated, authenticate, checkIfauthenticateCalled] = useAuthenticated() as [isAuthenticated: boolean, () => void, checkIfauthenticateCalled: boolean];
  const router = useRouter();

  useEffect(() => {
    authenticate();
  }, []);

  useEffect(() => {
    authenticate();
  });

  useEffect(() => {
    if (checkIfauthenticateCalled && !session && !isAuthenticated) {
      router.push('/');
    }

  }, [checkIfauthenticateCalled, status, isAuthenticated]);

  if (status === "loading") {
    return (<div> <Loading /> </div>);
  }

  if (checkIfauthenticateCalled && !session && !isAuthenticated) {
    return null;
  }

  return (
    <>
      <StyledContainer>
        <StyledElement>
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/U9rAmaxdvNw?si=5SoXBdf4vuYQ4HZ2'
            title='Demo video'
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </StyledElement>

        <StyledBackground>
          <InputFile label='Upload File' />
        </StyledBackground>

        <StyledElement>
          <Slider testimonials={testimonialsMock} />
        </StyledElement>

        <StyledBackground>
          <CreateCVButton>
            <span>Create CV with AI</span>
          </CreateCVButton>
        </StyledBackground>
      </StyledContainer>
    </>
  );
};

export default Landing;