import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Layout } from 'layouts';
import { device } from '../../config/theme';
import {
  StyledButton,
  ButtonFrame,
  ExternalLinks,
} from '../components/StyledComponents';
import {
  FaGithub,
  FaLaptop,
  FaRegIdBadge,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Outer = styled.div`
  height: 89%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Inner = styled.div`
  max-width: 1600px;
  height: 80%;
  width: 90%;
  margin: 0 auto;
  border: 4px solid black;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const TagLine = styled.h1`
  font-size: 5rem;
  text-align: center;
  @media ${device.s} {
    font-size: 2.5rem;
  }
`;
const Name = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  @media ${device.s} {
    font-size: 1.5rem;
  }
`;
const Links = styled.div`
  width: 360px;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  & > a {
    text-decoration: none;

    & > svg {
      color: black;
    }
  }
`;
const CopiedAlert = styled.p`
  font-size: 12px;
  position: absolute;
  top: 0;
  background: #000000;
  color: #ffffff;
  padding: 2px;
  border-radius: 2px;
`;
const Index = () => {
  const emailRef = useRef();
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText('miawongdev@gmail.com');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <Layout>
      <Helmet title={'MIAWONG.DEV'} />
      <Outer>
        <Inner>
          <Text>
            <TagLine>I design & build&nbsp;tools.</TagLine>
            <Name>
              Mia Wong
              <Links>
                <ExternalLinks href="https://www.instagram.com/mia_codes/">
                  <FaInstagram size={30} />
                </ExternalLinks>
                <ExternalLinks href="https://www.linkedin.com/in/miawailamwong/">
                  <FaLinkedin size={30} />
                </ExternalLinks>
                <ExternalLinks href="https://github.com/miaawong">
                  <FaGithub size={30} />
                </ExternalLinks>
                <ExternalLinks
                  href="mailto:miawongdev@gmail.com"
                  onClick={() => {
                    copyToClipboard();
                  }}
                  style={{ position: 'relative' }}
                >
                  <MdEmail size={32} />
                  {copied && <CopiedAlert>Copied!</CopiedAlert>}
                </ExternalLinks>
              </Links>
            </Name>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <StyledButton to="/work">
                <ButtonFrame></ButtonFrame>My Work
              </StyledButton>
            </div>
          </Text>
        </Inner>
      </Outer>
    </Layout>
  );
};

export default Index;
