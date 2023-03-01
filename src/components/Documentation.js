import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/style';
import jsonImage from '../img/json.png';

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

const Title = styled.p`
  background: ${(props) => (props.bgWhite ? 'var(--white)' : 'var(--pink)')};
  color: ${(props) => (props.bgWhite ? 'var(--dark-blue)' : 'var(--white)')};
  padding: 10px 10px;
  margin: 0;
`;

const TitleWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

const WrapperTitles = styled.div`
  display: flex;
  flex-direction: column;
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
            <h1>Documentation API</h1>
            <p>
              Our API provides you with over 1000 movies and tv-shows titles. By
              implementing pagination, search functionality by title, and
              different sorting possibility by quiry, we hope this API will be
              of great use in your projects. This frontend project is a small
              demonstration of some of the features this API provides.
            </p>
            <Title>BASE URL:</Title>
            <Title bgWhite>
              https://project-express-api-production.up.railway.app
            </Title>
            <h3>Endpoints & queries:</h3>
            <WrapperTitles>
              <TitleWrapper>
                <Title>GET all shows:</Title>
                <Title bgWhite>/shows</Title>
              </TitleWrapper>
              <p>Here is the response you get back:</p>
              <div>
                <img src={jsonImage} alt="api-demo" width="100%" />
              </div>
              <TitleWrapper>
                <Title>GET shows by query:</Title>
                <Title bgWhite> /shows?title=:value</Title>
                <p>
                  This query return a JSON object based on of the value of
                  quiery you have specified. Replace your query with different
                  choices such as <b>title</b>, <b>category</b>, <b>year</b> and{' '}
                  <b>country</b>.
                </p>
              </TitleWrapper>
              <TitleWrapper>
                <Title>GET by id:</Title>
                <Title bgWhite>/shows/id/:id</Title>
                <p>Return an object based on id you have specified.</p>
              </TitleWrapper>
              <h3>Pagination:</h3>
              <TitleWrapper>
                <Title>GET a specific amount of items:</Title>
                <Title bgWhite>/shows?page=:value&limit=:value</Title>
                <p>
                  Return an array depending on the value of page and limit quiry
                  you have provided.
                </p>
              </TitleWrapper>
            </WrapperTitles>
          </SingleShowContainer>
        </Wrapper>
      </div>
    </>
  );
};
