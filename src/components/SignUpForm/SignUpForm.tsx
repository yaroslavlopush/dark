import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { StyledContainer, StyledButton, StyledSubmitButton, StyledLine } from './SignUpForm.styled';
import { Input } from '../Input/Input';
import { Checkbox } from '../Checkbox/Checkbox';
import { useSession, signIn, signOut } from "next-auth/react"

const HomePage = () => {
    const { data: session } = useSession();

    return (
        <>
            <StyledContainer>
                <h1>
                    Create an account
                </h1>
                <div>Already have an account? <button>Log in</button></div>

                <StyledButton>
                    Continue with Facebook
                </StyledButton>

                {session ? (<StyledButton onClick={() => signOut()}>
                    Exit with Google
                </StyledButton>) : (<StyledButton onClick={() => signIn()}>
                    Continue with Google
                </StyledButton>)
                }

                <StyledButton>
                    Continue with Twitter
                </StyledButton>

                <StyledLine>Or</StyledLine>
                
                <form>
                    <Input label='First name' placeholder='Jane' type='text'/>
                    <Input label='Last name' placeholder='Doe' type='text'/> 
                    <Input label='Email name' placeholder='Jane@gmail.com' type='email'/>
                    <Input label='Password name' placeholder='********' type='password'/>

                    <Checkbox label='Subscribe to our monthly newsletter' />
                </form>

                <div>
                    By clicking below you agree to our <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a>
                </div>

                <StyledSubmitButton>
                        Sign Up
                </StyledSubmitButton>


            </StyledContainer>
        </>
    )
}

export default HomePage;