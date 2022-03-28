import React from 'react';
import styled from 'styled-components';
import { razerExp, dhiExp, razerProject, dhiProject } from 'constants';
import { ExperienceCard } from 'components/Card';

const myExps = [razerExp, dhiExp];
const myProjects = [razerProject, dhiProject];

const Experience = () => {
  return (
    <>
      {myExps.map((exp, index) => {
        return (
          <div key={index} className="flex justify-center w-full">
            <ExperienceCard
              {...exp}
              tasks={myProjects.find((proj) => proj.company === exp.company)?.tasks}
            ></ExperienceCard>
          </div>
        );
      })}
    </>
  );
};

export default Experience;
