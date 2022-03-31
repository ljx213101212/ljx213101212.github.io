import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';

import Home from './views/Home';
import About from './views/About';
import Blogs from 'views/Blogs';
import NotFound from './views/NotFound';
import Header from 'components/Header';
import { headerData } from 'constants';

const App = () => {
  return (
    <Router>
      {/* <Nav /> */}
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
    </Router>
  );
};

export default App;
