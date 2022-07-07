import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useContext } from "react";
import Quote from "../src/components/quote/quote";
import Button from "../src/components/ui/button";
import RefreshIcon from "../src/icons/refresh-icon";
import { Quote as IQuote } from "../src/interfaces/quote.interface";
import MainLayout from "../src/layouts/main-layout";
import { QuoteContext } from "../src/lib/context/quote/quote-context";

type RandomQuoteProps = {
  randomQuote: IQuote;
};

const Home: NextPage<RandomQuoteProps> = ({ randomQuote }) => {
  const { quote, getRandomQuote } = useContext(QuoteContext);

  return (
    <MainLayout>
      <div className="flex flex-wrap justify-end gap-2">
        <input type="text" placeholder="Search by author" className="rounded-md border border-yellow-500/40  p-2 text-md text-neutral-700 w-full focus:outline-yellow-500 focus:shadow-md" />
        <Button onClick={getRandomQuote}>
          random <RefreshIcon />
        </Button>
      </div>
      <div className="grid place-content-center min-h-screen">
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
