import React from 'react';
import Quotes from 'components/Quotes';
import { quotes } from 'constants';
import FirstImpression from 'components/FirstImpression';
import ProjectBanner from 'components/ProjectBanner';
import { personalProjects, epamProjects, razerProjects } from 'constants';

const myProjs = [...personalProjects, ...epamProjects, ...razerProjects];

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
          {myProjs.map((proj) => {
            console.log('[JX TEST]', proj);
            return (
              <ProjectBanner
                linkUrl={proj.linkRoute}
                imageUrl={proj.imageUrl}
                projectTitle={proj.name}
                projectSubtitle={proj.description}
              ></ProjectBanner>
            );
          })}
        </section>
      </div>

      <div className="md:container md:mx-auto items-center px-4 leading-normal">
        <section className="flex justify-center items-center quotes my-12 lg:my-16">
          <div className="text-center">
            <Quotes quotes={quotes} delayInMilisecond={6500}></Quotes>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Home;
