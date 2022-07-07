import "../styles/globals.css";
import type { AppProps } from "next/app";
import QuoteProvider from "../src/lib/context/quote/quote-provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QuoteProvider>
      <Component {...pageProps} />
    </QuoteProvider>
  );
}

export default MyApp;
