import React from 'react';

interface QuotesProps {
  quote: string;
  author: string;
}

const Quote = ({ quote, author }: QuotesProps) => {
  return (
    <div className="quote-container">
      <div className="quote">{quote}</div>
      <div className="author">{author}</div>
    </div>
  );
};

export default Quote;
