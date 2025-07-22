import { Metadata } from "next";
import KebijakanPrivasi from "./kebijakan-privasi.mdx";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | BAPENDA",
};

const Page = async () => {
  return (
    <article className="mt-40">
      <div className="max-w-3xl text-center mx-auto">
        <h2 className="text">Kebijakan Privasi</h2>
      </div>

      <div className="mt-14 flex justify-center mx-20">
        <div className="text-justify text-base/8 prose lg:min-w-3xl">
          <KebijakanPrivasi />
        </div>
      </div>
    </article>
  );
};

export default Page;
