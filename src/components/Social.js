import React from 'react';
import styled from 'styled-components';
import { socialMedia } from '../config/content';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const StyledSocialList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 40px;
  right: auto;
  z-index: 10;
  color: ${({ theme }) => theme.colors.lightSlate};

  @media (max-width: 768px) {
    display: none;
  }

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.lightSlate};
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      &:last-of-type {
        margin-bottom: 20px;
      }

      a {
        padding: 10px;
        display: inline-block;

        &:hover,
        &:focus {
          transform: translateY(-3px);
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

const iconMap = {
  GitHub: FaGithub,
  Linkedin: FaLinkedin,
  Twitter: FaTwitter,
  LeetCode: SiLeetcode,
};

const Social = () => {
  return (
    <StyledSocialList>
      <ul>
        {socialMedia.map(({ name, url }, i) => {
          const Icon = iconMap[name];
          return (
            <li key={i}>
              <a href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </StyledSocialList>
  );
};

export default Social;
