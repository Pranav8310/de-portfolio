import React from 'react';
import styled from 'styled-components';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.green};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
    color: ${({ theme }) => theme.colors.lightestSlate};
  }

  .email-link {
    margin-top: 50px;
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
    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.colors.greenTint};
      outline: none;
    }
  }
`;

const Contact = () => {
  return (
    <StyledContactSection id="contact">
      <h2 className="numbered-heading overline">What's Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        I'm currently open to new opportunities and interesting data engineering challenges. Whether
        you have a question, want to collaborate on a project, or just want to say hi, my inbox is
        always open. I'll do my best to get back to you!
      </p>

      <a className="email-link" href="mailto:pranavhingane07@gmail.com">
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;
