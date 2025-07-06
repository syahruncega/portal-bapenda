/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { getBeritaBySlug, getNotionPage } from "@/lib/notion";
import { notFound } from "next/navigation";
import NextImage from "next/image";
import { Button } from "@/app/components/ui/button";
import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconLink,
} from "@tabler/icons-react";
import NotionPage from "@/app/components/notion-renderer";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function generateMetadata(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const slug = params.slug;
  const query = searchParams.query;
}

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const slug = params.slug;
  const query = searchParams.query;

  const post: any = await getBeritaBySlug(slug);

  if (!post) {
    notFound();
  }

  const recordMap = await getNotionPage(post.id);
  const createdAt = new Date(post.properties.created?.created_time);

  return (
    <article className="flex justify-center mt-40 mx-30">
      <div className="">
        <div className="grid grid-cols-5 gap-1 mb-10">
          <div className="flex justify-center col-span-3">
            <NextImage
              src={post.cover?.file.url}
              alt="cover"
              width={500}
              height={400}
            />
          </div>
          <div className="font-[Mona_Sans] flex items-center justify-center col-span-2">
            <div>
              <p className="text-4xl font-bold leading-10">
                {post.properties.title?.title[0].plain_text}
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
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full mr-2"
                >
                  <IconBrandInstagram /> Share
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full mr-2"
                >
                  <IconBrandWhatsapp /> Share
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <IconLink /> Copy
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-justify">
          <NotionPage recordMap={recordMap} />
        </div>
      </div>
    </article>
  );
}
