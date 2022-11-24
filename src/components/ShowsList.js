import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Jambotron } from './Jambotron';

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CardContainer = styled.div`
  display: flex;
  margin: 0 20px;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-evenly;
`;

const Card = styled.div`
  width: 50%;
  height: auto;
  padding: 20px;
  border: 1px solid white;
  margin: 10px auto;

  :hover {
    transition: 0.3s;
  }

  @media (min-width: 885px) {
    width: 400px;
    height: 300px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: red;
  border: none;
  border-radius: 5px;

  :hover {
    background-color: #373737;
    transition: all 0.3s ease-in-out;
  }
`;

export const ShowList = () => {
  const [shows, setShows] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  // const [pageLimit, setPageLimit] = useState(5)
  const pageLimit = 10;

  useEffect(() => {
    fetch(
      `https://project-express-api-hmplolkeya-uc.a.run.app/shows?page=${pageNumber}&limit=${pageLimit}`
    )
      .then((res) => res.json())
      .then((json) => {
        setShows(json);
      });
  }, [pageNumber, pageLimit]);

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const previousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <>
      <Jambotron />
      <MainContent>
        <ButtonContainer>
          <p>
            {' '}
            Page {pageNumber}/{pageLimit}
          </p>
          <Button
            type='button'
            onClick={previousPage}
            disabled={pageNumber === 1}>
            Previous Page
          </Button>
          <Button type='button' onClick={nextPage} disabled={pageNumber === 10}>
            Next Page
          </Button>
        </ButtonContainer>
        <CardContainer>
          {shows.map((show) => (
            <Link key={show.show_id} to={`/shows/${show.show_id}`}>
              <Card key={show.show_id}>
                <h1>{show.title}</h1>
                {show.description === '' ? <p /> : <p>{show.description}</p>}
                <Button type='button'>More details</Button>
              </Card>
            </Link>
          ))}
        </CardContainer>
      </MainContent>
    </>
  );
};
