/* eslint-disable @typescript-eslint/no-explicit-any */
import NotionPage from "@/app/components/notion-renderer";
import { getNotionPage, getSinglePageBySlug } from "@/lib/notion";
import { notFound } from "next/navigation";

const Page = async () => {
  const post: any = await getSinglePageBySlug("visi-misi");

  if (!post) {
    notFound();
  }

  const recordMap = await getNotionPage(post.id);

  return (
    <article className="mt-40">
      <div className="max-w-3xl text-center mx-auto">
        <h2 className="text">{post?.properties.title.title[0].plain_text}</h2>
      </div>

      <div className="mt-14 text-justify">
        <NotionPage recordMap={recordMap} />
      </div>
    </article>
  );
};

export default Page;
