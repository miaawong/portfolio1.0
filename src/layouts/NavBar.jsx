import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/mia.png';
import resume from '../../resume/miawong.pdf';
import { FaGithub } from 'react-icons/fa';

const Nav = styled.nav`
  height: 4vh;
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

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <img src={logo} alt="Gatsby Logo" />
    </StyledLink>
    <Nav>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
    </Nav>
  </Headroom>
);

export default NavBar;
