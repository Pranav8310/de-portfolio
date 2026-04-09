import React from 'react';
import styled from 'styled-components';

const StyledEmailList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 40px;
  left: auto;
  z-index: 10;

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

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: ${({ theme }) => theme.fontSizes.lg};
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    color: ${({ theme }) => theme.colors.lightSlate};

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;

const Email = () => {
  return (
    <StyledEmailList>
      <a href="mailto:pranavhingane07@gmail.com">pranavhingane07@gmail.com</a>
    </StyledEmailList>
  );
};

export default Email;
