import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: red;
  border:none;
  border-radius: 5px;
  margin-left: 40px;

  :hover {
    background-color:#373737;
    transition:all 0.3s ease-in-out;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  width: 300px;
`;

const SingleShowContainer = styled.div`
  width: 80%;
  padding: 20px;
  border: 1px solid white;
  margin: 20px auto;

  @media(min-width:885px) {
    width: 700px;
    height: auto;
  }
`;

export const Documentation = () => {
  return (
    <>
      <div>
        <Link to="/shows/">
          <ButtonContainer>
            <Button type="button">Back to HOME</Button>
          </ButtonContainer>
        </Link>
        <Wrapper>
          <SingleShowContainer>
            <h1>Some info comes soon :)</h1>
          </SingleShowContainer>
        </Wrapper>

      </div>
    </>
  )
}