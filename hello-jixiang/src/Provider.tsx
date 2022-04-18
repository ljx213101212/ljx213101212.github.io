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
  headerHeight: number;
  setHeaderHeight: (height: number) => any;
}

const initialAppThemeContext = {
  name: 'light',
  headerHeight: 0,
  setHeaderHeight: () => {},
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

  const [headerHeight, setHeaderHeight] = useState(initialAppThemeContext.headerHeight);

  const appOverlayContextValue = useMemo(
    () => ({
      status: opacityStatus,
      opacity: opacityValue,
      color: opacityColor,
      setStatus: (opacityStatus: boolean) => {
        setOpacityStatus(opacityStatus);
      },
      setOpacity: (opacityValue: number) => setOpacityValue(opacityValue),
      setColor: (opacityColor: string) => setOpacityColor(opacityColor),
    }),
    [opacityStatus, opacityValue, opacityColor],
  );

  const appThemeContextValue = useMemo(
    () => ({
      ...initialAppThemeContext,
      headerHeight: headerHeight,
      setHeaderHeight: setHeaderHeight,
    }),
    [headerHeight],
  );

  return (
    <AppThemeContext.Provider value={appThemeContextValue}>
      <AppOverlayContext.Provider value={appOverlayContextValue}>{children}</AppOverlayContext.Provider>
    </AppThemeContext.Provider>
  );
};

export default AppProvider;
