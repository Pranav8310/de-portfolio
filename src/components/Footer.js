import React from 'react';
import styled from 'styled-components';
import { socialMedia } from '../config/content';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: ${({ theme }) => theme.colors.lightSlate};
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: ${({ theme }) => theme.colors.slate};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1;

  a {
    padding: 10px;
  }
`;

const iconMap = {
  GitHub: FaGithub,
  Linkedin: FaLinkedin,
  Twitter: FaTwitter,
};

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia.map(({ name, url }, i) => {
            const Icon = iconMap[name];
            return (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon />
                </a>
              </li>
            );
          })}
        </ul>
      </StyledSocialLinks>

      <StyledCredit>
        <a href="https://github.com/yourusername/portfolio">
          <div>Designed & Built by Your Name</div>
        </a>
      </StyledCredit>
    </StyledFooter>
  );
};

export default Footer;
