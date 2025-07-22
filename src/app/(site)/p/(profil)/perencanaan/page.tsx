import Perencanaan from "./perencanaan.mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perencanaan | BAPENDA",
};

const Page = () => {
  return (
    <article className="mt-40">
      <div className="max-w-3xl text-center mx-auto">
        <h2 className="text">Perencanaan</h2>
      </div>

      <div className="mt-14 flex justify-center mx-20">
        <div className="text-justify prose lg:min-w-3xl">
          <Perencanaan />
        </div>
      </div>
    </article>
  );
};

export default Page;
