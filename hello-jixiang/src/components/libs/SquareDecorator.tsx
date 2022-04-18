import React from 'react';
import styled from 'styled-components';
import { getDecimalFromHex, getHexFromDecimal, hex2rgba } from 'utils/math';

interface SquareDecoratorProps {
  row: number;
  col: number;
  colorStart: string;
  colorEnd: string;
}

const SquareDecorator = ({ row, col, colorStart, colorEnd }: SquareDecoratorProps) => {
  const operator = React.useMemo(
    () => (getDecimalFromHex(colorStart) - getDecimalFromHex(colorEnd) >= 0 ? -1 : 1),
    [colorStart, colorEnd],
  );

  const getHexColorRGBDelta = (
    curRow: number,
    curCol: number,
    colorHexStrStart: string,
    colorHexStrEnd: string,
  ): number => {
    const diagonalLength = Math.hypot(row, col);
    const diagonalHexDecimal = Math.abs(getDecimalFromHex(colorHexStrStart) - getDecimalFromHex(colorHexStrEnd));
    const diagonalCurrentStartLength = Math.hypot(curRow, curCol);

    const deltaHexDecimal = Math.floor((diagonalCurrentStartLength / diagonalLength) * diagonalHexDecimal);
    console.log(diagonalCurrentStartLength, diagonalLength, diagonalHexDecimal, deltaHexDecimal);
    return operator * deltaHexDecimal;
  };

  const getHexColorStart = (row: number, col: number): string => {
    const R_START = colorStart.substring(0, 2),
      R_END = colorEnd.substring(0, 2);
    const G_START = colorStart.substring(2, 4),
      G_END = colorEnd.substring(2, 4);
    const B_START = colorStart.substring(4, 6),
      B_END = colorEnd.substring(4, 6);

    console.log(R_START, R_END, getHexColorRGBDelta(row, col, R_START, R_END));

    const R = Math.abs(getDecimalFromHex(R_START) + getHexColorRGBDelta(row, col, R_START, R_END));
    const G = Math.abs(getDecimalFromHex(G_START) + getHexColorRGBDelta(row, col, G_START, G_END));
    const B = Math.abs(getDecimalFromHex(B_START) + getHexColorRGBDelta(row, col, B_START, B_END));

    return `#${getHexFromDecimal(R)}${getHexFromDecimal(G)}${getHexFromDecimal(B)}`;
  };
  return (
    <SquareDecoratorWrapper>
      {Array(row)
        .fill('')
        .map((_value, i) => (
          <div style={{ display: 'flex' }}>
            {Array(col)
              .fill('')
              .map((_value, j) => (
                <SquareDecoration
                  deg={'45deg'}
                  startColor={getHexColorStart(row - i - 1, j)}
                  endColor={getHexColorStart(row - i, j + 1)}
                ></SquareDecoration>
              ))}
          </div>
        ))}
    </SquareDecoratorWrapper>
  );
};

export default SquareDecorator;

const SquareDecoratorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface SquareDecorationProps {
  startColor: string;
  endColor: string;
  deg: string;
}

const SquareDecoration = styled.div<SquareDecorationProps>`
  width: 4rem;
  height: 4rem;
  background: linear-gradient(${(p) => p.deg}, ${(p) => p.startColor}, ${(p) => p.endColor});
  margin: 1.2rem;
  border-radius: 15%;
`;
