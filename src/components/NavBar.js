import React from 'react'
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
      <Title>DL:s shows API!</Title>
      <Nav>
        <ul>
          <ListItem>Home</ListItem>
          <ListItem>Documentation API</ListItem>
          <ListItem>TV Shows</ListItem>
          <ListItem>Movies</ListItem>
        </ul>
      </Nav>
    </Header>
  )
}