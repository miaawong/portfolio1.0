import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO } from 'components';
import '../styles/prism';

const SuggestionBar = styled.div`
  display: flex;
  flex-direction: row; 
  flex-wrap: wrap;
  width: 200px; 
  /* background: ${props => props.theme.colors.white.light}; */
   box-shadow: ${props => props.theme.shadow.suggestion}; 
border-radius: 20px; 
`;
const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
  a {
    font-family: ${props => props.theme.fontFamily.body};
    font-weight: 400;
    color: black;
    text-decoration: none;
  }
`;

const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const {
    projectName,
    projectDesc,
    projectImg,
    path,
    createdAt,
  } = data.contentfulProjects;

  return (
    <Layout>
      <SEO
        title={projectName}
        description={projectDesc}
        banner={projectImg}
        pathname={path}
        article
      />
      <Header title={projectName} date={createdAt} cover={projectImg} />
      <Container>
        {/* <Content input={html} /> */}
        {/* <TagsBlock list={tags || []} /> */}
      </Container>
      <SuggestionBar>
        <PostSuggestion>
          {prev && (
            <Link to={prev.path}>
              Previous
              <h3>{prev.projectName}</h3>
            </Link>
          )}
        </PostSuggestion>
      </SuggestionBar>
      <SuggestionBar>
        <PostSuggestion>
          {next && (
            <Link to={next.path}>
              Next
              <h3>{next.projectName}</h3>
            </Link>
          )}
        </PostSuggestion>
      </SuggestionBar>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    contentfulProjects(path: { eq: $pathSlug }) {
      githubLink
      createdAt(formatString: "MM/DD/YYYY")
      path
      projectDesc
      projectImg {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      projectName
      siteLink
    }
  }
`;
