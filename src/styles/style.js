import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  clear: both;
  overflow: auto;
  padding: 0 40px;
`;

export const Nav = styled.nav`
  display: none;

  @media (min-width: 885px) {
    float: right;
    display: inline-block;
  }
`;

export const NavTitle = styled.h1`
  float: left;
  font-size: 29px;
`;

export const InlineDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ListItem = styled.li`
  display: inline-block;
  padding: 20px;
  font-size: 20px;

  :hover {
    color: var(--orange);
    transition: all 0.3s ease-in-out;
  }
`;

export const Button = styled.button`
  padding: 10px;
  color: var(--white);
  background-color: var(--orange);
  border: none;
  border-radius: ${(props) => (props.border ? '0 10px 10px 0' : '10px')};

  :disabled {
    opacity: 0.4;
  }

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
  grid-gap: 40px;
  width: 100%;
  position: relative;
`;

export const Card = styled.div`
  background-color: var(--pink);
  border-radius: 10px;
  padding: 20px;
  height: 300px;

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
  width: 100%;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    padding: 10px;
    max-width: 300px;
    border: none;
    border-radius: 10px 0 0 10px;
  }
`;

export const Container = styled.div`
  height: 400px;
`;

export const Wrapper = styled.div`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
`;

export const LoadingContainer = styled.div`
  background: var(--dark_blue);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const JambotronImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  overflow: hidden;
`;
