import React from 'react';
import styled from 'styled-components';
import { LABELS } from 'constants';
import { MajorProjectCard, MinorProjectCard } from './libs/Card';

interface ProjectsProps {
  projects: Project[];
}

interface ProjectProps {
  project: Project;
}
// const ProjectCard = ({ project }: ProjectProps) => {
//   return <div className="project"></div>;
// };

const Projects = ({ projects }: ProjectsProps) => {
  const onClickCard = () => {};

  const getEndtime = (project: Project) => {
    if (project.startTime) {
      return project.endTime ?? LABELS.ON_GOING;
    }
  };
  return (
    <>
      {projects.map((proj, index) => {
        return (
          <>
            {proj.isMajor ? (
              <ProjectsContainer key={index} className="grid w-full row-span-2">
                <MajorProjectCard {...proj} onClickCard={onClickCard} endTime={getEndtime(proj)} />
              </ProjectsContainer>
            ) : (
              <ProjectsContainer key={index} className="grid w-full">
                <MinorProjectCard {...proj} onClickCard={onClickCard} endTime={getEndtime(proj)} />
              </ProjectsContainer>
            )}
          </>
        );
      })}
    </>
  );
};

export default Projects;

const ProjectsContainer = styled.div``;
