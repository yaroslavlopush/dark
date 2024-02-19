import { setCookie } from 'nookies';

import { ISignUpForm } from "@/components/SignUpForm/SignUpForm";

export async function signUp(form: ISignUpForm) {
    try {
        const response = await fetch('/api/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        if (!response.ok) {
            throw new Error('Failed to insert data');
        }
        await response.json();
        return true;
    } catch (error) {
        console.error('Error inserting data:', error);
        return false;
    }
}