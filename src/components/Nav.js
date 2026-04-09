import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { navLinks } from '../config/content';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: ${({ theme, scrolled }) => (scrolled ? theme.navScrollHeight : theme.navHeight)};
  background-color: ${({ theme, scrolled }) =>
    scrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent'};
  backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(10px)' : 'none')};
  transition: ${({ theme }) => theme.transition};
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;

  @media (max-width: 768px) {
    padding: 0px 25px;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.colors.lightestSlate};
  font-family: ${({ theme }) => theme.fonts.mono};
  counter-reset: item 0;
  z-index: 12;
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: ${({ theme }) => theme.fontSizes.sm};

      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: ${({ theme }) => theme.colors.green};
          font-size: ${({ theme }) => theme.fontSizes.xs};
          text-align: right;
        }
      }
    }
  }
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.green};
    width: 42px;
    height: 42px;
    border: 2px solid ${({ theme }) => theme.colors.green};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 24px;
    font-weight: 600;

    &:hover {
      background-color: ${({ theme }) => theme.colors.greenTint};
    }
  }
`;

const ResumeButton = styled.a`
  color: ${({ theme }) => theme.colors.green};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.75rem 1rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: ${({ theme }) => theme.fonts.mono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  margin-left: 15px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.greenTint};
  }
`;

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledHeader scrolled={scrolled}>
      <StyledNav>
        <StyledLogo>
          <a href="/">P</a>
        </StyledLogo>

        <StyledLinks>
          <ol>
            {navLinks.map(({ url, name }, i) => (
              <li key={i}>
                <a href={url}>{name}</a>
              </li>
            ))}
          </ol>
          <ResumeButton href="/de-portfolio/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </ResumeButton>
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
