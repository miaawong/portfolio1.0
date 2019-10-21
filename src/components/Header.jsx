import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Wrapper = styled.header`
  background: ${props => props.theme.gradient.leftToRight};
  height: 40vh;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 400px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 375px;
  }
  position: relative;
  overflow: hidden;
`;

const Text = styled.div`
  font-weight: 800;
  font-size: 50px;
  color: ${props => props.theme.colors.white.base};
  z-index: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 3rem 2rem;
  align-items: center;
  h1 {
    text-align: center;
    font-weight: 800;
    font-size: 50px;
  }
  a {
    display: inline-block;
    text-decoration: none;
    padding: 5px 50px;
    color: black;
    border-radius: 10px;
    &:hover {
      background-color: ${props => props.theme.colors.white.base};
    }
  }
`;

const Subtitle = styled.p`
  max-width: 650px;
  color: ${props => props.theme.colors.white.light};
  font-weight: ${props => props.theme.fontWeight.body};
  font-size: 1.2rem;
`;

const Header = ({ children, title, date, cover }) => (
  <Wrapper>
    <Img fluid={cover || {} || [] || ''} />
    <Text>
      <h1>{title}</h1>
      <h3>{date}</h3>

      {children && <Subtitle>{children}</Subtitle>}
    </Text>
  </Wrapper>
);

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

Header.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
};
