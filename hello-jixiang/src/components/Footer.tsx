import React, { useEffect, useState } from 'react';
import { getCurrentYear } from 'utils/math';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { hex2rgba } from 'utils/math';
import { PRIMARY_COLOR_HEX } from 'constants';
interface FooterProps {
  isStickyBottom: boolean;
}

const Footer = ({ isStickyBottom }: FooterProps) => {
  return (
    <FooterContainer className={`bg-white shadow py-1 text-center w-full ${isStickyBottom ? 'fixed bottom-0' : ''}`}>
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
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: ${hex2rgba(`#${PRIMARY_COLOR_HEX}`, 0.5)};
`;
