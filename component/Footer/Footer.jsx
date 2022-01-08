import React from 'react';
import styled from 'styled-components';
import ImgInstagram from '../../assets/images/png/instagram.png';
import ImgGithub2 from '../../assets/images/png/github-black.png';
import Image from 'next/image';
import ImgLinkedin from '../../assets/images/png/linkedin.png';
import Link from 'next/link';

export default function Footer() {
    function LinkWrap({ children, refAs, ...props }, ref) {
        if (refAs) {
          props[refAs] = ref;
        }
        return (
          <>
            {React.isValidElement(children)
              ? React.cloneElement(children, props)
              : null}
          </>
        );
      }
    
      const LinkWrapper = React.forwardRef(LinkWrap);

    return (
        <FooterWrapper>
            <ImgWrapper>
                <Link href="/">
                    <LinkWrapper>
                        <Image src={ImgInstagram} alt="instagram" />
                    </LinkWrapper>
                </Link>
            </ImgWrapper>

            <ImgWrapper>
                <Link href="/">
                    <LinkWrapper>
                        <Image src={ImgGithub2} alt="githubimage-dark" />
                    </LinkWrapper>
                </Link>
            </ImgWrapper>

            <ImgWrapper>
                <Link href="/">
                    <LinkWrapper>
                        <Image src={ImgLinkedin} alt="linkedin" />
                    </LinkWrapper>
                </Link>
            </ImgWrapper>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 10%;
  margin-bottom: 20px;
`;

const ImgWrapper = styled.div`
    height: 30px;
    width: 30px;
    cursor: pointer;
    position: relative;
`;