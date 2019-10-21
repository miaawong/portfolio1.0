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
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    width: 100%;
    font-size: 1rem;
  }
  a {
    color: ${props => props.theme.colors.black.base};
    margin: 0 1.5rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.background.dark};
    }
    @media (max-width: ${props => props.theme.breakpoints.s}) {
      margin: 0 5px;
    }
    @media (max-width: ${props => props.theme.breakpoints.xs}) {
      margin: 0 5px;
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
      <a href={resume} download>
        Resume
      </a>
      <a href="https://github.com/miaawong">
        <FaGithub size="50" />
      </a>
    </Nav>
  </Headroom>
);

export default NavBar;
