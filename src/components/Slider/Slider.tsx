'use client';

import React, { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { default as SlickSlider } from 'react-slick';

import { Testimonial } from './testimonials.data';
import TestimonialCard from '../TestimonialCard/TestimoialCard'
import { StyledContainer, Nav, NextButton, PrevButton } from './Slider.styled';

interface SliderProps {
    testimonials: Testimonial[];
}

interface ButtonProps {
    onClick: () => void;
}

function StyledNextArrow({ onClick }: ButtonProps) {
    return (
        <NextButton onClick={onClick}>
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.7893 14.8206L16.6331 22.9768C16.5481 23.0619 16.4327 23.1096 16.3125 23.1096C16.1923 23.1096 16.0769 23.0619 15.9919 22.9768C15.9069 22.8918 15.8591 22.7765 15.8591 22.6563C15.8591 22.536 15.9069 22.4207 15.9919 22.3357L23.3745 14.9531H4.53125C4.41107 14.9531 4.29582 14.9054 4.21084 14.8204C4.12586 14.7354 4.07812 14.6202 4.07812 14.5C4.07812 14.3798 4.12586 14.2646 4.21084 14.1796C4.29582 14.0946 4.41107 14.0469 4.53125 14.0469H23.3745L15.9919 6.66434C15.9069 6.57932 15.8591 6.464 15.8591 6.34376C15.8591 6.22351 15.9069 6.1082 15.9919 6.02317C16.0769 5.93815 16.1923 5.89038 16.3125 5.89038C16.4327 5.89038 16.5481 5.93815 16.6331 6.02317L24.7893 14.1794C24.8315 14.2215 24.8649 14.2715 24.8877 14.3265C24.9105 14.3815 24.9222 14.4405 24.9222 14.5C24.9222 14.5596 24.9105 14.6185 24.8877 14.6735C24.8649 14.7285 24.8315 14.7785 24.7893 14.8206Z" fill="white" />
            </svg>
        </NextButton>
    );
}

function StyledPrevArrow({ onClick }: ButtonProps) {
    return (
        <PrevButton onClick={onClick}>
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.21066 14.1794L12.3669 6.02316C12.4519 5.93813 12.5673 5.89036 12.6875 5.89036C12.8077 5.89036 12.9231 5.93813 13.0081 6.02316C13.0931 6.10818 13.1409 6.2235 13.1409 6.34374C13.1409 6.46398 13.0931 6.5793 13.0081 6.66433L5.62555 14.0469L24.4688 14.0469C24.5889 14.0469 24.7042 14.0946 24.7892 14.1796C24.8741 14.2646 24.9219 14.3798 24.9219 14.5C24.9219 14.6202 24.8741 14.7354 24.7892 14.8204C24.7042 14.9054 24.5889 14.9531 24.4688 14.9531L5.62555 14.9531L13.0081 22.3357C13.0931 22.4207 13.1409 22.536 13.1409 22.6562C13.1409 22.7765 13.0931 22.8918 13.0081 22.9768C12.9231 23.0619 12.8077 23.1096 12.6875 23.1096C12.5673 23.1096 12.4519 23.0619 12.3669 22.9768L4.21066 14.8206C4.16853 14.7785 4.13511 14.7285 4.11231 14.6735C4.08951 14.6185 4.07777 14.5595 4.07777 14.5C4.07777 14.4404 4.08951 14.3815 4.11231 14.3265C4.13511 14.2715 4.16853 14.2215 4.21066 14.1794Z" fill="#434343" />
            </svg>
        </PrevButton>
    );
}

const Slider: React.FC<SliderProps> = ({ testimonials }) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };

    let sliderRef: SlickSlider = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    return (
        <StyledContainer>
            <SlickSlider ref={(slider: SlickSlider) => {
                sliderRef = slider;
            }} {...settings}>
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </SlickSlider>
            <Nav>
                <StyledPrevArrow onClick={previous} />
                <StyledNextArrow onClick={next} />
            </Nav>
        </StyledContainer>
    )
}

export default Slider; 