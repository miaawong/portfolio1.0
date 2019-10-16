import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import NavBar from 'layouts/NavBar';
import { PostLayout, Layout } from 'layouts';
import { TagsBlock, Header, SEO, PostList } from 'components';
import Suggestions from '../components/Suggestions.jsx';
import { FaGithub, FaLaptop } from 'react-icons/fa';
import '../styles/prism';

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Image = styled.div`
  width: 55%;
  position: relative;
  overflow: hidden;
  height: 100%;
  float: left;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    display: none;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    display: none;
  }
`;
const ProjectInfo = styled.div`
  float: right;
  width: 45%;
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
const SuggestionsContainer = styled.div`
  margin: 50px auto;
  h2 {
    font-family: ${props => props.theme.fontFamily.body};
    text-align: center;
    font-weight: 600;
  }
  hr {
    width: 50%;
    margin: 20px auto;
  }
`;

const Post = ({ data, pageContext }) => {
  // const posts = data.allContentfulProjects.edges;
  const { prev, next } = pageContext;

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
      <SuggestionsContainer>
        <hr />
        <h2> MORE PROJECTS</h2>
      </SuggestionsContainer>
      <Suggestions prev={prev} next={next} />
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
          src
        }
      }
      projectName
      siteLink
    }
  }
`;
