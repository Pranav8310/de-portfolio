import React, { useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { experience } from '../config/content';

const StyledExperienceSection = styled.section`
  max-width: 900px;
`;

const StyledTabsContainer = styled.div`
  display: flex;
  margin-top: 50px;
  min-height: 340px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    width: 100%;
    padding-left: 0;
    margin-bottom: 30px;
  }
`;

const StyledTabButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.tabHeight};
  padding: 0 20px 2px;
  border-left: 2px solid ${({ theme }) => theme.colors.lightestNavy};
  background-color: transparent;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.green : theme.colors.slate};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-align: left;
  white-space: nowrap;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.lightNavy};
    color: ${({ theme }) => theme.colors.green};
  }

  @media (max-width: 768px) {
    border-left: 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightestNavy};
    min-width: 120px;
    padding: 0 15px;
  }

  ${({ isActive, theme }) =>
    isActive &&
    `
    border-left-color: ${theme.colors.green};

    @media (max-width: 768px) {
      border-left-color: transparent;
      border-bottom-color: ${theme.colors.green};
    }
  `}
`;

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  h3 {
    margin-bottom: 2px;
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: ${({ theme }) => theme.colors.green};
    }
  }

  .range {
    margin-bottom: 25px;
    color: ${({ theme }) => theme.colors.lightSlate};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  .certifications {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid ${({ theme }) => theme.colors.lightestNavy};

    h4 {
      color: ${({ theme }) => theme.colors.lightSlate};
      font-size: ${({ theme }) => theme.fontSizes.md};
      font-weight: 500;
      margin-bottom: 10px;
    }

    ul {
      padding: 0;
      margin: 0;
      list-style: none;

      li {
        position: relative;
        padding-left: 20px;
        margin-bottom: 8px;
        font-size: ${({ theme }) => theme.fontSizes.sm};
        color: ${({ theme }) => theme.colors.slate};

        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: ${({ theme }) => theme.colors.green};
        }
      }
    }
  }
`;

const StyledJobList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 12px;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.slate};

    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.green};
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
  }
`;

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <StyledExperienceSection id="experience" ref={ref}>
      <h2 className="numbered-heading">Where I've Worked</h2>

      <StyledTabsContainer>
        <StyledTabList role="tablist" aria-label="Job tabs">
          {experience.map((job, i) => (
            <StyledTabButton
              key={i}
              isActive={activeTabId === i}
              onClick={() => setActiveTabId(i)}
              role="tab"
              aria-selected={activeTabId === i}
              aria-controls={`panel-${i}`}
              id={`tab-${i}`}
            >
              <span>{job.company}</span>
            </StyledTabButton>
          ))}
        </StyledTabList>

        <StyledTabPanels>
          {experience.map((job, i) => (
            <StyledTabPanel
              key={i}
              isActive={activeTabId === i}
              id={`panel-${i}`}
              role="tabpanel"
              aria-labelledby={`tab-${i}`}
              hidden={activeTabId !== i}
            >
              <h3>
                <span>{job.title}</span>
                <span className="company">
                  &nbsp;@&nbsp;
                  {job.url ? (
                    <a href={job.url} target="_blank" rel="noopener noreferrer">
                      {job.company}
                    </a>
                  ) : (
                    <span>{job.company}</span>
                  )}
                </span>
              </h3>

              <p className="range">{job.range}</p>

              <StyledJobList>
                {job.responsibilities.map((responsibility, j) => (
                  <li key={j}>{responsibility}</li>
                ))}
              </StyledJobList>

              {job.certifications && job.certifications.length > 0 && (
                <div className="certifications">
                  <h4>Certifications:</h4>
                  <ul>
                    {job.certifications.map((cert, j) => (
                      <li key={j}>{cert}</li>
                    ))}
                  </ul>
                </div>
              )}
            </StyledTabPanel>
          ))}
        </StyledTabPanels>
      </StyledTabsContainer>
    </StyledExperienceSection>
  );
};

export default Experience;
