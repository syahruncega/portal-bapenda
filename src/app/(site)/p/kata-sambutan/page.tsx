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
      <div className="max-w-3xl text-center mx-auto mt-20 md:mt-2">
        <h2 className="text-2xl md:text-4xl">
          {post?.properties.title.title[0].plain_text}
        </h2>
      </div>
      <div className="lg:flex lg:justify-center mt-6 lg:mt-14 mx-auto">
        <div className="mx-auto max-w-[300px] mb-10 lg:mr-10 lg:ml-0">
          <Image
            src={`/api/notion-image?url=${encodeURIComponent(
              post!.properties.avatar.files[0].file.url
            )}`}
            alt={post!.properties.title.title[0].plain_text}
            width={625}
            height={410}
            className="rounded-2xl"
            unoptimized={true}
            placeholder="blur"
            blurDataURL={`/api/notion-image?url=${encodeURIComponent(
              post!.properties.avatar.files[0].file.url
            )}`}
          />
        </div>
        <div className="ml-10 text-justify mx-4">
          <NotionPage recordMap={recordMap} />
        </div>
      </div>
    </article>
  );
};

export default Page;
