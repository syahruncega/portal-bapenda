import React, { FC } from "react";
import { fetchNewsBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import { notFound } from "next/navigation";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";

const Page: FC<{ params: { slug: string } }> = async ({ params }) => {
  const { slug } = await params;

  const post = await fetchNewsBySlug(slug);

  if (!post) {
    notFound();
  }
  const blocks = await fetchPageBlocks(post.id);

  console.log(blocks);

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...blocks);

  return (
    <div className="pt-30 px-30">
      <div className="prose" dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};

export default Page;
