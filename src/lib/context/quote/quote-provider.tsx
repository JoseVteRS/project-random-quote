import { FC, ReactNode, useReducer } from "react";
import { Quote } from "../../../interfaces/quote.interface";
import { QuoteContext } from "./quote-context";
import { quoteReducer } from "./quote-reducer";

export interface QuoteState {
  quote?: Quote | undefined;
}

const QUOTE_INITIAL_STATE: QuoteState = {
  quote: undefined,
};

type Props = {
  children: ReactNode | ReactNode[];
};

const QuoteProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(quoteReducer, QUOTE_INITIAL_STATE);

  const getRandomQuote = async (): Promise<{ hasError: boolean }> => {
    try {
      const res = await fetch(
        `https://quote-garden.herokuapp.com/api/v3/quotes/random`,
        { method: "GET" }
      );
      const randomQuote = await res.json();
      dispatch({ type: "[Quote] Random quote", payload: randomQuote.data[0] });
      return {
        hasError: false,
      };
    } catch (error) {
      return {
        hasError: true,
      };
    }
  };

  return (
    <QuoteContext.Provider
      value={{
        ...state,
        getRandomQuote,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export default QuoteProvider;
