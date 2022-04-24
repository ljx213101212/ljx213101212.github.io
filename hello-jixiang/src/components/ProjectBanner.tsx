import { EMPTY_STRING_PLACEHOLDER, IMAGE_PLACEHOLDER } from 'constants';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ProjectBannerProps {
  linkUrl?: string;
  imageUrl?: string;
  projectTitle?: string;
  projectSubtitle?: string;
}

const ProjectBanner = ({ linkUrl, imageUrl, projectTitle, projectSubtitle }: ProjectBannerProps) => {
  return (
    <Link key={linkUrl} to={`${linkUrl ?? '#'}`} target="_blank" rel="noopener noreferrer">
      <ProjectBannerContainer className="flex flex-col lg:flex-row p-4">
        <ProjectImage className="flex justify-center mb-4 lg:mb-0 lg:mr-12">
          <img src={imageUrl ?? IMAGE_PLACEHOLDER}></img>
        </ProjectImage>

        <ProjectTitleWrapper>
          <ProjectTitle className="pb-4 lg:pb-8 text-center lg:text-left">
            {projectTitle ?? EMPTY_STRING_PLACEHOLDER}
          </ProjectTitle>
          <ProjectSubTitle className="text-center lg:text-left">
            {projectSubtitle ?? EMPTY_STRING_PLACEHOLDER}
          </ProjectSubTitle>
        </ProjectTitleWrapper>
      </ProjectBannerContainer>
    </Link>
  );
};

export default ProjectBanner;

const ProjectBannerContainer = styled.div``;

const ProjectTitleWrapper = styled.div`
  flex: 1 1 0%;
  order: 2;
`;
const ProjectTitle = styled.div`
  --tw-text-opacity: 1;
  color: rgb(14 165 233 / var(--tw-text-opacity));
  font-size: 2rem;
`;
const ProjectSubTitle = styled.div``;
const ProjectImage = styled.div`
  & img {
    width: 100%;
    max-width: 514px;
  }
`;
