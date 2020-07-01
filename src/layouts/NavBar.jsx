import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import logo from '../../static/logo/MWlogo.png';

const OuterNav = styled.nav`
  margin: 1rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 600;
  font-size: 1.2rem;
  align-items: center;

  a {
    color: ${props => props.theme.colors.black.base};
    margin: 0 1.5rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.background.dark};
    }
  }
`;

const StyledImgLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

const NavBar = () => (
  <OuterNav>
    <StyledImgLink to="/">
      <img src={logo} alt="Mia Wong logo" style={{ width: '9%', margin: 0 }} />
    </StyledImgLink>
    <Nav>
      <Link to="/about" activeStyle={{ borderBottom: '2px solid black' }}>
        About
      </Link>
      <Link to="/work" activeStyle={{ borderBottom: '2px solid black' }}>
        Work
      </Link>
    </Nav>
  </OuterNav>
);

export default NavBar;
