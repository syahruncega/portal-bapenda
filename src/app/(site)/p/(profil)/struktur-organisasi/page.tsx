import { Metadata } from "next";
import NextImage from "next/image";

export const metadata: Metadata = {
  title: "Struktur Organisasi | BAPENDA",
};

const Page = () => {
  return (
    <article className="mt-40">
      <div className="max-w-3xl text-center mx-auto">
        <h2 className="text">Struktur Organisasi</h2>
      </div>

      <div className="mt-14 flex justify-center mx-20">
        <NextImage
          src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/uploads/Frame_6_2ffce2298c.png`}
          alt="Struktur Organisasi"
          width={3236}
          height={1564}
        />
      </div>
    </article>
  );
};

export default Page;
