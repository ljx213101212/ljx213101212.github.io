import React from 'react';
import styled from 'styled-components';
interface QuotesProps {
  quote: string;
  author: string;
}

const Quote = ({ quote, author }: QuotesProps) => {
  return (
    <QuoteContainer className="quote-container">
      <QuoteContent className="quote">{quote}</QuoteContent>
      <QuoteAuthor className="author">{`- ${author}`}</QuoteAuthor>
    </QuoteContainer>
  );
};

export default Quote;

const QuoteContainer = styled.div`
  font-style: italic;
`;

const QuoteContent = styled.div`
  font-size: 1.5rem;
`;
const QuoteAuthor = styled.div`
  font-size: 1.2rem;
  color: #111;
`;
