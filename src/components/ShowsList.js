import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 red;
  transition: 0.3s;
  width:50%;
  height: auto;
  padding: 20px;
  background-color: red;
  border: 2px solid blue;
  margin: 10px auto;

  @media(min-width:885px) {
    width: 300px;
  }
`;

export const ShowList = () => {
  const [shows, setShows] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  // const [pageLimit, setPageLimit] = useState(5)
  const pageLimit = 10

  useEffect(() => {
    fetch(`https://dls-shows-api.herokuapp.com/shows?page=${pageNumber}&limit=${pageLimit}`)
      .then((res) => res.json())
      .then((json) => {
        setShows(json)
      })
  }, [pageNumber, pageLimit])

  console.log(shows)

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const previousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <div>
      <button type="button" onClick={previousPage} disabled={pageNumber === 1}>Previous Page</button>
      <button type="button" onClick={nextPage} disabled={pageNumber === 10}>Next Page</button>
      <CardContainer>
        {shows.map((show) => (
          <Card key={show.show_id}>
            <h1>{show.title}</h1>
            {show.description === '' ? <p /> : <p>{show.description}</p>}
            <button type="button">More details</button>
          </Card>
        ))}
      </CardContainer>

    </div>
  )
}