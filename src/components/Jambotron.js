import React from 'react';
import { JambotronImg } from 'styles/style';
import Image from '../img/banner.png';

export const Jambotron = () => {
  return (
    <div>
      <JambotronImg src={Image} alt="movie-banner" />
    </div>
  );
};
