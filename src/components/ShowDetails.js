import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { TbMovie } from 'react-icons/tb';
import { BsDisplay } from 'react-icons/bs';
import { fetchData } from '../utils/fetch';

// import { fetchData } from 'utils/fetch';

import { Loading } from './Loading';
import { Button, Card } from '../styles/style';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;

  h2 {
    text-align: center;
  }
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

const OtherShowsWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  max-width: 1200px;
  margin: 20px;

  @media (min-width: 885px) {
    flex-direction: row;
  }
`;

export const ShowDetails = () => {
  const { showID } = useParams();
  const [show, setShow] = useState([]);
  const [otherShows, setOtherShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData('/shows');
      const random = data.response
        .sort(() => Math.random() - Math.random())
        .slice(0, 3);
      console.log(random);
      setOtherShows(random);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(`/shows/id/${showID}`);
      setShow(data.response);
      setLoading(true);
      setTimeout(() => setLoading(false), 1000);
    };
    getData();
  }, [showID]);

  return (
    <>
      <div>
        <Link to="/shows/">
          <ButtonContainer>
            <Button type="button">Back to HOME</Button>
          </ButtonContainer>
        </Link>
        {loading && <Loading />}
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
          <h2>Interested in some other shows?</h2>
          <OtherShowsWrapper>
            {otherShows.map((item) => (
              <Link key={item.show_id} to={`/shows/${item.show_id}`}>
                <Card maxwidth key={item.show_id}>
                  <div>
                    {item.type === 'Movie' ? (
                      <TbMovie className="icons" />
                    ) : (
                      <BsDisplay className="icons" />
                    )}
                  </div>
                  <h3>{item.title}</h3>
                  {item.description === '' ? <p /> : <p>{item.description}</p>}
                </Card>
              </Link>
            ))}
          </OtherShowsWrapper>
        </Wrapper>
      </div>
    </>
  );
};
