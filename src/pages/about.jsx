import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { Header } from 'components';
import { Layout } from 'layouts';
import { PageTitle } from '../components/StyledComponents';
import { device } from '../../config/theme';
import mia from '../../static/logo/mia.jpg';
import resume from '../../resume/MiaWong2020(1).pdf';
import { StyledButton, ButtonFrame } from '../components/StyledComponents';

const Container = styled.div`
  max-width: 1600px;
  width: 90%;
  margin: 4rem auto;
  @media ${device.s} {
    margin: 2rem auto;
  }
`;

const SkillsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  & > li {
    font-weight: 700;
    font-size: 1.25rem;
    flex: 0 1 170px;
    @media ${device.s}, ${device.m} {
      flex: 0 1 120px;
      font-size: 1rem;
    }
  }
  @media ${device.s}, ${device.m} {
    padding: 1rem;
    width: 100%;
  }
`;

const Category = styled.div`
  width: 100%;
  margin: 3rem auto;
  display: flex;
  justify-content: space-between;
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
const Paragraph = styled.h3`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  line-height: 2rem;
  padding: 1rem 2rem;
  @media ${device.s}, ${device.m} {
    width: 100%;
    padding: 1rem;
    order: 2;
    font-size: 1rem;
  }
`;
const Image = styled.div`
  /* margin: 0 2rem; */
  width: 50%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media ${device.s}, ${device.m} {
    width: 100%;
    justify-content: center;
    margin: 0;
    order: 1;
  }
`;
// const Border = styled.div`
//   max-width: 80%;
//   height: 80%;
//   border: 3px solid black;
//   position: absolute;
//   transform: translate(20px, -20px);
//   z-index: -1;
// `;

const Fun = styled.div`
  width: 50%;
  font-size: 1.2rem;
  & > li > a {
    text-decoration: none;
    font-weight: bold;
    color: black;
    border-bottom: 2px solid black;
  }
  @media ${device.s}, ${device.m} {
    padding: 1rem;
    width: 100%;
    font-size: 1rem;
  }
`;
const StyledResume = styled.a`
  width: 6rem;
  padding: 0.5rem;
  background: black;
  color: white;
  font-size: 20px;
  position: relative;
  z-index: 1;
  margin-top: 1.5rem;
  &:hover {
    transition: 200ms ease;
    transform: scale(1.1);
  }
`;

const About = center => (
  <Layout>
    <Helmet title={'About'} />
    <PageTitle>About</PageTitle>
    <Container center={center}>
      <Category>
        <Paragraph>
          As a Web Developer, I’m curious and passionate about creating useful,
          intuitive, and beautiful tools for&nbsp;the&nbsp;web.
          <br /> Born in Hong Kong and raised in Atlanta, GA. I've learned to
          adapt and embrace adversities and use obstacles as opportunities of
          growth.
          <br />
          I'm eager learn new skills and use the knowledge I have to create
          innovative solutions.
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <StyledResume href={resume} download>
              <ButtonFrame></ButtonFrame>Resume
            </StyledResume>
          </div>
        </Paragraph>
        <Image>
          {/* <Border></Border> */}
          <img
            src={mia}
            alt="image of Mia"
            style={{
              maxWidth: '65%',
              objectFit: 'contain',
              border: '4px solid black',
            }}
          />
        </Image>
      </Category>
      <Category>
        <CategoryName>Skills</CategoryName>
        <SkillsContainer>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Redux</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>AWS</li>
          <li>jQuery</li>
          <li>Gatsby.js</li>
          <li>styled-components</li>
          <li>Bootstrap</li>
          <li>Git/Github</li>
          <li>npm</li>
        </SkillsContainer>
      </Category>
      <Category>
        <CategoryName>Fun Stuff</CategoryName>
        <Fun>
          <li>
            Cooking. I love eating and cooking! I created my own recipe app{' '}
            <a href="https://cookin.io">cookin'</a> since I tend to personalize
            recipes that I find.{' '}
          </li>
          <li>
            Gaming. I never really did sports growing up, but I got into gaming
            a few years ago. It has definitely taught me about failures, being a
            team player, and so much more! I stream on{' '}
            <a href="https://twitch.com/miacodes">Twitch</a> sometimes too!{' '}
          </li>
          <li>
            Walking and Hiking. I love the sound of nature, sun, and fresh air!
          </li>
          <li>Coffee. No other comments needed.</li>
          <li>Yoga. Here's a friendly reminder to stretch it out!</li>
        </Fun>
      </Category>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
