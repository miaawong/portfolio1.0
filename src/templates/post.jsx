import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout } from 'layouts';
import { SEO } from 'components';
import { device } from '../../config/theme';
import Suggestions from '../components/Suggestions.jsx';
import { FaGithub, FaLaptop } from 'react-icons/fa';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import '../styles/prism';
import { PageTitle, ExternalLinks } from '../components/StyledComponents';
import ReactDom from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectContainer = styled.div`
  max-width: 1600px;
  margin: 3rem auto;
  width: 90%;
`;
const StyledCarousel = styled(Carousel)`
  border: 4px solid black;
  margin: 0 auto;
  img {
    margin: 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 100%;
  }
  position: relative;
  & > .thumbs-wrapper {
    display: none;
  }
`;
const Tags = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 46%;
  @media ${device.m} {
    width: 80%;
    padding: 1rem;
  }
  @media ${device.s} {
    width: 100%;
    padding: 1rem;
  }
`;
const Tag = styled.li`
  margin: 0 0.5rem;
  font-weight: 700;
  font-size: 1.25rem;
  flex: 1 1 170px;
  @media ${device.s}, ${device.m} {
    font-size: 1rem;
    flex: 1 1 120px;
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

const Links = styled.div`
  width: 45%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  & > a {
    display: flex;
    color: #000000;
    text-decoration: none;

    & > p {
      margin: 0 1rem;
    }
    & > svg {
      color: black;
    }
  }
  @media ${device.s}, ${device.m} {
    width: 80%;
  }
`;

const ProjectDesc = styled.section`
  max-width: 1600px;
  width: 75%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media ${device.s}, ${device.m} {
    width: 88%;
  }
`;

const Category = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  flex-direction: row;
  @media ${device.s}, ${device.m} {
    flex-direction: column;
  }
`;

const CategoryName = styled.h2`
  font-size: 3rem;
  @media ${device.s}, ${device.m} {
    border-bottom: 2px solid black;
    text-align: center;
    font-size: 2rem;
  }
`;

const Description = styled.h3`
  line-height: 2rem;
  width: 50%;
  margin: 0 auto;
  @media ${device.s}, ${device.m} {
    font-size: 1rem;
    width: 80%;
  }
`;

const Post = ({ data, pageContext }) => {
  const [index, setIndex] = React.useState(0);
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
    projectImages,
  } = data.contentfulProjects;
  const image = projectImg.fluid;
  const images = projectImages.map(image => {
    return image.fluid;
  });

  return (
    <Layout>
      <SEO
        title={projectName}
        description={projectDesc}
        banner={image}
        pathname={path}
        article
      />
      <PageTitle style={{ border: 'none', fontSize: '5rem' }}>
        {projectName}
      </PageTitle>
      <ProjectContainer>
        <StyledCarousel autoPlay infiniteLoop showThumbs={false}>
          {images.map(image => (
            <div>
              <a href={siteLink} style={{ cursor: 'pointer' }}>
                <Img fluid={image} alt={projectName} objectFit="cover" />
              </a>
            </div>
          ))}
        </StyledCarousel>
      </ProjectContainer>
      <ProjectDesc>
        <Category>
          <CategoryName>Description</CategoryName>
          <Description>{projectDesc}</Description>
        </Category>
        <Category>
          <CategoryName>Tech Used</CategoryName>
          <Tags>
            {tags &&
              tags.map(tags => {
                return <Tag>{tags}</Tag>;
              })}
          </Tags>
        </Category>
        <Category>
          <CategoryName>Links</CategoryName>
          <Links>
            {githubLink && (
              <ExternalLinks href={githubLink}>
                <p>Github</p>
                <FaGithub size={30} />
              </ExternalLinks>
            )}
            {siteLink && (
              <ExternalLinks href={siteLink}>
                <p>Project Site</p>
                <FaLaptop size={30} />
              </ExternalLinks>
            )}
          </Links>
        </Category>
      </ProjectDesc>
      <SuggestionsContainer>
        <h2> MORE PROJECTS</h2>

        <Suggestions prev={prev} next={next} />
      </SuggestionsContainer>
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
          ...GatsbyContentfulFluid
          src
        }
      }
      projectImages {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyContentfulFluid
          src
        }
      }
      tags
      projectName
      siteLink
    }
  }
`;
