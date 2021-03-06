import React from 'react';
import "./Card.css";

export const ExperienceCard = ({ title, company, companyLink, startTime, endTime, location }: any) => {
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

export const ProjectCard = ({ name, link, vendor, vendorLink, tasks}: any) => {
    return (
        <div className="card">
            <div className="card-body exp">
                <h4 className="card-title">
                    <a href={link}> {name}</a>
                </h4>
                <div className="card-subtitle">
                    <a href={vendorLink}> {vendor} </a>
                </div>
                <div className="card-text">
                    <ul>
                        {
                            tasks.map((task:any, index:number) =>{
                                return (
                                    <li key={task.name + index.toString()} className="list-disc">{task}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )

}

