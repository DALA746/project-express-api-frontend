import React from 'react';
import { Link } from 'react-router-dom';
import { Header, InlineDiv, NavTitle, ListItem, Nav } from 'styles/style';

import { TbMovie } from 'react-icons/tb';

export const Navbar = () => {
  return (
    <Header>
      <Link to="/">
        <InlineDiv>
          <TbMovie className="icons" />
          <NavTitle>MovieTime API</NavTitle>
        </InlineDiv>
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
  );
};
