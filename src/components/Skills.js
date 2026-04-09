import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { skills } from '../config/content';

const StyledSkillsSection = styled.section`
  max-width: 1000px;
`;

const StyledSkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledSkillCategory = styled.div`
  background-color: ${({ theme }) => theme.colors.lightNavy};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 30px;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
  }

  .category-header {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }

  .category-icon {
    width: 40px;
    height: 40px;
    margin-right: 15px;
    color: ${({ theme }) => theme.colors.green};
  }

  .category-title {
    margin: 0;
    color: ${({ theme }) => theme.colors.lightestSlate};
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: 600;
  }

  .skills-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      position: relative;
      padding-left: 25px;
      margin-bottom: 12px;
      color: ${({ theme }) => theme.colors.slate};
      font-size: ${({ theme }) => theme.fontSizes.md};
      font-family: ${({ theme }) => theme.fonts.mono};

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.green};
        font-size: ${({ theme }) => theme.fontSizes.lg};
        line-height: 12px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const CloudIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const ProcessingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const AutomationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = [
    {
      title: 'Cloud (GCP)',
      icon: <CloudIcon />,
      skills: skills.cloud,
    },
    {
      title: 'Processing',
      icon: <ProcessingIcon />,
      skills: skills.processing,
    },
    {
      title: 'Automation',
      icon: <AutomationIcon />,
      skills: skills.automation,
    },
  ];

  return (
    <StyledSkillsSection id="skills" ref={ref}>
      <h2 className="numbered-heading">Skills & Technologies</h2>

      <StyledSkillsGrid>
        {categories.map((category, i) => (
          <StyledSkillCategory key={i}>
            <div className="category-header">
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-title">{category.title}</h3>
            </div>
            <ul className="skills-list">
              {category.skills.map((skill, j) => (
                <li key={j}>{skill}</li>
              ))}
            </ul>
          </StyledSkillCategory>
        ))}
      </StyledSkillsGrid>
    </StyledSkillsSection>
  );
};

export default Skills;
