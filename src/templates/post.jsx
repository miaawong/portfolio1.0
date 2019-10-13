import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO } from 'components';
import { FaGithub, FaLaptop } from 'react-icons/fa';
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
  margin-top: 1rem;
  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.1);
    transition-duration: 0.5s;
    background-color: ${props => props.theme.colors.background.light};
  }
`;

const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 2rem 0 2rem;
  a {
    font-family: ${props => props.theme.fontFamily.body};
    font-weight: 400;
    color: black;
    text-decoration: none;
  }
`;
const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Image = styled.div`
  width: 50%;
  float: left;
`;
const ProjectInfo = styled.div`
  width: 50%;
  float: right;
  margin: auto;
  text-align: center;
  a {
    display: inline-block;
    margin: 50px;
    text-decoration: none;
    padding: 20px;
    color: black;
  }
  a:hover {
    border-radius: 10px;
    background-color: ${props => props.theme.colors.background.light};
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
    githubLink,
    siteLink,
  } = data.contentfulProjects;
  const image = projectImg.fluid;

  return (
    <Layout>
      <SEO
        title={projectName}
        description={projectDesc}
        banner={image}
        pathname={path}
        article
      />
      <Header title={projectName} date={createdAt} />
      <ProjectContainer>
        <Image>
          <Img fluid={image} />
        </Image>
        <ProjectInfo>
          <h2>{projectDesc}</h2>
          <a href={githubLink}>
            View Source <FaGithub />
          </a>
          <a href={siteLink}>
            Demo <FaLaptop />
          </a>
        </ProjectInfo>

        {/* <TagsBlock list={tags || []} /> */}
      </ProjectContainer>
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
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      projectName
      siteLink
    }
  }
`;
