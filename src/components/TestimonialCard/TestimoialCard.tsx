import React from 'react';
import { Testimonial } from '../Slider/testimonials.data';
import { StyledContainer, AvatarContainer, AvatarPhoto, UserName, TestimonialText } from './TestimoialCard.styled';

interface Props {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<Props> = ({ testimonial }) => {
    return (
        <StyledContainer>
            <AvatarContainer>
                <AvatarPhoto src={testimonial.avatarUrl} alt={`Photo of ${testimonial.userName}`} />
            </AvatarContainer>
            <UserName>{testimonial.userName}</UserName>
            <TestimonialText>{testimonial.text}</TestimonialText>
        </StyledContainer>
    )
}

export default TestimonialCard; 