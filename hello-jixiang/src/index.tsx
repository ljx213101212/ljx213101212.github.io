import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WithOverlay from 'components/libs/WithOverlay';
import AppProvider, { AppThemeContext, AppOverlayContext } from './Provider';
import { APP_NAME } from 'constants';

const rootElement = document.getElementById('root');

const AppContainer = () => {
  const appOverlayContext = React.useContext(AppOverlayContext);
  React.useEffect(() => {
    document.title = `${APP_NAME} (${__APP_VERSION__})`;
  }, []);
  return <>{WithOverlay(App, appOverlayContext.status, appOverlayContext.color, appOverlayContext.opacity)}</>;
};

ReactDOM.render(
  <AppProvider>
    <AppContainer />
  </AppProvider>,
  rootElement,
);
// ReactDOM.render(<App />, rootElement);
