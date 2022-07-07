import { useRouter } from "next/router";
import { FC, useContext } from "react";
import RefreshIcon from "../icons/refresh-icon";
import { QuoteContext } from "../lib/context/quote/quote-context";

type Props = {
    children: any
}

const MainLayout: FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <main className="w-10/12  md:w-5/12 mx-auto py-8">{children}</main>
    </>
  );
};

export default MainLayout