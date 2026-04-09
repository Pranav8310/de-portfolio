import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import { theme } from '../styles/theme';

const StyledMainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 150px;

  @media (max-width: 768px) {
    padding: 0 50px;
  }
`;

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
  margin: 0;
`;

const StyledSubtitle = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.lightestSlate};
`;

const StyledHomeButton = styled.a`
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.green};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1.25rem 1.75rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: ${({ theme }) => theme.fonts.mono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.greenTint};
  }
`;

const NotFoundPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledMainContainer>
        <StyledTitle>404</StyledTitle>
        <StyledSubtitle>Page Not Found</StyledSubtitle>
        <StyledHomeButton href="/">Go Home</StyledHomeButton>
      </StyledMainContainer>
    </ThemeProvider>
  );
};

export default NotFoundPage;

export const Head = () => <title>Page Not Found</title>;
