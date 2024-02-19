import { useState } from 'react';
import { parseCookies } from 'nookies';
import { useSession } from 'next-auth/react';

const useAuthenticated = () => {
    const { data: session, status } = useSession();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [checkIfAuthenticateCalled, setCheckIfAuthenticateCalled] = useState<boolean>(false);

    const authenticate = async () => {
        if (status == "loading") {
            return;
        }

        if (session) {
            setIsAuthenticated(true);
            return;
        }

        const cookies = parseCookies();
        const token = cookies.token;

        if (!token) {
            setIsAuthenticated(false);
            setCheckIfAuthenticateCalled(true);
            return;
        }

        const validateToken = async () => {
            try {
                const response = await fetch('/api/validateToken', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (response.ok) {
                    setIsAuthenticated(true);
                    setCheckIfAuthenticateCalled(true);
                } else {
                    console.error('Invalid token');
                }
            } catch (error) {
                console.error('Error validating token:', error);
            }
        };

        validateToken();
    }


    return [isAuthenticated, authenticate, checkIfAuthenticateCalled];
};

export default useAuthenticated;
