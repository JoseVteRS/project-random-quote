


import React, { FC } from 'react'
import { Quote as IQuote } from '../interfaces/quote.interface'

type Props = {
  quoteLight: IQuote;
};

const QuoteLight: FC<Props> = ({ quoteLight }) => {
  return (
    <div className="mb-20 font-semibold text-gray-700 text-xl border-l-4 border-l-yellow-500 pl-10">
      <p>
        {'"'}
        {quoteLight.quoteText}
        {'"'}
      </p>
    </div>
  );
};

export default QuoteLight