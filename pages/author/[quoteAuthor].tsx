import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Quote from "../../src/components/quote";
import QuoteLight from "../../src/components/quote-light";
import { Quote as IQuote } from "../../src/interfaces/quote.interface";
import MainLayout from "../../src/layouts/main-layout";

type Props = {
  quotesByAuthor: IQuote[];
};

const QuotesByAuthorPage = ({ quotesByAuthor }: Props) => {
  const router = useRouter();

  if (!quotesByAuthor || !router) return <div>Loading quotes...</div>;

  return (
    <MainLayout>
      <h1 className="pl-12 text-xl font-semibold text-gray-700  mb-20">
        {router.query.quoteAuthor}
      </h1>
      <div>
        {quotesByAuthor.map((quote) => {
          return <QuoteLight key={quote._id} quoteLight={quote} />;
        })}
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { quoteAuthor } = ctx.params;

  const res = await fetch(
    `https://quote-garden.herokuapp.com/api/v3/quotes?author=${quoteAuthor}`
  );

  const quotesByAuthor = await res.json();

  return {
    props: {
      quotesByAuthor: quotesByAuthor.data,
    },
  };
};

export default QuotesByAuthorPage;
