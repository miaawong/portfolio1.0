import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.header`
  background: ${props => props.theme.gradient.leftToRight};
  height: 400px;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    height: 500px;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 600px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 600px;
  }
  position: relative;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  text-align: center;
  align-items: center;
  padding: 0;
`;
const TitleDesc = styled.div`
  /* font-weight: 700; */
  color: ${props => props.theme.colors.white.base};
  float: left;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    width: 100%;
    padding-top: 50px;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 100%;
    padding-top: 50px;
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 25px;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 100%;
    padding-top: 50px;
  }
`;
const Tech = styled.div`
  float: right;
  width: 50%;
  text-align: center;
  margin: 0 auto;
  a {
    display: inline-block;
    text-decoration: none;
    padding: 5px 25px;
    margin: 0 10px;
    color: ${props => props.theme.colors.black.base};
    background-color: ${props => props.theme.colors.white.base};
    border-radius: 10px;
    &:hover {
      border-radius: 10px;
      background-color: ${props => props.theme.colors.background.dark};
      color: ${props => props.theme.colors.white.base};
      transition-duration: ${props => props.theme.transitions.boom.duration};
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 100%;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 100%;
  }
`;

const Subtitle = styled.p`
  max-width: 100%;
  color: ${props => props.theme.colors.white.light};
  font-weight: ${props => props.theme.fontWeight.body};
  font-size: 1.2rem;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 100%;
    font-size: 1rem;
  }
`;

const PostHeader = ({ children, title, desc }) => (
  <Wrapper>
    <TitleDesc>
      <h1>{title}</h1>
      <h2>{desc}</h2>
    </TitleDesc>
    <Tech>{children && <Subtitle>{children}</Subtitle>}</Tech>
  </Wrapper>
);

export default PostHeader;

PostHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

PostHeader.defaultProps = {
  children: false,
  title: false,
};
