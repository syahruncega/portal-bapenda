/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { notFound } from "next/navigation";
import NextImage from "next/image";
import { Button } from "@/app/components/ui/button";
import { IconBrandWhatsapp, IconLink } from "@tabler/icons-react";
import { getGaleriBySlug, getGaleris } from "@/lib/strapi";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const dynamicParams = true;
export const revalidate = 1200;

type Params = Promise<{ slug: string }>;
// type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

// export async function generateMetadata(props: {
//   params: Params;
//   searchParams: SearchParams;
// }) {
//   const params = await props.params;
//   const searchParams = await props.searchParams;
//   const slug = params.slug;
//   const query = searchParams.query;
// }

export async function generateStaticParams() {
  const galeri: any = await getGaleris();
  return galeri.data.map((item: any) => ({
    slug: item.slug,
  }));
}

export default async function Page(props: {
  params: Params;
  // searchParams: SearchParams;
}) {
  const params = await props.params;
  const slug = params.slug;

  const galeri: any = await getGaleriBySlug(slug);

  if (!galeri) return notFound();

  const createdAt = new Date(galeri.data[0].createdAt);

  return (
    <article className="mt-40 mx-10 md:mx-18 lg:mx-30">
      <div className="lg:grid lg:grid-cols-5 lg:gap-1 mb-10">
        <div className="flex justify-center lg:col-span-3">
          <NextImage
            src={`${process.env.STRAPI_BASE_URL}${galeri.data[0].cover.url}`}
            alt="cover"
            width={500}
            height={400}
          />
        </div>
        <div className="font-[Mona_Sans] flex items-center justify-center lg:col-span-2">
          <div>
            <p className="text-lg md:text-2xl lg:text-4xl mt-10 lg:mt-0 font-bold leading-6 md:leading-8 lg:leading-10 justify-center">
              {galeri.data[0].title}
            </p>
            <p className="mt-6 font-semibold">by Admin</p>
            <p className="font-medium text-gray-500">
              {createdAt.toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
            <div className="mt-4">
              {/* <Button variant="outline" size="sm" className="rounded-full mr-2">
                <IconBrandInstagram /> Share
              </Button> */}
              <Button variant="outline" size="sm" className="rounded-full mr-2">
                <IconBrandWhatsapp /> Share
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <IconLink /> Copy
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-justify -mx-6">
        <div className="text-justify -mx-6 prose lg:prose-xl">
          {galeri.data[0].blocks.map((block: any) => (
            <BlocksRenderer key={block.id} content={block.body} />
          ))}
        </div>
      </div>
    </article>
  );
}
