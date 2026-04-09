import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 768px) {
    padding-top: 100px;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: ${({ theme }) => theme.colors.green};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: clamp(${({ theme }) => theme.fontSizes.sm}, 5vw, ${({ theme }) => theme.fontSizes.md});
    font-weight: 400;
  }

  h3 {
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.slate};
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .cta-buttons {
    display: flex;
    gap: 20px;
    margin-top: 50px;
    flex-wrap: wrap;
  }

  .email-link {
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
    display: inline-block;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.greenTint};
      outline: none;
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Pranav Hingane.</h2>;
  const three = <h3 className="big-heading">I build data systems at scale.</h3>;
  const four = (
    <p>
      I'm a Data Engineer specializing in building robust, scalable data pipelines and architectures
      on Google Cloud Platform. I transform raw data into actionable insights using modern tools like
      Spark, BigQuery, and Kubernetes.
    </p>
  );
  const five = (
    <div className="cta-buttons">
      <a className="email-link" href="mailto:pranavhingane07@gmail.com">
        Get In Touch
      </a>
      <a className="email-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {isMounted &&
        items.map((item, i) => (
          <div key={i} style={{ transitionDelay: `${i * 100}ms` }}>
            {item}
          </div>
        ))}
    </StyledHeroSection>
  );
};

export default Hero;
