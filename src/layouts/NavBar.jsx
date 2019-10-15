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
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.background.dark};
    }
  }
`;
const Image = styled.img`
  margin: 0;
  height: 4vh;
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <Image src={logo} alt="miawong logo" />
    <Nav>
      <Link to="/">Home</Link>
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
