/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ content }: { content: any }) => {
  const { cover, properties } = content;
  const createdAt = new Date(properties.created.created_time);

  return (
    <Link href={`/berita/${properties.slug.rich_text[0].text.content}`}>
      <div className="group flex flex-col gap-4 xl:gap-10 border border-dark_black/10 p-6 2xl:p-10 rounded-2xl dark:bg-white/5 h-[410px] md:h-[410px] lg:h-[510px]">
        <div className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl shadow">
          <Image
            src={cover.file.url}
            alt={`img`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col ">
          {/* <p>{sub_title}</p> */}
          <h4 className="group-hover:text-purple_blue line-clamp-3">
            {properties.title.title[0].text.content}
          </h4>
        </div>
        <p>
          {createdAt.toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </Link>
  );
};

export default NewsCard;
