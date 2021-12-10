import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import Lottie from 'react-lottie';
import animationData from '../animations/70051-red-loading-kevin.json';
// this comp will show details about the shows, link will go from showList comp

const Div = styled.div`
  background: black;
  height: 80vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  /* background-size: cover; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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

export const ShowDetails = () => {
  const { showID } = useParams();
  const [show, setShow] = useState([]);
  const [loading, setLoading] = useState(true)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  console.log(showID)

  useEffect(() => {
    fetch(`https://dls-shows-api.herokuapp.com/shows/id/${showID}`)
      .then((res) => res.json())
      .then((json) => {
        setShow(json.response)
      })
      .finally(() => setLoading(false))
  }, [showID])

  // add loading

  return (
    <>
      {loading && <Div><Lottie options={defaultOptions} height={200} width={400} /></Div>}
      <div>
        <Link to="/shows/">
          <ButtonContainer>
            <Button type="button">Back to HOME</Button>
          </ButtonContainer>
        </Link>
        <Wrapper>
          <SingleShowContainer>
            <h1>{show.title}</h1>
            <p>Cast: {show.cast}</p>
            <p>Country: {show.country}</p>
            <p>Description: {show.description}</p>
            <p>Realese year: {show.release_year}</p>
            <p>Type: {show.type}</p>
          </SingleShowContainer>
        </Wrapper>

      </div>
    </>
  )
}