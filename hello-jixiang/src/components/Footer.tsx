import React from 'react';


const Footer = ({ title, powered1, powered2 }: any) => {
  return <div className="container">
      <footer>
          <p className="powered-by"
          >
              © 2021 · Powered By the 
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener">tailwindcss</a>
              for
              <a href="https://reactjs.org/" target="_blank" rel="noopener">React</a>
          </p>
      </footer>
  </div>;
};

export default Footer;
