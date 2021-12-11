import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.header`
  display:flex;
  justify-content: space-between;
  clear:both;
  overflow:auto;
  padding: 0 40px;
`

const Nav = styled.nav`
  display:none;

  @media(min-width:885px) {
    float:right;
    display: inline-block;
  }
`;

const Title = styled.h1`
  float: left;
`;

const ListItem = styled.li`
  display: inline-block; 
  padding: 20px;
  font-size:20px; 

  :hover {
    color:#fc4b45;
    transition:all 0.3s ease-in-out;
  }
`;

export const Navbar = () => {
  return (
    <Header>
      <Link to="/">
        <Title>DL:s shows API!</Title>
      </Link>
      <Nav>
        <ul>
          <Link to="/">
            <ListItem>Home</ListItem>
          </Link>
          <Link to="/documentation">
            <ListItem>Documentation API</ListItem>
          </Link>
        </ul>
      </Nav>
    </Header>
  )
}