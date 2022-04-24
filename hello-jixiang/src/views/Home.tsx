import React from 'react';
import Quotes from 'components/Quotes';
import { quotes } from 'constants';
import FirstImpression from 'components/FirstImpression';
import ProjectBanner from 'components/ProjectBanner';

const Home = () => {
  return (
    <React.Fragment>
      <div className="md:container md:mx-auto items-center px-4 leading-normal">
        <section className="md:flex aboutme h-screen">
          <FirstImpression></FirstImpression>
        </section>
      </div>
      <div className="md:container md:mx-auto items-center px-4 leading-normal">
        <section className="flex flex-col project">
          <div className="mt-4 mb-12 lg:mb-16 text-2xl text-center">🔧 My Projects 🔧</div>
          <ProjectBanner></ProjectBanner>
        </section>

        <section className="quotes">
          <div className="">
            <Quotes quotes={quotes} delayInMilisecond={6500}></Quotes>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Home;
