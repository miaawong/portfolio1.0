import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout } from 'layouts';
import { SEO } from 'components';
import PostHeader from '../components/PostHeader';
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
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 100%;
  }
`;
const Tags = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 30px 20px;
`;
const Tag = styled.span`
  margin: 10px;
  padding: 5px 25px;
  background-color: ${props => props.theme.colors.background.dark};
  color: ${props => props.theme.colors.white.light};
  border-radius: 10px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    padding: 5px;
  }
  &:last-child {
    margin: 10px;
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
    height: 3px;
    margin: 10px auto;
  }
`;

const Post = ({ data, pageContext }) => {
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
    tags,
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
      <PostHeader title={projectName} desc={projectDesc}>
        <a href={githubLink}>
          View Source <FaGithub />
        </a>
        <a href={siteLink}>
          Demo <FaLaptop />
        </a>
        <Tags>
          {tags &&
            tags.map(tags => {
              return <Tag>{tags}</Tag>;
            })}
        </Tags>
      </PostHeader>

      <ProjectContainer>
        <Image>
          <Img fluid={image} objectFit="cover" />
        </Image>
      </ProjectContainer>
      <SuggestionsContainer>
        <h2> MORE PROJECTS</h2>
        <hr />
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
      tags
      projectName
      siteLink
    }
  }
`;
