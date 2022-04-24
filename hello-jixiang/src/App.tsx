import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory, useLocation } from 'react-router-dom';

import Nav from './components/Nav';

import Home from './views/Home';
import About from './views/About';
import Blogs from 'views/Blogs';
import NotFound from './views/NotFound';
import Header from 'components/Header';
import RouterHelper from 'components/RouterHelper';
import { EVENTS, headerData } from 'constants';
import Footer from 'components/Footer';
import { AppThemeContext } from 'Provider';
import { personalProjects, epamProjects, razerProjects } from 'constants';
import { isExternalURL } from 'utils/string';

const myProjs = [...personalProjects, ...epamProjects, ...razerProjects];

const App = () => {
  const appThemeContext = useContext(AppThemeContext);
  const [hasScrollBar, setHasScrollBar] = useState(false);
  const documentHasScrollBar = () => document.body.clientHeight > document.documentElement.clientHeight;

  const onRouterLocationChanged = () => {
    setHasScrollBar(documentHasScrollBar());
  };

  const updateHeaderHeight = () => {
    const header = document.querySelector('header')!;
    appThemeContext.setHeaderHeight(Number.isNaN(header.clientHeight) ? 0 : header.clientHeight);
  };

  useEffect(() => {
    window.addEventListener(EVENTS.ROUTER_LOCATION_CHANGED, onRouterLocationChanged);
    window.addEventListener('resize', updateHeaderHeight);
    updateHeaderHeight();
    return () => {
      window.removeEventListener(EVENTS.ROUTER_LOCATION_CHANGED, onRouterLocationChanged);
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);
  return (
    <Router>
      <RouterHelper />
      <Header links={headerData.links} medias={headerData.medias} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        {myProjs.map((proj) => {
          return (
            proj.linkRoute &&
            (isExternalURL(proj.link ?? '') ? (
              <Route
                path={proj.linkRoute}
                component={() => {
                  window.location.replace(proj.link ?? '#');
                  return null;
                }}
              ></Route>
            ) : (
              <Route path={proj.linkRoute}></Route>
            ))
          );
        })}

        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer isStickyBottom={!hasScrollBar}></Footer>
    </Router>
  );
};

export default App;
