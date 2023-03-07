/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TbMovie } from 'react-icons/tb';
import { BsDisplay } from 'react-icons/bs';
import { Loading } from './Loading';
import {
  Button,
  CardContainer,
  MainContent,
  SearchContainer,
  Card,
  Container,
  ButtonContainer,
  Wrapper
} from '../styles/style';
import { fetchData } from '../utils/fetch';
import { Jambotron } from './Jambotron';

export const ShowList = () => {
  const [shows, setShows] = useState([{}]);
  const [title, setTitle] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(6);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    setPageLimit(6);
    const getData = async () => {
      const data = await fetchData(
        `/shows?page=${pageNumber}&limit=${pageLimit}`
      );
      setShows(data);
    };
    getData();
  }, [pageNumber, pageLimit]);

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const previousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const handleSubmit = (event) => {
    if (title === '') {
      alert('Enter your search word!');
    } else {
      setSearch(true);
      event.preventDefault();
      const getData = async () => {
        const data = await fetchData(`/shows?title=${title}`);
        setShows(data);
        setLoading(true);
        setTimeout(() => setLoading(false), 1000);
      };
      getData();
    }
  };

  return (
    <>
      <Jambotron />
      <MainContent>
        <Wrapper>
          <h1>Our Movies & TV Series</h1>
          <SearchContainer>
            <input
              type="text"
              value={title}
              placeholder="Search by title..."
              onChange={(event) => setTitle(event.target.value)}
            />

            <Button border type="button" onClick={handleSubmit}>
              Search
            </Button>
          </SearchContainer>
          <Wrapper>
            {loading && <Loading />}
            {/* {search && shows.success && (
              <p>Found shows: {shows.response?.length}</p>
            )} */}
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
                      {show.description === '' ? (
                        <p />
                      ) : (
                        <p>{show.description}</p>
                      )}
                    </Card>
                  </Link>
                ))
              ) : (
                <Container>
                  <p>No results</p>
                </Container>
              )}
            </CardContainer>
          </Wrapper>
          {!search && (
            <ButtonContainer>
              <Button
                type="button"
                onClick={previousPage}
                disabled={pageNumber === 1}>
                Previous Page
              </Button>
              <Button
                type="button"
                onClick={nextPage}
                disabled={pageNumber === pageLimit}>
                Next Page
              </Button>
            </ButtonContainer>
          )}
        </Wrapper>
      </MainContent>
    </>
  );
};
