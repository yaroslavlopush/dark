import { setCookie } from 'nookies';

import { LoginForm } from '../components/LogInForm/LogInForm';

export async function logIn(form: LoginForm) {
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });

        if (!response.ok) {
            throw new Error('Failed to login');
        }

        const data = await response.json();

        // Store the received token securely in a cookie
        setCookie(null, 'token', data.token, {
            maxAge: 3600, // Token expiration time in seconds (1 hour in this example)
            path: '/', // Cookie path
            sameSite: 'strict', // Restrict cookie to same-site requests
            //secure: process.env.NODE_ENV === 'production', // Only send cookie over HTTPS in production
            //httpOnly: true // Prevent client-side JavaScript from accessing the cookie
        });

        return true;
    } catch (error) {
        console.error('Error logging in:', error);
        return false;
    }
}