import React from 'react';
//@ts-ignore
import avatarUrl from "assets/me.jpeg";

//[proj]
import ExperienceCard from "components/ExperienceCard"


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


const Experience = () => {
    return (
        <>
            {
                myExps.map((exp) => {
                    return (
                        <div className="flex justify-center">
                            <ExperienceCard {...exp}></ExperienceCard>
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
                <section className="md:flex aboutme">
                    <div className="md:flex justify-center flex-gold-prev">
                        <div className="md:flex flex-col p-4 justify-items-center items-center">
                            <img className="md:w-24 rounded-full m-auto w-40" src={avatarUrl} alt="Avatar" />
                            <div className="text-center">
                                <h2>Jixiang Li</h2>
                                <h3>Software Engineer</h3>
                                <ul>
                                    <li>
                                        <a href="https://github.com/ljx213101212">github icon</a>
                                        <i className="fab fa-github big-icon"></i>
                                    </li>

                                    <li>
                                        <a href="https://www.linkedin.com/in/jixiang-li-89b4a5b6/">linkedin icon</a>
                                        <i className="fab fa-linkedin big-icon"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex justify-center flex-col flex-gold-after">
                        <div className="md:flex flex-col p-4 justify-items-center items-center">
                            <h1>Biography</h1>
                            <p>Jixiang Li aims to be a fullstack developer with a good vision of design and implementation
                                in software engineering. He is specialized in frontend software development and delivered software 
                                applications through different platforms from Windows 10, Xbox and Web Browser. Working in an user && 
                                developer expereince oriented way.
                            </p>
                        </div>
                        <div className="md:flex p-4 justify-items-center items-center">
                            <div className="md:flex-5 text-center p-4 m-4">
                                <h1>Education</h1>
                                <h3>M.S in Information Technology</h3>
                                <li>2015 - 2016</li>

                                <h3>B.S in Computer Science and Technology</h3>
                                <li>2010 - 2014</li>
                            </div>
                            <div className="md:flex-7 text-center">
                                <h1>Education</h1>
                                <h3>M.S in Information Technology</h3>
                                <li>2015 - 2016</li>

                                <h3>B.S in Computer Science and Technology</h3>
                                <li>2010 - 2014</li>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="md:flex experience">
                    <div className="md:flex w-full">
                        <div className="md:flex-gold-prev">
                            <h1>Experience</h1>
                        </div>
                        <div className="md:flex-gold-after">
                                <Experience></Experience>
                        </div>
                    </div>
                </section>
            </div>
           
        </React.Fragment>
    );
};

export default Home;