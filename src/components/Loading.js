import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from '../animations/70051-red-loading-kevin.json';

const Div = styled.div`
  background: var(--dark_blue);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
    <Div>
      <Lottie options={defaultOptions} height={200} width={400} />
    </Div>
  );
};
