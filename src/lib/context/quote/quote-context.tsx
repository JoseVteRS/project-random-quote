import { createContext } from "react";
import { Quote } from "../../../interfaces/quote.interface";
import { QuoteState } from "./quote-provider";

interface ContextProps {
  quote?: Quote;
  // Methods
  getRandomQuote: () => Promise<{ hasError: boolean }>;
}

export const QuoteContext = createContext({} as ContextProps);
