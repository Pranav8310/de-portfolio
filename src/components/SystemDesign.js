import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { systemDesigns } from '../config/content';

const StyledSystemDesignSection = styled.section`
  max-width: 1000px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 25px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledDesignCard = styled.div`
  position: relative;
  cursor: default;
  transition: ${({ theme }) => theme.transition};

  &:hover,
  &:focus-within {
    transform: translateY(-7px);

    .design-inner {
      box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
    }
  }

  .design-inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    min-height: 100%;
    padding: 2rem 1.75rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.lightNavy};
    transition: ${({ theme }) => theme.transition};
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  }

  .design-top {
    width: 100%;
  }

  .design-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  .folder-icon {
    color: ${({ theme }) => theme.colors.green};
    font-size: 40px;
  }

  .design-title {
    margin: 0 0 10px;
    color: ${({ theme }) => theme.colors.lightestSlate};
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: 600;
  }

  .design-description {
    color: ${({ theme }) => theme.colors.lightSlate};
    font-size: 17px;
    line-height: 1.4;
  }

  .components-list {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: ${({ theme }) => theme.fonts.mono};
      font-size: ${({ theme }) => theme.fontSizes.xs};
      color: ${({ theme }) => theme.colors.slate};
      padding-left: 20px;
      position: relative;
      margin-bottom: 8px;

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.green};
      }
    }
  }

  .design-footer {
    width: 100%;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid ${({ theme }) => theme.colors.lightestNavy};
  }

  .design-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      font-family: ${({ theme }) => theme.fonts.mono};
      font-size: ${({ theme }) => theme.fontSizes.xs};
      line-height: 1.75;
      margin-right: 15px;
      color: ${({ theme }) => theme.colors.green};

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

const SystemDesign = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <StyledSystemDesignSection id="system-design" ref={ref}>
      <h2 className="numbered-heading">System Design & Architecture</h2>

      <StyledGrid>
        {systemDesigns.map((design, i) => (
          <StyledDesignCard key={i}>
            <div className="design-inner">
              <div className="design-top">
                <div className="design-header">
                  <div className="folder-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                </div>

                <h3 className="design-title">{design.title}</h3>
                <p className="design-description">{design.description}</p>

                {design.components && (
                  <ul className="components-list">
                    {design.components.map((component, j) => (
                      <li key={j}>{component}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="design-footer">
                <ul className="design-tech-list">
                  {design.tools.map((tool, j) => (
                    <li key={j}>{tool}</li>
                  ))}
                </ul>
              </div>
            </div>
          </StyledDesignCard>
        ))}
      </StyledGrid>
    </StyledSystemDesignSection>
  );
};

export default SystemDesign;
