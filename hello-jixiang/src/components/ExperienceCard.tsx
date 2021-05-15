import React from 'react';
import "./ExperienceCard.css";

const ExperienceCard = ({ title, company, companyLink, startTime, endTime, location }:any )=> {
  return (
      <div className="card">
          <div className="card-body">
              <h4 className='card-title exp-title'>{title}</h4>
              <h4><a href={companyLink}>{company}</a></h4>
              <div>
                  <span>{startTime} - {endTime}</span>
                  <span className="divider"></span>
                  <span>{location}</span>
              </div>
          </div>
      </div>
                      
  );
};

export default ExperienceCard;