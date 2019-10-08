import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO } from 'components';
import '../styles/prism';

const SuggestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    transition-duration: 0.5s;
    background-color: ${props => props.theme.colors.background.light};
  }
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
  const isTrue = prev;

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
      <SuggestionContainer>
        <SuggestionBar>
          <PostSuggestion>
            {prev ? (
              prev && (
                <Link to={prev.path}>
                  Previous
                  <h3>{prev.projectName || 'Home'}</h3>
                </Link>
              )
            ) : (
              <Link to="/">
                <h3>Home</h3>
              </Link>
            )}
          </PostSuggestion>
        </SuggestionBar>
        <SuggestionBar>
          <PostSuggestion>
            {next ? (
              next && (
                <Link to={next.path}>
                  Next
                  <h3>{next.projectName || 'Home'}</h3>
                </Link>
              )
            ) : (
              <Link to="/">
                <h3>Home</h3>
              </Link>
            )}
          </PostSuggestion>
        </SuggestionBar>
      </SuggestionContainer>
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
