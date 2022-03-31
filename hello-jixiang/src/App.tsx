import React, { useEffect, useState } from 'react';
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

const App = () => {
  const [hasScrollBar, setHasScrollBar] = useState(false);
  const documentHasScrollBar = () => document.body.clientHeight > document.documentElement.clientHeight;

  const onRouterLocationChanged = () => {
    setHasScrollBar(documentHasScrollBar());
  };

  useEffect(() => {
    window.addEventListener(EVENTS.ROUTER_LOCATION_CHANGED, onRouterLocationChanged);
    return () => {
      window.removeEventListener(EVENTS.ROUTER_LOCATION_CHANGED, onRouterLocationChanged);
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
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer isStickyBottom={!hasScrollBar}></Footer>
    </Router>
  );
};

export default App;
