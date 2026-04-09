import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { StaticImage } from 'gatsby-plugin-image';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: ${({ theme }) => theme.fonts.mono};
      font-size: ${({ theme }) => theme.fontSizes.sm};

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.green};
        font-size: ${({ theme }) => theme.fontSizes.sm};
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.green};

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: ${({ theme }) => theme.borderRadius};
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: ${({ theme }) => theme.transition};
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: ${({ theme }) => theme.borderRadius};
      transition: ${({ theme }) => theme.transition};
    }

    &:before {
      top: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.navy};
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid ${({ theme }) => theme.colors.green};
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    'Data Pipeline Design',
    'Distributed Computing',
    'ETL/ELT Development',
    'Data Modeling',
    'Performance Optimization',
    'CI/CD for Data',
  ];

  return (
    <StyledAboutSection id="about" ref={ref}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I'm a Data Engineer with a passion for building scalable data infrastructure
              that powers data-driven decision making. My journey in data engineering started when
              I realized the impact of well-architected data systems on business outcomes.
            </p>

            <p>
              Fast-forward to today, and I've had the privilege of working on data platforms that
              process petabytes of data, building real-time analytics systems, and architecting data
              meshes that enable self-service analytics.
            </p>

            <p>
              My focus these days is on modern data stack technologies, especially around cloud-native
              solutions on GCP, and implementing best practices from software engineering into data
              engineering workflows.
            </p>

            <p>Here are a few areas I specialize in:</p>

            <ul className="skills-list">
              {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../images/pranav_image.jpg"
              width={300}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Profile picture"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
