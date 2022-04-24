import { AppThemeContext } from 'Provider';
import React, { useContext } from 'react';
import styled from 'styled-components';
import infiniteSVG from 'assets/icons/infinite.svg';
import SquareDecorator from 'components/libs/SquareDecorator';

const FirstImpression = () => {
  const appThemeContext = useContext(AppThemeContext);

  return (
    <FirstImpressionContainer headerHeight={appThemeContext.headerHeight}>
      <div>
        <FirstImage src={infiniteSVG}></FirstImage>
        <div>Hi, I am Jixiang</div>
      </div>

      <SquareDecorationWrapper className="hidden lg:block" top={'0px'} right={'0px'}>
        <SquareDecorator row={5} col={5} colorStart={'89abe3'} colorEnd={'ffffff'}></SquareDecorator>
      </SquareDecorationWrapper>

      <SquareDecorationWrapper className="hidden lg:block" bottom={'0px'} left={'0px'}>
        <SquareDecorator row={5} col={5} colorStart={'ffffff'} colorEnd={'89abe3'}></SquareDecorator>
      </SquareDecorationWrapper>
    </FirstImpressionContainer>
  );
};

export default FirstImpression;

interface FirstImpressionContainerProps {
  headerHeight: number;
}

const FirstImpressionContainer = styled.div<FirstImpressionContainerProps>`
  width: 100%;
  height: calc(100vh - ${(p) => p.headerHeight}px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const FirstImage = styled.img`
  max-width: 12rem;
  max-height: 12rem;
`;

interface SquareDecorationWrapper {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}
const SquareDecorationWrapper = styled.div<SquareDecorationWrapper>`
  position: absolute;
  top: ${(p) => p.top ?? 'initial'};
  bottom: ${(p) => p.bottom ?? 'initial'};
  left: ${(p) => p.left ?? 'initial'};
  right: ${(p) => p.right ?? 'initial'};
`;
