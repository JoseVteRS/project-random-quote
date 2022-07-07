import { Quote as IQuote } from "../../../interfaces/quote.interface";
import { QuoteState } from "./quote-provider";

type QuoteActionType = { type: "[Quote] Random quote"; payload: IQuote | undefined };

export const quoteReducer = (state: QuoteState, action: QuoteActionType): QuoteState => {
  switch (action.type) {
    case "[Quote] Random quote":
      return {
        ...state,
        quote: action.payload,
        
      };

    default:
      throw new Error("Action no match")
  }
};
