import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';
import resume from '../../resume/miawong.pdf';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

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

const Index = ({ data }) => {
  const { edges } = data.allContentfulProjects;

  return (
    <Layout>
      <Helmet title={'MIAWONG.DEV'} />
      <Header title="Hi there 👋, I am Mia!">
        Frontend JavaScript Developer
        <ExternalLinks>
          <a href={resume} download>
            Resume
          </a>
          <a href="https://github.com/miaawong">
            <FaGithub size="30" />
          </a>
          <a href="https://linkedin.com/in/miawailamwong">
            <FaLinkedin size="30" />
          </a>
          <a href="https://www.instagram.com/miawong.dev/">
            <FaInstagram size="30" />
          </a>
        </ExternalLinks>
      </Header>

      <PostWrapper>
        {edges.map(({ node }) => {
          const {
            id,
            shortDesc,
            projectName,
            createdAt,
            projectImg,
            siteLink,
            githubLink,
            path,
          } = node;

          return (
            <PostList
              path={path}
              key={id}
              cover={projectImg.fluid}
              siteLink={siteLink}
              githubLink={githubLink}
              title={projectName}
              date={createdAt}
              // need to figure out a way to limit the description to about 50 letters
              //or so in query, is that possible?
              excerpt={shortDesc}
            />
          );
        })}
      </PostWrapper>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query {
    allContentfulProjects {
      edges {
        node {
          projectName
          projectDesc
          id
          createdAt(formatString: "MM/DD/YYYY")
          githubLink
          siteLink
          path
          shortDesc
          projectImg {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
