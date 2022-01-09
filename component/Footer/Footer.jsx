import React from 'react';
import styled from 'styled-components';
import ImgGithub2 from '../../assets/images/png/github-black.png';
import Image from 'next/image';
import ImgLinkedin from '../../assets/images/png/linkedin.png';
import ImgTwitter from '../../assets/images/png/twitter.png';

export default function Footer() {
    return (
        <FooterWrapper>
            <ImgWrapper>
                <a target="_blank" href="https://twitter.com/arceparsedev" rel="noreferrer">
                        <Image src={ImgTwitter} alt="twitter" />
                </a>
            </ImgWrapper>

            <ImgWrapper>
                <a target="_blank" href="https://github.com/Kazuo-dev" rel="noreferrer">
                        <Image src={ImgGithub2} alt="githubimage-dark" />
                </a>
            </ImgWrapper>

            <ImgWrapper>
                <a target="_blank" href="https://www.linkedin.com/in/marcelo-huenchupan-aravena-884420208/" rel="noreferrer">
                <Image src={ImgLinkedin} alt="linkedin" />
                </a>
            </ImgWrapper>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
  height: 10vh;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;

  @media (max-width: 1400px) {
      width: 40%;
   }
`;



const ImgWrapper = styled.div`
    height: 30px;
    width: 30px;
    cursor: pointer;
    position: relative;

    @media (min-width: 2000px) {
      height: 2vw;
      width: 2vw;
   }
    
`;