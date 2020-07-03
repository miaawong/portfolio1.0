import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';
import { PageTitle } from '../components/StyledComponents';

const PostWrapper = styled.div`
  max-width: 1600px;
  margin: 4rem auto;
  width: 90%;
`;

const Work = ({ data }) => {
  const { edges } = data.allContentfulProjects;
  return (
    <Layout>
      <Helmet title={'Work'} />
      <PageTitle>My Work</PageTitle>
      <PostWrapper>
        {edges.map(({ node }) => {
          const {
            id,
            shortDesc,
            projectDesc,
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
              desc={projectDesc}
              shortDesc={shortDesc}
            />
          );
        })}
      </PostWrapper>
    </Layout>
  );
};
export default Work;
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
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
