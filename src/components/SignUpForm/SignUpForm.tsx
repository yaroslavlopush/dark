import React, { useState, useEffect } from 'react';
import { StyledContainer, StyledH1, StyledSubHeader, StyledForm, StyledSubmitButton, StyledLine, StyledTermsText, StyledBottomLogIn } from './SignUpForm.styled';
import { Input } from '../Input/Input';
import { Checkbox } from '../Checkbox/Checkbox';
import AuthButtons from '../AuthButtons/AuthButtons';
import { useRouter } from 'next/router';
import { logIn } from '@/services/login.service';
import { signUp } from '@/services/signup.service';

export interface ISignUpForm {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

interface SignUpFormProps {
    setIsLogIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ setIsLogIn }) => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    });

    const isFormValid = () => {
        let valid = true;
        const newErrors = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        };

        if (formData.first_name.trim() === '') {
            newErrors.first_name = 'First Name is required';
            valid = false;
        }

        if (formData.last_name.trim() === '') {
            newErrors.last_name = 'Last Name is required';
            valid = false;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
            valid = false;
        }

        if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (isFormValid()) {
            const isSignupSuccessful = await signUp(formData);
            if (isSignupSuccessful) {
                const isLoginSuccessful = await logIn(formData);
                if (isLoginSuccessful) {
                    router.push('/landing');
                } else {
                    alert('Login failed!');
                }
            } else {
                alert('Signup failed!');
            }
        }
    };

    return (
        <>
            <StyledContainer>
                <StyledH1>
                    Create an account
                </StyledH1>
                <StyledSubHeader>Already have an account? <button onClick={() => setIsLogIn(true)}>Log in</button></StyledSubHeader>

                <AuthButtons />

                <StyledLine>Or</StyledLine>

                <StyledForm onSubmit={handleSubmit}>
                    <Input small={true} type="text" name="first_name" error={errors.first_name} value={formData.first_name} onChange={handleChange} label='First Name' placeholder='Jane' />
                    <Input small={true} type="text" name="last_name" error={errors.last_name} value={formData.last_name} onChange={handleChange} label='Last Name' placeholder='Doe' />
                    <Input type="email" name="email" error={errors.email} value={formData.email} onChange={handleChange} label='Email' placeholder='Jane@gmail.com' />
                    <Input type="password" name="password" error={errors.password} value={formData.password} onChange={handleChange} label='Password' placeholder='********' />

                    <Checkbox label='Subscribe to our monthly newsletter' />

                    <StyledTermsText>
                        By clicking below you agree to our <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a>
                    </StyledTermsText>

                    <StyledSubmitButton type="submit">
                        Sign Up
                    </StyledSubmitButton>

                </StyledForm>

                <StyledBottomLogIn>Already have an account? <button onClick={() => setIsLogIn(true)}>Log in</button></StyledBottomLogIn>


            </StyledContainer>
        </>
    )
}

export default SignUpForm;