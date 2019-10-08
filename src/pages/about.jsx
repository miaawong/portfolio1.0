import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'Hello Again!'} />
    <Header title="Hello Again!">About Me</Header>
    <Container center={center}>
      <h3>
        I am primarily a JavaScript Developer. Self-taught but highly motivated
        to learn everyday. I like to build stuff with React and Gatsby.js.
        However, here are other skills that I have picked up over the years ...
      </h3>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
