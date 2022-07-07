import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { ChangeEvent, useContext, useState } from "react";
import Quote from "../src/components/quote/quote";
import Button from "../src/components/ui/button";
import RefreshIcon from "../src/icons/refresh-icon";
import { Quote as IQuote } from "../src/interfaces/quote.interface";
import MainLayout from "../src/layouts/main-layout";
import { QuoteContext } from "../src/lib/context/quote/quote-context";
import { searchQuoteByAuthor } from "../src/services/api/search-by-author";

type RandomQuoteProps = {
  randomQuote: IQuote;
};

const Home: NextPage<RandomQuoteProps> = ({ randomQuote }) => {
  const { quote, getRandomQuote } = useContext(QuoteContext);
  const [quotes, setQuotesByAuthor] = useState([]);

  const handleSearch = async (query: string) => {
    const { quotesByAuthor } = await searchQuoteByAuthor(query);
    if (quotesByAuthor) setQuotesByAuthor(quotesByAuthor.data);
    if(query === "" ) setQuotesByAuthor([])
  };

  return (
    <MainLayout>
      <div className="flex flex-wrap justify-end gap-2">
        <input
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleSearch(event.target.value)
          }
          type="text"
          placeholder="Search by author"
          className="rounded-md border border-yellow-500/40  p-2 text-md text-neutral-700 w-full focus:outline-yellow-500 focus:shadow-md"
        />
        <button className="group hover:text-neutral-700 flex items-center gap-2 text-neutral-400" onClick={getRandomQuote}>
          random <RefreshIcon className="h-4 w-4 fill-neutral-400 group-hover:fill-neutral-700" />
        </button>
      </div>
      {quotes && quotes.length > 0 && (
        <div className=" rounded-xl shadow-lg shadow-neutral-500/30 hover:cursor-pointer h-72 overflow-y-scroll">
          {quotes.map((item: IQuote) => (
            <Link href={`/author/${item.quoteAuthor}`} key={item._id}>
              <div className="p-3 hover:bg-neutral-100">
                <p
                  className="text-md text-neutral-700 mb-1 font-bold"
                  title={item.quoteAuthor}
                >
                  {item.quoteAuthor}
                </p>
                <p
                  className="text-md text-neutral-500 truncate"
                  title={item.quoteText}
                >
                  {item.quoteText}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="grid place-content-center h-[85vh]">
        {randomQuote && quote == undefined && <Quote quote={randomQuote} />}
        {quote != undefined && <Quote quote={quote} />}
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const FETCH_OPTIONS = {
    method: "GET",
  };

  const response = await fetch(
    `https://quote-garden.herokuapp.com/api/v3/quotes/random`,
    FETCH_OPTIONS
  );

  const randomQuote = await response.json();

  return {
    props: {
      randomQuote: randomQuote.data[0],
    },
  };
};

export default Home;
