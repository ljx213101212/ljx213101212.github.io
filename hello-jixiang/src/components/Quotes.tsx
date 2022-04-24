import React, { useEffect, useRef, useState } from 'react';
import { default as QuoteComponent } from './libs/Quote';

interface QuotesProps {
  quotes: Quote[];
  delayInMilisecond: number;
}

const Quotes = ({ quotes, delayInMilisecond: delay }: QuotesProps) => {
  const intervalHandlerCallback = useRef(() => {});
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalHandlerCallback.current = intervalHandler;
  });

  useEffect(() => {
    let id = setInterval(() => {
      intervalHandlerCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, []);

  const intervalHandler = () => {
    const nextIndex = (index + 1) % quotes.length;
    setIndex(nextIndex);
  };

  return (
    <div className="flex justify-center w-full p-4">
      {quotes.length > 0 && <QuoteComponent quote={quotes[index].quote} author={quotes[index].author} />}
    </div>
  );
};

export default Quotes;
