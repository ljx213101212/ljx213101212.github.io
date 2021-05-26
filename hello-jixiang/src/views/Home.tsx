import React from 'react';
//@ts-ignore
import avatarUrl from "assets/me.jpeg";

//[proj]
import { ExperienceCard, ProjectCard } from "components/Card"
import { footerData } from 'constants';
import Footer from "components/Footer"

const razerExp = {
    title: "Software Engineer",
    company: "Razer",
    companyLink: "https://www.razer.com/",
    startTime: "June 2018",
    endTime: "Present",
    location: "Singapore"
}

const dhiExp = {
    title: "Software Developer",
    company: "DHI",
    companyLink: "https://www.dhigroup.com/",
    startTime: "Aug 2016",
    endTime: "May 2018",
    location: "Singapore"
}

const myExps = [razerExp, dhiExp];

const razerProject = {
    name: "Razer Inc.",
    link: "https://www.razer.com/",
    vendor: "Singapore/June 2018 - Present",
    vendorLink: "",
    tasks: [
        "Main developer for Microsoft Xbox Application for Console Peripheral devices (C++ / JavaScript)",
        "Main developer for the Alexa module and cooperate with AWS Alexa team. (JavaScript / WebRTC)",
        "Design and Implement ReactJS/Redux projects for Peripheral devices and experienced in Unit Test framework (JEST).",
        "Experienced in code bug fix and code refactoring on windows DLL projects for Peripheral devices. (C++ / Windows SDK)",
        "Experienced in firmware protocol analysis. (Wireshark/Bushound)",
        "Refactoring Redux Store structure and integrate Typescript into on-going projects. (React/Redux/TypeScript)",
        "Refactoring on-going projects by adding Xstate finite state machine to manage the device state. (TypeScript/Xstate)"
    ]
}

const dhiProject = {
    name: "DHI",
    link: "https://www.dhigroup.com/",
    vendor: "Singapore / August 2016 – June 2018",
    vendorLink: "",
    tasks:[
        "As a full-stack programmer in two web projects by using Polymer 1&2, .NET4.5 API, PostgreSQL, Couch DB.",
        "As a frontend programmer in one web project by using .NET MVC5, Vanilla JavaScript/jQuery.",
        "As a team member lead by a senior in one web project by using .NET MVC CORE2.0, Entity Framework",
        "As a software developer Produced many console applications tools by using C# for operational use."
    ]
}

const myProjects = [razerProject, dhiProject];


const Experience = () => {
    return (
        <>
            {
                myExps.map((exp, index) => {
                    return (
                        <div key={index} className="flex justify-center">
                            <ExperienceCard {...exp}></ExperienceCard>
                        </div>
                    )
                })
            }
        </>
    )
}

const Project = () => {
    return (
        <>
        {
            myProjects.map((proj,index)=> {
                return (
                    <div key={index} className="flex justify-center">
                        <ProjectCard {...proj}></ProjectCard>
                    </div>
                )
            })
        }
        </>
    )
}

const Home = () => {
    return (
        <React.Fragment>
            {/* <Header title="Biography" /> */}
            <div className="container items-center mx-auto px-4 leading-normal">
                <section className="md:flex aboutme pt-20">
                    <div className="md:flex justify-center flex-gold-prev">
                        <div className="md:flex flex-col p-4 justify-items-center items-center">
                            <img className="md:w-3/5 rounded-full m-auto w-1/2" src={avatarUrl} alt="Avatar" />
                            <div className="text-center">
                                <h2 className="text-2xl p-4 pb-1">Jixiang Li</h2>
                                <h3 className="p-4 pt-0">Software Engineer</h3>
                                <ul className="flex">
                                    <li className="flex-1">
                                        <a href="https://github.com/ljx213101212" target="_blank"><i className="fab fa-github big-icon transform  hover:scale-150 text-5xl transition-colors duration-150 transition-transform duration-500 ease-in-out"></i></a>
                                    </li>

                                    <li className="flex-1">
                                        <a href="https://www.linkedin.com/in/jixiang-li-89b4a5b6/" target="_blank"><i className="fab fa-linkedin big-icon transform  hover:scale-150 text-5xl transition-colors duration-150 transition-transform duration-500 ease-in-out"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex justify-center flex-col flex-gold-after h-full">
                        <div className="md:flex flex-col p-4 justify-items-center items-center">
                            <h1 className="text-xl">About Me</h1>
                            <p>Jixiang Li aims to be a fullstack developer with a good vision of design and implementation
                                in software engineering. He is specialized in frontend software development and delivered software 
                                applications through different platforms from Windows 10, Xbox and Web Browser. Working in an user && 
                                developer expereince oriented way.
                            </p>
                        </div>
                        <div className="md:flex p-4 justify-items-center items-center mt-8">
                            <div className="md:flex-5 text-left m-4 md:pl-0 md:ml-0">
                                <h1 className="text-xl pb-1">Interest</h1>
                                <li className="pt-1">Typescript/Javascript</li>
                                <li className="pt-1">React/Redux</li>
                                <li className="pt-1">Frontend/Fullstack Development</li>
                                <li className="pt-1">Golang (learning) </li>

                            </div>
                            <div className="md:flex-7 text-left">
                                <h1 className="text-xl pb-1"> Education</h1>
                                <div className="p-1">
                                <h3>M.S in Information Technology</h3>
                                <li>2015 - 2016</li>
                                </div>
                                <div className="p-1">
                                <h3>B.S in Computer Science and Technology</h3>
                                <li>2010 - 2014</li>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="md:flex experience pt-20">
                    <div className="md:flex w-full">
                        <div className="md:flex-gold-prev">
                            <h1>Experience</h1>
                        </div>
                        <div className="md:flex-gold-after">
                                <Experience></Experience>
                        </div>
                    </div>
                </section>
                <section className="md:flex project">
                <div className="md:flex w-full">
                        <div className="md:flex-gold-prev">
                            <h1>Projects</h1>
                        </div>
                        <div className="md:flex-gold-after">
                                <Project></Project>
                        </div>
                    </div>
                </section>

                <Footer {...footerData}></Footer>
               
            </div>
           
        </React.Fragment>
    );
};

export default Home;