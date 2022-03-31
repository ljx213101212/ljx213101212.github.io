import React from 'react';
import { getCurrentYear } from 'utils/math';

const Footer = () => {
  return (
    <div className="bg-white shadow py-4 text-center">
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
