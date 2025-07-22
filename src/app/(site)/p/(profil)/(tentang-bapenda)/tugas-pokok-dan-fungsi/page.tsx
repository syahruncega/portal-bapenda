import { Metadata } from "next";
import TugasPokokDanFungsi from "./tugas-pokok-dan-fungsi.mdx";

export const metadata: Metadata = {
  title: "Tugas Pokok dan Fungsi | BAPENDA",
};

const Page = async () => {
  return (
    <article className="mt-40">
      <div className="max-w-3xl text-center mx-auto">
        <h2 className="text">Tugas Pokok dan Fungsi</h2>
      </div>

      <div className="mt-14 flex justify-center mx-20">
        <div className="text-justify text-base/8 prose lg:min-w-3xl">
          <TugasPokokDanFungsi />
        </div>
      </div>
    </article>
  );
};

export default Page;
