import React, { useState } from 'react';
import { StyledContainer, StyledH1, StyledSubHeader, StyledForm, StyledSubmitButton, StyledLine, StyledTermsText, StyledBottomLogIn } from './LogInForm.styled';
import { Input } from '../Input/Input';
import AuthButtons from '../AuthButtons/AuthButtons';
import { useRouter } from 'next/router';
import { logIn } from '../../services/login.service';

export interface LoginForm {
    email: string;
    password: string;
}

interface LogInFormProps {
    setIsLogIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogInForm: React.FC<LogInFormProps> = ({ setIsLogIn }) => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const isFormValid = () => {
        let valid = true;
        const newErrors = {
            email: '',
            password: ''
        };

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

        if (!isFormValid()) {
            return;
        }

        const isLoginSuccessful = await logIn(formData);
        if (isLoginSuccessful) {
            router.push('/landing');
        } else {
            alert('Login failed!');
        }
    };

    return (
        <StyledContainer>
            <StyledH1>
                Log In
            </StyledH1>
            <StyledSubHeader>Do not have an account? <button onClick={() => setIsLogIn(false)}>Sign Up</button></StyledSubHeader>

            <AuthButtons />

            <StyledLine>Or</StyledLine>

            <StyledForm onSubmit={handleSubmit}>
                <Input type="email" name="email" error={errors.email} value={formData.email} onChange={handleChange} label='Email' placeholder='Jane@gmail.com' />
                <Input type="password" name="password" error={errors.password} value={formData.password} onChange={handleChange} label='Password' placeholder='********' />

                <StyledSubmitButton type="submit">
                    Log In
                </StyledSubmitButton>

            </StyledForm>

            <StyledBottomLogIn>Do not have an account? <button onClick={() => setIsLogIn(false)}>Sign Up</button></StyledBottomLogIn>
        </StyledContainer>
    );
}

export default LogInForm;