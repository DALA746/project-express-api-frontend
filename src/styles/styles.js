import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: var(--white);
  background-color: var(--orange);
  border: none;

  :hover {
    background-color: #373737;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 60px 20px;
  max-width: 1200px;
  width: 100%;
  position: relative;
`;

export const Card = styled.div`
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
  gap: 10px;
`;

export const SearchContainer = styled.div`
  padding: 60px 20px;
  max-width: 1200px;
  width: 100%;

  input {
    width: 100%;
    padding: 10px;
    max-width: 300px;
    border: none;
  }
`;

export const Container = styled.div`
  height: 400px;
`;
