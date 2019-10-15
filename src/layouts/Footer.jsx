import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.footer`
  position: relative;
  bottom: 0;
  /* box-shadow: ${props => props.theme.shadow.footer}; */
  /* background: ${props => props.theme.gradient.leftToRight}; */
  /* font-family: ${props => props.theme.fontFamily.body}; */
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 2rem;
  }
`;

const Text = styled.div`
  text-align: center;
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <span>Built with Gatsby Tutorial Starter </span>
    </Text>
  </Wrapper>
);
export default Footer;
