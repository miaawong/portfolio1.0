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
import { PageTitle } from '../components/StyledComponents';
const ProjectContainer = styled.div`
  margin: 4rem auto;
  width: 90%;
`;
const Image = styled.div`
  border: 4px solid black;
  width: 84%;
  margin: 0 auto;
  img {
    margin: 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 100%;
  }
  position: relative;
`;
const Tags = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 50%;
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

const NextButton = styled.button`
  position: absolute;
  top: 0;
  right: -5rem;
  width: 5rem;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  & > svg {
    color: rgba(0, 0, 0, 0.5);
    &:hover {
      transition: 200ms ease;
      color: #000000;
    }
  }
`;
const PrevButton = styled.button`
  position: absolute;
  top: 0;
  left: -5rem;
  width: 5rem;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  & > svg {
    color: rgba(0, 0, 0, 0.5);
    &:hover {
      transition: 200ms ease;
      color: #000000;
    }
  }
`;
const Links = styled.div`
  width: 80%;
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
`;

const ProjectDesc = styled.section`
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

  const nextImg = () => {
    if (index >= images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prevImg = () => {
    if (index === 0) {
      setIndex(index + 1);
    } else {
      setIndex(index - 1);
    }
  };

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
        <Image>
          <Img fluid={images[index]} objectFit="cover" />
          <PrevButton onClick={() => prevImg()}>
            <MdKeyboardArrowLeft size={50} />
          </PrevButton>
          <NextButton onClick={() => nextImg()}>
            <MdKeyboardArrowRight size={50} />
          </NextButton>
        </Image>
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
            <a href={githubLink}>
              <p>Github</p>
              <FaGithub size={30} />
            </a>
            <a href={siteLink}>
              <p>Project Site</p>
              <FaLaptop size={30} />
            </a>
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
          ...GatsbyContentfulFluid_tracedSVG
          src
        }
      }
      projectImages {
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
