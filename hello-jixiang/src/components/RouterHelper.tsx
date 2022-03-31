import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { EVENTS } from 'constants';

const RouterHelper = () => {
  let location = useLocation();

  useEffect(() => {
    setTimeout(() => window.dispatchEvent(new CustomEvent(EVENTS.ROUTER_LOCATION_CHANGED)));
  }, [location]);
  return <></>;
};

export default RouterHelper;
