import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import NavBar from 'layouts/NavBar';
import { PostLayout, Layout } from 'layouts';
import { TagsBlock, Header, SEO, PostList } from 'components';
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
  border-radius: 10px;
  margin-top: 1rem;
  background-color: ${props => props.theme.colors.background.dark};
  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.1);
    transition-duration: 0.5s;
  }
`;

const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 10px;
  h3 {
    margin: 0;
  }
  a {
    font-family: ${props => props.theme.fontFamily.body};
    font-weight: 400;
    color: ${props => props.theme.colors.background.light};
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
  position: relative;
  overflow: hidden;
  height: 35vh !important;
  float: left;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    display: none;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    display: none;
  }
`;
const ProjectInfo = styled.div`
  width: 50%;
  float: right;
  margin: auto;
  text-align: center;
  height: 40%;
  a {
    display: inline-block;
    margin-top: 10px;
    text-decoration: none;
    padding: 20px;
    color: black;
  }

  a:hover {
    border-radius: 10px;
    background-color: ${props => props.theme.colors.background.light};
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 100%;
    margin-top: 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 100%;
    margin: 0;
  }
`;
const ProjectName = styled.h2`
  margin: 50px auto;
  width: 350px;
  font-weight: 800;
  border-radius: 10px;
  padding: 5px;
  background-color: ${props => props.theme.colors.background.dark};
  color: ${props => props.theme.colors.white.base};
`;
const Wrapper = styled.article`
  border-radius: ${props => props.theme.borderRadius.default};
  box-shadow: ${props => props.theme.shadow.feature.small.default};
  transition: ${props => props.theme.transitions.boom.transition};
  height: 17rem;
  flex-basis: calc(99.9% * 1 / 2 - 1rem);
  max-width: calc(99.9% * 1 / 2 - 1rem);
  width: calc(99.9% * 1 / 2 - 1rem);
  &:hover {
    box-shadow: ${props => props.theme.shadow.feature.small.hover};
    transform: scale(1.04);
  }
`;

const Post = ({ data, pageContext }) => {
  const index = 0;
  const posts = data.allContentfulProjects.edges;

  const {
    projectName,
    projectDesc,
    projectImg,
    path,
    createdAt,
    id,
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
      <Header cover={image} />
      <ProjectContainer>
        <Image>
          <Img fluid={image} objectFit="cover" />
        </Image>
        <ProjectInfo>
          <ProjectName>{projectName}</ProjectName>
          <h3>{projectDesc}</h3>
          <a href={githubLink}>
            View Source <FaGithub />
          </a>
          <a href={siteLink}>
            Demo <FaLaptop />
          </a>
        </ProjectInfo>

        {/* <TagsBlock list={tags || []} /> */}
      </ProjectContainer>

      <Wrapper>
        {posts.forEach(({ node }, index) => {
          const path = node.path;
          const prev = index === 0 ? null : posts[index - 1].node;
          const next =
            index === posts.length - 1 ? null : posts[index + 1].node;

          console.log(path);

          return (
            <Link to={path}>{/* <h3>{prev.projectName || 'Home'}</h3> */}</Link>
          );
        })}
      </Wrapper>

      {/* <SuggestionContainer>
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
      </SuggestionContainer> */}
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

export const ONE_POST = graphql`
  query($pathSlug: String!) {
    contentfulProjects(path: { eq: $pathSlug }) {
      githubLink
      id
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
