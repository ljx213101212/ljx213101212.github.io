import React, { useContext } from 'react';
import { footerData } from 'constants';

import AboutMe from 'components/AboutMe';
import Experiences from 'components/Experiences';
import Projects from 'components/Projects';
import Quotes from 'components/Quotes';
import Footer from 'components/Footer';
import { epamExp, razerExp, dhiExp, personalProjects, epamProjects, razerProjects, quotes } from 'constants';
import Header from 'components/Header';
import FirstImpression from 'components/FirstImpression';
import { AppThemeContext } from 'Provider';

const myExps = [epamExp, razerExp, dhiExp];
const myProjs = [...personalProjects, ...epamProjects, ...razerProjects];

const Home = () => {
  return (
    <React.Fragment>
      <section className="md:flex aboutme h-screen">
        <FirstImpression></FirstImpression>
      </section>
      <div className="md:container md:mx-auto items-center px-4 leading-normal">
        {/* <section className="md:flex aboutme pt-12 md:px-12">
          <AboutMe />
        </section> */}
        <section className="flex flex-col pt-20 md:px-12  experience">
          <div className="mt-2">Experience</div>
          <div className="flex flex-col w-full mt-2">
            <Experiences experiences={myExps}></Experiences>
          </div>
        </section>
        <section className="flex flex-col pt-20 md:px-12 project">
          <div className="mt-2">Projects</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gird-rows-1 md: grid-rows-2 gap-4 md:gap-6 w-full mt-2">
            <Projects projects={myProjs}></Projects>
          </div>
        </section>

        <section className="">
          <div className="">
            <Quotes quotes={quotes} delayInMilisecond={6500}></Quotes>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Home;
