import React from 'react';
import './Card.css';

interface ExperienceCardProps extends Experience {
  tasks?: string[];
}

export const ExperienceCard = ({
  title,
  company,
  companyLink,
  startTime,
  endTime,
  location,
  tasks,
}: ExperienceCardProps) => {
  return (
    <div className="card w-full">
      <div className="card-content">
        <div className="card-body">
          <h4 className="card-title exp-title">{title}</h4>
          <h4>
            <a href={companyLink}>{company}</a>
            <span className="divider"> - </span>
            <span className="text-xs font-thin">{location}</span>
          </h4>
          <div>
            <span>
              {startTime} - {endTime}
            </span>
            <span className="divider"></span>
          </div>
          {tasks && (
            <div className="card-text">
              <ul>
                {tasks.map((task: any, index: number) => {
                  return (
                    <li key={task.name + index.toString()} className="list-disc">
                      {task}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface ProjectCardProps extends Project {
  onClickCard: () => void;
}

export const MajorProjectCard = ({ name, startTime, endTime, description }: ProjectCardProps) => {
  console.log('MajorProjectCard', startTime);
  return (
    <div className="card major-project-card">
      <div className="card-content">
        <div className="card-header">
          <div className="project-period">
            <span className="start">{startTime}</span>
            <span className="period-divider"> ~ </span>
            <span className="end">{endTime}</span>
          </div>
        </div>
        <div className="card-body">
          <div className="major-project-name">{name}</div>
          {description && <div className="project-message">{{ description }}</div>}
        </div>
      </div>
    </div>
  );
};

export const MinorProjectCard = ({ name, startTime, endTime, description }: ProjectCardProps) => {
  return (
    <div className="card minor-project-card">
      <div className="card-content">
        <div className="card-header">
          <div className="project-period">
            <span className="start">{startTime}</span>
            <span className="period-divider"> ~ </span>
            <span className="end">{endTime}</span>
          </div>
        </div>
        <div className="card-body">
          <div className="minor-project-name">{name}</div>
          {description && <div className="project-message">{{ description }}</div>}
        </div>
      </div>
    </div>
  );
};
