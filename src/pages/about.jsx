import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import {
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGit,
  FaNodeJs,
  FaCss3Alt,
} from 'react-icons/fa';

const SkillsContainer = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  color: black;
  p {
    padding: 10px 10px;
    background-color: ${props => props.theme.colors.background.dark};
    color: ${props => props.theme.colors.white.light};
    border-radius: 10px;
    @media (max-width: ${props => props.theme.breakpoints.m}) {
      padding: 5px;
    }
  }
`;
const SkillsBlock = styled.div`
  margin: 50px auto;
  max-width: 100%;
`;

const About = center => (
  <Layout>
    <Helmet title={'Hello Again!'} />
    <Header title="Hello Again!">About Me</Header>
    <Container center={center}>
      <h3>
        I am primarily a JavaScript Developer. Self-taught and highly motivated
        to learn something everyday. I like to build stuff with React and
        Gatsby.js. However, here are other skills that I have picked up over the
        years ...
      </h3>

      <SkillsBlock>
        <SkillsContainer>
          <p className="row1">
            HTML5 <FaHtml5 />{' '}
          </p>
          <p className="row2">
            CSS3
            <FaCss3Alt style={{ marginLeft: '4px' }} />{' '}
          </p>
          <p className="row3">
            JavaScript
            <FaJs style={{ marginLeft: '3px' }} />{' '}
          </p>
          <p className="row4">
            React.js <FaReact />{' '}
          </p>
          <p className="row5">Gatsby.js</p>
          <p className="row6">
            Bootstrap <FaBootstrap />{' '}
          </p>
          <p className="row7">jQuery</p>
          <p className="row8">
            git <FaGit style={{ marginLeft: '3px' }} />{' '}
          </p>
          <p className="row9">
            Github <FaGithub style={{ marginLeft: '3px' }} />{' '}
          </p>
          <p className="row10">
            Node.js <FaNodeJs style={{ marginLeft: '3px' }} />{' '}
          </p>
          <p className="row11">MySQL</p>
          <p className="row12">MongoDB</p>
        </SkillsContainer>
      </SkillsBlock>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
