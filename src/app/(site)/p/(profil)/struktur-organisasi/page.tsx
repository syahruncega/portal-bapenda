/* eslint-disable @typescript-eslint/no-explicit-any */
import { getStrukturOrganisasi } from "@/lib/strapi";
import { Metadata } from "next";
import NextImage from "next/image";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Struktur Organisasi | BAPENDA",
};

const Page = async () => {
  const strukturOrganisasi: any = await getStrukturOrganisasi();

  if (!strukturOrganisasi) return notFound();

  console.log(strukturOrganisasi);

  return (
    <article className="mt-40">
      <div className="max-w-3xl text-center mx-auto">
        <h2 className="text">{strukturOrganisasi.data.title}</h2>
      </div>

      <div className="mt-14 flex justify-center mx-20">
        <NextImage
          src={`${strukturOrganisasi.data.image.url}`}
          alt={strukturOrganisasi.data.title}
          width={3236}
          height={1564}
        />
      </div>
    </article>
  );
};

export default Page;
