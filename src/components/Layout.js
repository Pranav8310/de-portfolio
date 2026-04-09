import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import { theme } from '../styles/theme';
import Nav from './Nav';
import Social from './Social';
import Email from './Email';
import Footer from './Footer';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  counter-reset: section;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledContent>
        <Nav />
        <Social />
        <Email />
        <div id="content">
          {children}
        </div>
        <Footer />
      </StyledContent>
    </ThemeProvider>
  );
};

export default Layout;
