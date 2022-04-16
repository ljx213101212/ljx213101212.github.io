import React from 'react';
import styled from 'styled-components';

const WithOverlay = (
  WrappedComponent: React.ComponentType,
  overlayStatus: boolean,
  overlayColor: string,
  overlayOpacity: number,
) => {
  return (
    <>
      {overlayStatus && <Overlay color={overlayColor} opacity={overlayOpacity} />}
      <WrappedComponent />
    </>
  );
};

export default WithOverlay;

interface OverlayProps {
  color: string;
  opacity: number;
}

const Overlay = styled.div<OverlayProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${(p) => p.color};
  opacity: ${(p) => p.opacity};
  z-index: 1;
  pointer-events: none;
`;
