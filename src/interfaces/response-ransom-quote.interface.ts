import { Pagination } from "./pagination.interface";
import { Quote } from "./quote.interface";

export interface RansomQuote {
  statusCode: number;
  message: string;
  pagination: Pagination;
  totalQuotes: number;
  data: Quote[];
}
