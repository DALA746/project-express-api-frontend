import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { TbMovie } from 'react-icons/tb';
import { BsDisplay } from 'react-icons/bs';

import { fetchData } from 'utils/fetch';

import { Loading } from './Loading';
import { Button, Card } from '../styles/style';

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

  @media (min-width: 885px) {
    width: 700px;
    height: auto;
  }
`;

export const ShowDetails = () => {
  const { showID } = useParams();
  const [show, setShow] = useState([]);
  const [otherShows, setOtherShows] = useState([]);
  const [loading, setLoading] = useState(true);

  const { type } = show;

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

  const getData = async () => {
    const data = await fetchData(`/shows?type=${type}`);
    setOtherShows(data.response.slice(0, 3));
  };

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
                <b>Cast:</b> {show.cast}
              </p>
            )}
            {show.country === '' ? (
              <p />
            ) : (
              <p>
                <b>Country:</b> {show.country}
              </p>
            )}
            {show.description === '' ? <p /> : <p>{show.description}</p>}
            <p>
              <b>Rating:</b> {show.rating}
            </p>
            <p>
              <b>Realese year:</b> {show.release_year}
            </p>
            <p>
              <b>Type:</b> {show.type}
            </p>
          </SingleShowContainer>
          {/* {otherShows.map((item) => (
            <Link key={item.show_id} to={`/shows/${item.show_id}`}>
              <Card key={item.show_id}>
                <div>
                  {item.type === 'Movie' ? (
                    <TbMovie className="icons" />
                  ) : (
                    <BsDisplay className="icons" />
                  )}
                </div>
                <h2>{item.title}</h2>
                {item.description === '' ? <p /> : <p>{item.description}</p>}
              </Card>
            </Link>
          ))} */}
        </Wrapper>
      </div>
    </>
  );
};
