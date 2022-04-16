import App from 'App';
import React, { Component, useMemo, useState } from 'react';

interface AppOverlayInterface {
  status: boolean;
  opacity: number;
  color: string;
  setStatus: (status: boolean) => any;
  setOpacity?: (opacity: number) => any;
  setColor?: (color: string) => any;
}

const initialAppOverlayContext = {
  status: false,
  opacity: 0.5,
  color: 'black',
  setStatus: () => {},
  setOpacity: () => {},
  setColor: () => {},
} as AppOverlayInterface;

interface AppThemetInterface {
  name: string;
}

const initialAppThemeContext = {
  name: 'light',
} as AppThemetInterface;

export const AppThemeContext = React.createContext(initialAppThemeContext);

export const AppOverlayContext = React.createContext<AppOverlayInterface>(initialAppOverlayContext);

interface AppProviderProps {
  children?: React.ReactNode;
}
const AppProvider = ({ children }: AppProviderProps) => {
  const [opacityStatus, setOpacityStatus] = useState(initialAppOverlayContext.status);
  const [opacityValue, setOpacityValue] = useState(initialAppOverlayContext.opacity);
  const [opacityColor, setOpacityColor] = useState(initialAppOverlayContext.color);

  const appOverlayContextValue = useMemo(
    () => ({
      status: opacityStatus,
      opacity: opacityValue,
      color: opacityColor,
      setStatus: (opacityStatus: boolean) => {
        console.log('setOpacityStatus', opacityStatus);
        setOpacityStatus(opacityStatus);
      },
      setOpacity: (opacityValue: number) => setOpacityValue(opacityValue),
      setColor: (opacityColor: string) => setOpacityColor(opacityColor),
    }),
    [opacityStatus, opacityValue, opacityColor],
  );

  console.log('AppProvider re-rendered', appOverlayContextValue);
  return (
    <AppThemeContext.Provider value={initialAppThemeContext}>
      <AppOverlayContext.Provider value={appOverlayContextValue}>{children}</AppOverlayContext.Provider>
    </AppThemeContext.Provider>
  );
};

export default AppProvider;
