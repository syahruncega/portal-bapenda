/* eslint-disable @typescript-eslint/no-explicit-any */

import { getSinglePageBySlug } from "@/lib/notion";
import { notFound } from "next/navigation";
import NextImage from "next/image";

const Page = async () => {
  const post: any = await getSinglePageBySlug("struktur-organisasi");

  if (!post) {
    notFound();
  }

  return (
    <article className="mt-40">
      <div className="max-w-3xl text-center mx-auto">
        <h2 className="text">{post?.properties.title.title[0].plain_text}</h2>
      </div>

      <div className="mt-14 flex justify-center">
        <NextImage
          //   src={`/api/notion-image?url=${encodeURIComponent(
          //     post.properties?.avatar.files[0].file.url
          //   )}`}
          src={post.properties?.avatar.files[0].file.url}
          alt="cover"
          width={1200}
          height={400}
        />
      </div>
    </article>
  );
};

export default Page;
