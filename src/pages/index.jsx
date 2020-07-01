import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Layout } from 'layouts';
import { device } from '../../config/theme';
import { StyledButton, ButtonFrame } from '../components/StyledButton';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;
const ExternalLinks = styled.div`
  display: flex;
  padding: 1.5rem 1.5rem 0 1.5rem;
  align-items: center;
  a {
    font-size: 20px;
    background-color: ${props => props.theme.colors.background.dark};
    color: ${props => props.theme.colors.white.base};
    padding: 5px 10px;
    border-radius: 10px;
    margin: 0 20px;
    &:hover {
      color: ${props => props.theme.colors.background.dark};
    }
  }
`;

const Outer = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Inner = styled.div`
  height: 80%;
  width: 90%;
  margin: 0 auto;
  border: 4px solid black;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.div`
  width: 80%;
  height: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TagLine = styled.h1`
  font-size: 95px;
  text-align: center;
  @media ${device.s} {
    font-size: 42px;
  }
`;
const Name = styled.h1`
  margin-bottom: 5rem;
  @media ${device.s} {
    font-size: 32px;
  }
`;

const Index = () => {
  return (
    <Layout>
      <Helmet title={'MIAWONG.DEV'} />
      <Outer>
        <Inner>
          <Text>
            <Name>Mia Wong</Name>
            <TagLine>I design & build&nbsp;tools.</TagLine>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <StyledButton to="/work">
                <ButtonFrame></ButtonFrame>My Work
              </StyledButton>
            </div>
          </Text>
        </Inner>
      </Outer>
    </Layout>
  );
};

export default Index;
