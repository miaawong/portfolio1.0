import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import theme from '../../config/theme';
import { device } from '../../config/theme';
import { StyledButton, ButtonFrame } from '../components/StyledButton';

const Wrapper = styled.article`
  height: 100%;
  margin-bottom: 1rem;
  position: relative;
  z-index: 100;
  border-radius: ${props => props.theme.borderRadius.default};
  box-shadow: ${props => props.theme.shadow.feature.small.default};
  transition: ${props => props.theme.transitions.boom.transition};
  height: 17rem;
  width: 50%;
  &:hover {
    box-shadow: ${props => props.theme.shadow.feature.small.hover};
    transform: scale(1.04);
  }
  @media ${device.s} {
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  z-index: 3;
  border-radius: ${props => props.theme.borderRadius.default};
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.7) 80%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: -10;
    border-radius: ${theme.borderRadius.default};
    transition: opacity ${theme.transitions.default.duration};
  }
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  overflow: hidden;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius.default};
  img {
    border-radius: ${props => props.theme.borderRadius.default};
  }
  > div {
    position: static !important;
  }
  > div > div {
    position: static !important;
  }
`;

const Info = styled.div`
  font-family: ${props => props.theme.fontFamily.body};
  color: ${props => props.theme.colors.white.light};
  margin: 0 1rem 1.25rem 1.25rem;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Title = styled.h2`
  margin-bottom: 0.6rem;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 1000;
  font-size: 2rem;
  letter-spacing: 2px;
`;

const Card = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media ${device.s} {
    flex-direction: column;
  }
  margin-bottom: 2rem;
`;
const Description = styled.div`
  height: 18rem;
  width: 50%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media ${device.s} {
    width: 100%;
    padding: 0 2rem;
  }
`;
const PostList = ({
  cover,
  desc,
  siteLink,
  githubLink,
  date,
  title,
  excerpt,
  path,
}) => (
  <Card>
    <Wrapper>
      <Image>
        <Img fluid={cover} />
      </Image>
      <StyledLink to={path}>
        <Info>
          <Title>{title}</Title>
        </Info>
      </StyledLink>
    </Wrapper>
    <Description>
      <Title>{title}</Title>
      <span
        style={{
          width: '20rem',
          margin: '0 auto',
          textOverflow: 'ellipsis',
        }}
      >
        {desc}
      </span>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <StyledButton to="/work">
          <ButtonFrame></ButtonFrame>My Work
        </StyledButton>
      </div>
    </Description>
  </Card>
);

export default PostList;

PostList.propTypes = {
  cover: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
