import React, { useEffect, useState } from 'react';
import { getCurrentYear } from 'utils/math';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface FooterProps {
  isStickyBottom: boolean;
}

const Footer = ({ isStickyBottom }: FooterProps) => {
  return (
    <div className={`bg-white shadow py-4 text-center w-full ${isStickyBottom ? 'fixed bottom-0' : ''}`}>
      <footer>
        <p className="powered-by">
          © {getCurrentYear()} · Powered By the
          <a href="https://tailwindcss.com/" target="_blank" rel="noopener">
            tailwindcss
          </a>
          {' for '}
          <a href="https://reactjs.org/" target="_blank" rel="noopener">
            React
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
