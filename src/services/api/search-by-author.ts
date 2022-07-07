import { API_URL } from "../../../constants/api";

export const searchQuoteByAuthor = async (query: string) => {
  const url = new URL(`${API_URL}/quotes`);
  url.searchParams.append("author", query);

  try {
    const res = await fetch(url, { method: "GET" });

    let quotesByAuthor;

    if(res.ok) quotesByAuthor = await res.json();

    return {
        quotesByAuthor,
        error: !res.ok
    }
  } catch (error) {
    return {
      hasError: true,
      error
    };
  }
};
