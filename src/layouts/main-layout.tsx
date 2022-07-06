import { useRouter } from "next/router";
import { FC } from "react";
import RefreshIcon from "../icons/refresh-icon";

type Props = {
    children: any
}

const MainLayout: FC<Props> = ({ children }) => {

    const router = useRouter()

  return (
    <>
      <button onClick={()=> router.prefetch} className="flex gap-2 items-center text-xs text-neutral-500">
        random <RefreshIcon className="h-4 w-5 fill-neutral-500" />
      </button>
      <main className="w-10/12  md:w-5/12 mx-auto py-20">{children}</main>
    </>
  );
};

export default MainLayout