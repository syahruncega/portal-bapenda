/* eslint-disable @typescript-eslint/no-explicit-any */
import NotionPage from "@/app/components/notion-renderer";
import { getNotionPage, getSinglePageBySlug } from "@/lib/notion";
import Image from "next/image";
import { notFound } from "next/navigation";

const Page = async () => {
  const post: any = await getSinglePageBySlug("sambutan");

  if (!post) {
    notFound();
  }

  const recordMap = await getNotionPage(post.id);

  return (
    <article className="mt-40">
      <div className="max-w-3xl text-center mx-auto">
        <h2 className="text">{post?.properties.title.title[0].plain_text}</h2>
      </div>

      <div className="flex justify-center mt-14  mx-auto">
        <div className="max-w-[300px] mr-10">
          <Image
            src={post!.properties.avatar.files[0].file.url}
            alt={post!.properties.title.title[0].plain_text}
            width={625}
            height={410}
            className="rounded-2xl"
            unoptimized={true}
            placeholder="blur"
            blurDataURL={post!.properties.avatar.files[0].file.url}
          />
        </div>
        <div className="ml-10 text-justify">
          <NotionPage recordMap={recordMap} />
        </div>
      </div>
    </article>
  );
};

export default Page;
