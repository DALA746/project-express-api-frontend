import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { TbMovie } from 'react-icons/tb';
import { BsDisplay } from 'react-icons/bs';

import { Loading } from './Loading';
import { Button } from '../styles/Showlist';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  width: 300px;
  padding: 0 40px;
`;

const SingleShowContainer = styled.div`
  width: 80%;
  padding: 20px;
  border: 1px solid var(--white);
  margin: 20px auto;
  background-color: var(--orange);
  color: var(--dark_blue);
  border-radius: 10px;

  div {
    display: flex;
    justify-content: end;
  }

  span {
    font-weight: bold;
  }

  @media (min-width: 885px) {
    width: 700px;
    height: auto;
  }
`;

export const ShowDetails = () => {
  const { showID } = useParams();
  const [show, setShow] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      {loading && <Loading />}
      <div>
        <Link to="/shows/">
          <ButtonContainer>
            <Button type="button">Back to HOME</Button>
          </ButtonContainer>
        </Link>
        <Wrapper>
          <SingleShowContainer>
            <div>
              {show.type === 'Movie' ? (
                <TbMovie className="icons" />
              ) : (
                <BsDisplay className="icons" />
              )}
            </div>
            <h1>{show.title}</h1>
            {show.cast === '' ? (
              <p />
            ) : (
              <p>
                <span>Cast:</span> {show.cast}
              </p>
            )}
            {show.country === '' ? (
              <p />
            ) : (
              <p>
                <span>Country:</span> {show.country}
              </p>
            )}
            {show.description === '' ? <p /> : <p>{show.description}</p>}
            <p>
              <span>Rating:</span> {show.rating}
            </p>
            <p>
              <span>Realese year:</span> {show.release_year}
            </p>
            <p>
              <span>Type:</span> {show.type}
            </p>
          </SingleShowContainer>
        </Wrapper>
      </div>
    </>
  );
};
