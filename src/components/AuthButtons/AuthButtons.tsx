import React from "react";
import { StyledButton } from './AuthButtons.styled';
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image';

import facebookIcon from '@/../public/facebook.svg';
import googleIcon from '@/../public/google.svg';
import twitterIcon from '@/../public/twitter.svg';

const AuthButtons = () => {
    const { data: session } = useSession();

    return (
        <>
            <StyledButton>
                <Image src={facebookIcon} width={24} height={24} alt='facebook' />
                Continue with Facebook
            </StyledButton>

            {session ? (<StyledButton onClick={() => signOut()}>
                <Image src={googleIcon} width={24} height={24} alt='facebook' />
                Exit with Google
            </StyledButton>) : (
                <StyledButton onClick={() => signIn('google', { callbackUrl: '/landing' })}>
                    <Image src={googleIcon} width={24} height={24} alt='facebook' />
                    Continue with Google
                </StyledButton>)
            }

            <StyledButton>
                <Image src={twitterIcon} width={24} height={24} alt='facebook' />
                Continue with Twitter
            </StyledButton>
        </>
    )
}

export default AuthButtons;