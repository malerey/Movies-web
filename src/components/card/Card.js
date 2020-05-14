import React from 'react';
import { CardContainer } from './Card.style'

const Card = ({ title, img, subtitle }) => {
    return (
        <CardContainer>
            <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={title} />
            <h3>{title}</h3>
            {
                subtitle &&
                <h4>{subtitle}</h4>
            }
        </CardContainer>
    );
}

export default Card;