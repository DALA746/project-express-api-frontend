import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import Lottie from 'react-lottie';
import animationData from '../animations/70051-red-loading-kevin.json';
// this comp will show details about the shows, link will go from showList comp

const Div = styled.div`
  background: black;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: red;
  border: none;
  border-radius: 5px;
  margin-left: 40px;

  :hover {
    background-color: #373737;
    transition: all 0.3s ease-in-out;
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

  @media (min-width: 885px) {
    width: 700px;
    height: auto;
  }
`;

export const ShowDetails = () => {
  const { showID } = useParams();
  const [show, setShow] = useState([]);
  const [loading, setLoading] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  console.log(showID);

  useEffect(() => {
    fetch(
      `https://project-express-api-production.up.railway.app/shows/id/${showID}`
    )
      .then((res) => res.json())
      .then((json) => {
        setShow(json.response);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, [showID]);

  // add loading

  return (
    <>
      {loading && (
        <Div>
          <Lottie options={defaultOptions} height={200} width={400} />
        </Div>
      )}
      <div>
        <Link to="/shows/">
          <ButtonContainer>
            <Button type="button">Back to HOME</Button>
          </ButtonContainer>
        </Link>
        <Wrapper>
          <SingleShowContainer>
            <h1>{show.title}</h1>
            {show.cast === '' ? <p /> : <p>{show.cast}</p>}
            {show.country === '' ? <p /> : <p>{show.country}</p>}
            {show.description === '' ? <p /> : <p>{show.description}</p>}
            <p>Realese year: {show.release_year}</p>
            <p>Type: {show.type}</p>
          </SingleShowContainer>
        </Wrapper>
      </div>
    </>
  );
};
