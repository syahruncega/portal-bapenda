/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import { fetchNewsBySlug, getNotionPage } from "@/lib/notion";
import { notFound } from "next/navigation";
import NotionPage from "./notion-renderer";
import NextImage from "next/image";
import { Button } from "@/app/components/ui/button";
import { IconBrandInstagram } from "@tabler/icons-react";

const Page: FC<{ params: { slug: string } }> = async ({ params }) => {
  const { slug } = await params;

  const post = await fetchNewsBySlug(slug);

  if (!post) {
    notFound();
  }

  const recordMap = await getNotionPage(post.id);
  const createdAt = new Date(post.properties.created.created_time as any);

  return (
    <article className="flex justify-center mt-30 mx-30">
      <div className="">
        <div className="grid grid-cols-5 gap-1 mb-10">
          <div className="flex justify-center col-span-3">
            <NextImage
              src={post.cover!.file.url}
              alt="cover"
              width={500}
              height={400}
            />
          </div>
          <div className="font-[Mona_Sans] flex items-center justify-center col-span-2">
            <div>
              <p className="text-4xl font-bold leading-10">
                {post.properties.title.title[0].plain_text}
              </p>
              <p className="mt-6 font-semibold">by Admin</p>
              <p className="font-medium text-gray-500">
                {createdAt.toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              {/* <div className="flex mt-4">
                <Button variant="outline" size="sm" className="rounded-full">
                  <IconBrandInstagram /> Share
                </Button>
              </div> */}
            </div>
          </div>
        </div>
        <NotionPage recordMap={recordMap} />
      </div>
    </article>
  );
};

export default Page;
