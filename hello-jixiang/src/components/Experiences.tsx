import React from 'react';
import { ExperienceCard } from 'components/libs/Card';

interface ExperienceProps {
  experiences: Experience[];
}

const Experiences = ({ experiences }: ExperienceProps) => {
  return (
    <>
      {experiences.map((exp, index) => {
        return (
          <div key={index} className="flex justify-center w-full mb-6">
            <ExperienceCard {...exp}></ExperienceCard>
          </div>
        );
      })}
    </>
  );
};

export default Experiences;
