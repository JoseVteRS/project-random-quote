import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import Quote from "../src/components/quote";
import { Quote as IQuote } from "../src/interfaces/quote.interface";

type RandomQuoteProps = {
  randomQuote: IQuote;
};

const Home: NextPage<RandomQuoteProps> = ({ randomQuote }) => {

  return (
    <div className="grid place-content-center min-h-screen w-7/12 mx-auto">
      {randomQuote && <Quote quote={randomQuote} />}
    </div>
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
