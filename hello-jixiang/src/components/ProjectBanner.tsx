import React from 'react';
import styled from 'styled-components';

const ProjectBanner = () => {
  return (
    <ProjectBannerContainer className="flex flex-col lg:flex-row p-4">
      <ProjectImage className="flex justify-center mb-4 lg:mb-0 lg:mr-12">
        <img src={'https://picsum.photos/536/354'}></img>
      </ProjectImage>

      <ProjectTitleWrapper>
        <ProjectTitle className="pb-4 lg:pb-8">Lorem Ipsum</ProjectTitle>
        <ProjectSubTitle className="text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </ProjectSubTitle>
      </ProjectTitleWrapper>
    </ProjectBannerContainer>
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
const ProjectImage = styled.div``;
