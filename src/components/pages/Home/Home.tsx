import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { StyledContainer, StyledInnerContainer, StyledLeftSide, StyledRightSide } from './Home.styled';
import laptopImage from '@/../public/laptop-image.jpg';
import SignUpForm from '@/components/SignUpForm/SignUpForm';
import LogInForm from '@/components/LogInForm/LogInForm';
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react";
import useAuthenticated from '../../../hooks/useAuthenticated';


const HomePage = () => {
    const { status } = useSession(); // google session
    const router = useRouter();

    const [isLogIn, setIsLogIn] = useState(false);
    const [isAuthenticated, authenticate] = useAuthenticated() as [isAuthenticated: boolean, () => void];

    if (isAuthenticated) {
        router.push('/landing');
    }

    useEffect(() => {
        authenticate();
    }, [status]);

    useEffect(() => {
        authenticate();
    }, []);

    return (
        <>
            <StyledContainer>
                <StyledInnerContainer>
                    <StyledLeftSide>
                        {isLogIn ? <LogInForm setIsLogIn={setIsLogIn} /> : <SignUpForm setIsLogIn={setIsLogIn} />}
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

