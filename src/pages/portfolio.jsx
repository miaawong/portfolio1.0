import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
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

const Portfolio = ({ data }) => {
  const { edges } = data.allContentfulProjects;
  return (
    <Layout>
      <Helmet title={'Portfolio'} />
      <Header title="Portfolio">Things that I have created...</Header>

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
              excerpt={shortDesc}
            />
          );
        })}
      </PostWrapper>
    </Layout>
  );
};
export default Portfolio;
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