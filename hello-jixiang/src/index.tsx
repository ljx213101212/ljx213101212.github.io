import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WithOverlay from 'components/libs/WithOverlay';
import AppProvider, { AppThemeContext, AppOverlayContext } from './Provider';

const rootElement = document.getElementById('root');

const AppContainer = () => {
  const appOverlayContext = React.useContext(AppOverlayContext);
  return <>{WithOverlay(App, appOverlayContext.status, appOverlayContext.color, appOverlayContext.opacity)}</>;
};

ReactDOM.render(
  <AppProvider>
    <AppContainer />
  </AppProvider>,
  rootElement,
);
// ReactDOM.render(<App />, rootElement);
