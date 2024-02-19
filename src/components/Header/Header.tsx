import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { destroyCookie } from 'nookies';
import { useSession, signOut } from "next-auth/react";

import { StyledHeader, LogOutButton, HeaderContainer } from './Header.styled';
import useAuthenticated from '@/hooks/useAuthenticated';

export default function Header() {
    const { data: session, status } = useSession(); // google session
    const [isAuthenticated, authenticate] = useAuthenticated() as [isAuthenticated: boolean, () => void];;
    const router = useRouter();

    const handleSignOut = async () => {
        if (session) {
            signOut({ callbackUrl: '/' })
        } else {
            handleTokenLogout();
        }
    };

    const handleTokenLogout = () => {
        destroyCookie(null, 'token');
        router.push('/');
    };

    // useEffect(() => {
    //     authenticate(status);
    // }, [status]);

    useEffect(() => {
        authenticate();
    });

    return (
        <StyledHeader>
            <HeaderContainer>
                AI Ignition
                {(session || isAuthenticated) ? (<LogOutButton onClick={handleSignOut}>
                    Log out
                </LogOutButton>) : null}
            </HeaderContainer>
        </StyledHeader>
    )
}
