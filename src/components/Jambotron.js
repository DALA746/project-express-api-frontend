import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 400px;
  position: relative;
  text-align: center;
  background: rgb(180,58,159);
  background: linear-gradient(90deg, rgba(180,58,159,1) 0%, rgba(252,75,69,1) 57%, rgba(252,201,69,1) 91%);
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 50px;
`;

export const Jambotron = () => {
  return (
    <Container>
      <Text>Create wonderful webpages with our API!</Text>
    </Container>
  )
}