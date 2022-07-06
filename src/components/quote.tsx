import { FC } from "react";
import { Quote } from "../interfaces/quote.interface";

type Props = {
  quote: Quote;
};

const Quote: FC<Props> = ({ quote }) => {
  if (!quote) return <p>Cargando...</p>;
  return (
    <>
      <div className="mb-20 font-bold text-gray-700 text-xl border-l-4 border-l-yellow-500 pl-10">
        <p>
          {'"'}
          {quote.quoteText}
          {'"'}
        </p>
      </div>
      <div className="group  hover:bg-slate-800 w-full px-4 py-5 ml-4 flex items-center justify-between cursor-pointer">
        <div>
          <p className="text-md text-neutral-600 group-hover:text-neutral-100 font-semibold">
            {quote.quoteAuthor}
          </p>
          <p className="text-xs text-gray-400">{quote.quoteGenre}</p>
        </div>
        <div className="hidden group-hover:block text-lg text-neutral-100 ">
          →
        </div>
      </div>
    </>
  );
};

export default Quote;
