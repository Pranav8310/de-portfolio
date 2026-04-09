import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { projects } from '../config/content';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const StyledProjectsSection = styled.section`
  max-width: 1000px;
`;

const StyledProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledProject = styled.div`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-bottom: 70px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
    }

    .project-tech-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }

    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }

    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
      background-color: ${({ theme }) => theme.colors.lightNavy};
      border-radius: ${({ theme }) => theme.borderRadius};
    }
  }

  .project-overline {
    margin: 10px 0;
    color: ${({ theme }) => theme.colors.green};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 400;
  }

  .project-title {
    color: ${({ theme }) => theme.colors.lightestSlate};
    font-size: clamp(24px, 5vw, 28px);
    margin: 0 0 20px;
    font-weight: 600;

    @media (max-width: 768px) {
      color: ${({ theme }) => theme.colors.white};
    }

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .project-description {
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.lightNavy};
    color: ${({ theme }) => theme.colors.lightSlate};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;
    }

    p {
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .architecture-list {
    margin: 15px 0 0;
    padding: 0;
    list-style: none;

    li {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      margin-bottom: 8px;
      padding-left: 20px;
      position: relative;

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.green};
      }
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: ${({ theme }) => theme.colors.lightSlate};
      font-family: ${({ theme }) => theme.fonts.mono};
      font-size: ${({ theme }) => theme.fontSizes.xs};
      white-space: nowrap;
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: ${({ theme }) => theme.colors.lightestSlate};

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.green};
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .project-image {
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    .img-wrapper {
      width: 100%;
      max-width: 100%;
      vertical-align: middle;
      border-radius: ${({ theme }) => theme.borderRadius};
      position: relative;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);

      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: ${({ theme }) => theme.transition};
        background-color: ${({ theme }) => theme.colors.navy};
        mix-blend-mode: screen;
      }

      div {
        width: 100%;
        height: 100%;
        min-height: 400px;
        background-color: ${({ theme }) => theme.colors.lightNavy};
        border-radius: ${({ theme }) => theme.borderRadius};
      }
    }

    &:hover,
    &:focus {
      .img-wrapper:before {
        background: transparent;
      }

      .img-wrapper {
        filter: none;
      }
    }
  }
`;

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <StyledProjectsSection id="projects" ref={ref}>
      <h2 className="numbered-heading">Featured Projects</h2>

      <StyledProjectsList>
        {projects.map((project, i) => (
          <StyledProject key={i}>
            <div className="project-content">
              <div>
                <p className="project-overline">Featured Project</p>

                <h3 className="project-title">
                  <a href={project.external}>{project.title}</a>
                </h3>

                <div className="project-description">
                  <p>{project.description}</p>
                  {project.architecture && (
                    <ul className="architecture-list">
                      {project.architecture.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {project.techStack && (
                  <ul className="project-tech-list">
                    {project.techStack.map((tech, j) => (
                      <li key={j}>{tech}</li>
                    ))}
                  </ul>
                )}

                <div className="project-links">
                  {project.github && (
                    <a href={project.github} aria-label="GitHub Link">
                      <FaGithub />
                    </a>
                  )}
                  {project.external && (
                    <a href={project.external} aria-label="External Link">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="project-image">
              <div className="img-wrapper">
                <div />
              </div>
            </div>
          </StyledProject>
        ))}
      </StyledProjectsList>
    </StyledProjectsSection>
  );
};

export default Projects;
