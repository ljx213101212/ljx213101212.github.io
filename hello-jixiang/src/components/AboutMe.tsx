import React from 'react';
import styled from 'styled-components';
import { LABELS } from 'constants';
import avatarUrl from 'assets/me.jpeg';
import Experiences from './Experiences';
import { epamExp, razerExp, dhiExp, personalProjects, epamProjects, razerProjects } from 'constants';
import Projects from './Projects';

const myExps = [epamExp, razerExp, dhiExp];
const myProjs = [...personalProjects, ...epamProjects, ...razerProjects];

const AboutMe = () => {
  return (
    <>
      <div className="md:flex justify-center flex-gold-prev">
        <div className="md:flex flex-col p-4 justify-items-center items-center">
          <img className="md:w-3/5 rounded-full m-auto w-1/2" src={avatarUrl} alt="Avatar" />
          <div className="text-center">
            <h2 className="text-2xl p-4 pb-1">Jixiang Li</h2>
            <h3 className="p-4 pt-0">Software Engineer</h3>
            <ul className="flex">
              <li className="flex-1">
                <a href="https://github.com/ljx213101212" target="_blank">
                  <i className="fab fa-github big-icon transform  hover:scale-125 text-5xl transition-colors duration-150 transition-transform duration-300 ease-in-out"></i>
                </a>
              </li>

              <li className="flex-1">
                <a href="https://www.linkedin.com/in/jixiang-li-89b4a5b6/" target="_blank">
                  <i className="fab fa-linkedin big-icon transform  hover:scale-125 text-5xl transition-colors duration-150 transition-transform duration-300 ease-in-out"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:flex justify-center flex-col flex-gold-after h-full">
        <div className="md:flex flex-col p-4 justify-items-center items-center">
          <h1 className="text-xl">About Me</h1>
          <p>
            Jixiang Li aims to be a fullstack developer with a good vision of design and implementation in software
            engineering. He is specialized in frontend software development and delivered software applications through
            different platforms from Windows 10, Xbox and Web Browser. Working in an user && developer expereince
            oriented way.
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
              <li>
                2015 - 2016
                <span className="text-gray-400 text-xs">
                  <a href="https://nus.edu.sg/" target="_blank">
                    (National University of Singapore)
                  </a>
                </span>
              </li>
            </div>
            <div className="p-1">
              <h3>B.S in Computer Science and Technology</h3>
              <li>
                2010 - 2014
                <span className="text-gray-400 text-xs">
                  <a href="https://www.seu.edu.cn/english/" target="_blank">
                    (Southeast University)
                  </a>
                </span>
              </li>
            </div>
          </div>
        </div>
      </div>

      <div className="md:container md:mx-auto items-center px-4 leading-normal">
        <section className="flex flex-col pt-20 md:px-12  experience">
          <div className="mt-2">Experience</div>
          <div className="flex flex-col w-full mt-2">
            <Experiences experiences={myExps}></Experiences>
          </div>
        </section>
      </div>

      <div className="md:container md:mx-auto items-center px-4 leading-normal">
        <section className="flex flex-col pt-20 md:px-12 project">
          <div className="grid grid-cols-1 md:grid-cols-3 gird-rows-1 md: grid-rows-2 gap-4 md:gap-6 w-full mt-2">
            <Projects projects={myProjs}></Projects>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutMe;
