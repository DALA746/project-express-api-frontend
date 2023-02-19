/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TbMovie } from 'react-icons/tb';
import { BsDisplay } from 'react-icons/bs';

import { Jambotron } from './Jambotron';

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 60px 20px;
  max-width: 1200px;
  width: 100%;
`;

const Card = styled.div`
  background-color: var(--pink);
  border-radius: 10px;
  padding: 20px;
  height: 300px;
  max-width: 400px;

  div {
    display: flex;
    justify-content: end;
  }

  :hover {
    background-color: var(--orange);
    color: var(--dark_blue);
    transition: 0.6s ease-out;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
  gap: 10px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
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
  const [title, setTitle] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  // const [pageLimit, setPageLimit] = useState(5)
  const pageLimit = 10;

  useEffect(() => {
    fetch(
      `https://project-express-api-production.up.railway.app/shows?page=${pageNumber}&limit=${pageLimit}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'DATA');
        setShows(data);
      });
  }, [pageNumber, pageLimit]);

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const previousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      `https://project-express-api-production.up.railway.app/shows?title=${title}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'DATA FROM SEARCH');
        setShows(data);
        setTitle('');
      })
      .catch(() => {
        console.error();
        setTitle('');
      });
  };

  console.log(shows, 'this is shows');

  return (
    <>
      <Jambotron />

      <MainContent>
        <h1>Our Movies & TV Series</h1>
        <SearchContainer>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <Button type="button" onClick={handleSubmit}>
            Search by title
          </Button>
        </SearchContainer>

        <CardContainer>
          {shows.success ? (
            shows.response.map((show) => (
              <Link key={show.show_id} to={`/shows/${show.show_id}`}>
                <Card key={show.show_id}>
                  <div>
                    {show.type === 'Movie' ? (
                      <TbMovie className="icons" />
                    ) : (
                      <BsDisplay className="icons" />
                    )}
                  </div>
                  <h2>{show.title}</h2>
                  {show.description === '' ? <p /> : <p>{show.description}</p>}
                </Card>
              </Link>
            ))
          ) : (
            <p>No results</p>
          )}
        </CardContainer>
        <ButtonContainer>
          <p>
            {' '}
            Page {pageNumber}/{pageLimit}
          </p>
          <Button
            type="button"
            onClick={previousPage}
            disabled={pageNumber === 1}>
            Previous Page
          </Button>
          <Button type="button" onClick={nextPage} disabled={pageNumber === 10}>
            Next Page
          </Button>
        </ButtonContainer>
      </MainContent>
    </>
  );
};
