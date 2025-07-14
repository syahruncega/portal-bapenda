/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import { Badge } from "../../ui/badge";
import { CalendarIcon, User2Icon } from "lucide-react";
import { Separator } from "../../ui/separator";
import { Button } from "../../ui/button";
import Link from "next/link";

const CardNews = ({ content }: { content: any }) => {
  const { cover, properties } = content;

  const createdAt = new Date(properties.created.created_time);
  return (
    <div className="relative aspect-[1/1.12] overflow-hidden rounded-2xl shadow flex flex-col justify-end">
      <Image
        src={`/api/notion-image?url=${encodeURIComponent(cover.file.url)}`}
        alt={`img`}
        fill
        className="object-cover"
        sizes="(max-width: 540px) 100vw, 50vw"
      />
      <div className="text-white z-10 bg-black/40 backdrop-blur-sm aspect-[2.25/1] py-4 px-8">
        <div className="flex space-x-3 mb-2">
          <Badge>Samsat</Badge>
        </div>
        <div className="text-2xl font-semibold line-clamp-3 mb-2">
          {properties.title.title[0].text.content}
        </div>
        <div className="flex h-5 items-center space-x-4 text-xs">
          <CalendarIcon size={14} className="mr-3" />
          <div className="mr-3">
            {createdAt.toLocaleDateString("id-ID", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </div>
          <Separator orientation="vertical" className="mr-3 bg-white" />
          <User2Icon size={14} className="mr-3" />
          <div className="">Admin</div>
        </div>
        <Button
          variant={"outline"}
          className="bg-transparent mt-3 hover:bg-white/20 hover:text-white"
          size={"sm"}
          asChild
        >
          <Link href={`/berita/${properties.slug.rich_text[0].text.content}`}>
            Baca Selengkapnya
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CardNews;
