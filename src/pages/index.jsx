import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';

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

const Index = ({ data }) => {
  const { edges } = data.allContentfulProjects;

  return (
    <Layout>
      <Helmet title={'MIAWONG.DEV'} />
      <Header title="Hi there 👋, I am Mia!">
        Frontend JavaScript Developer
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
