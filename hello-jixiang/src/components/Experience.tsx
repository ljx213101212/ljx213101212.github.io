import React from 'react';
import styled from 'styled-components';
import { ExperienceCard } from 'components/libs/Card';

interface ExperienceProps {
  experiences: Experience[];
}

const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <>
      {experiences.map((exp, index) => {
        return (
          <div key={index} className="flex justify-center w-full">
            <ExperienceCard {...exp}></ExperienceCard>
          </div>
        );
      })}
    </>
  );
};

export default Experience;
