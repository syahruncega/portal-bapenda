import Image from "next/image";
import Sambutan from "./sambutan.mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kata Sambutan | BAPENDA",
};

const Page = async () => {
  return (
    <article className="mt-40">
      <div className="max-w-3xl text-center mx-auto mt-20 md:mt-2">
        <h2 className="text-2xl md:text-4xl">Kata Sambutan</h2>
      </div>
      <div className="lg:flex lg:justify-center mt-6 lg:mt-14 mx-auto">
        <div className="mx-auto max-w-[300px] mb-10 lg:mr-10 lg:ml-0">
          <Image
            src={`/images/home/kaban.png`}
            alt={"Kaban BAPENDA"}
            width={625}
            height={410}
            className="rounded-2xl"
            unoptimized={true}
            placeholder="blur"
            blurDataURL={`/images/home/kaban.png`}
          />
        </div>
        <div className="ml-10 text-justify max-w-2xl">
          <Sambutan />
        </div>
      </div>
    </article>
  );
};

export default Page;
