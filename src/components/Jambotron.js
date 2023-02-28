import React from 'react';
import styled from 'styled-components';
import Image from '../img/b.png';

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  overflow: hidden;
`;

export const Jambotron = () => {
  return (
    <div>
      <Img src={Image} alt="movie-banner" />
    </div>
  );
};
