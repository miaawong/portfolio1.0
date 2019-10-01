import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Page">Gatsby Tutorial Starter</Header>
    <Container center={center}>
      <h3>
        Hi again! As you can tell from my projects, I am interested in React
        currently. This site is built with Gatsby (another one of my favs) Check
        out my <a href="www.github.com/miaawong">Github</a> for more details!
      </h3>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
