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
  margin: 20px auto;
  width: 100%;
`;
const Image = styled.div`
  width: 80%;
  margin: 0 auto;
  img {
    margin: 0;
  }
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
      <Header title={projectName}>
        <h3>{projectDesc}</h3>
        <a href={githubLink}>
          View Source <FaGithub />
        </a>
        <a href={siteLink}>
          Demo <FaLaptop />
        </a>
      </Header>

      <ProjectContainer>
        <Image>
          <img src={image.src} />
          {/* <Img fluid={image} objectFit="cover" /> */}
        </Image>

        {/* <TagsBlock list={tags || []} /> */}
      </ProjectContainer>
      <SuggestionsContainer>
        {/* <hr /> */}
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
