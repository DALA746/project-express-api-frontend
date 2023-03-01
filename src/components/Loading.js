import React from 'react';
import Lottie from 'react-lottie';
import { LoadingContainer } from 'styles/style';
import animationData from '../animations/70051-red-loading-kevin.json';

export const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <LoadingContainer>
      <Lottie options={defaultOptions} height={200} width={400} />
    </LoadingContainer>
  );
};
