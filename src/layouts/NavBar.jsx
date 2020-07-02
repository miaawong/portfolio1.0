import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { device } from '../../config/theme';
import logo from '../../static/logo/MWlogo.png';

const OuterNav = styled.nav`
  width: 90%;
  margin: 1rem auto;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  height: 3rem;
  width: 11rem;
  display: flex;
  justify-content: space-between;
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

const Logo = styled.img`
  width: 3rem;
  margin: 0;
`;

const NavBar = () => (
  <OuterNav>
    <StyledImgLink to="/">
      <Logo src={logo} alt="Mia Wong logo" />
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
