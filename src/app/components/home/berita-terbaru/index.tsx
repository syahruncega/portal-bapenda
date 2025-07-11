"use client";
import { CalendarIcon } from "lucide-react";
import React, { FC, useRef } from "react";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import Link from "next/link";
import { ScrollArea } from "../../ui/scroll-area";
import { usePathname } from "next/navigation";
import { motion, useInView } from "framer-motion";
import CardNews from "./card-news";

const BeritaTerbaru: FC<{ data: any }> = ({ data }) => {
  const pathname = usePathname();

  const ref = useRef(null);
  const inView = useInView(ref);

  const bottomAnimation = (index: any) => ({
    initial: { y: "5%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "10%", opacity: 0 },
    transition: { duration: 0.4, delay: 0.4 + index * 0.3 },
  });

  return (
    <div ref={ref} className="2xl:py-20 py-11">
      <div className="max-w-3xl text-center mx-auto mb-20 ">
        <motion.div {...bottomAnimation(0)}>
          <h2>Berita</h2>
        </motion.div>
      </div>

      <motion.div {...bottomAnimation(1)}>
        <div className="flex flex-col items-center lg:flex-row justify-center ">
          <div className="max-w-[540px] max-h-[600px] rounded-3xl overflow-hidden">
            <Carousel className="">
              <CarouselContent>
                {data.map((item, index) => (
                  <CarouselItem key={item.id}>
                    <CardNews content={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition" />
            </Carousel>
          </div>
          <div className="p-4 max-w-[540px] lg:max-w-[400px]">
            <ScrollArea
              className={`flex flex-col  ${
                pathname === "/berita" ? "h-[560px]" : "h-[500px]"
              } px-5`}
            >
              {data.map((item, index) => {
                const createdAt = new Date(
                  item.properties.created.created_time
                );
                return (
                  <Link
                    href={`/berita/${item.properties.slug.rich_text[0].text.content}`}
                    key={item.id}
                    className="mb-2"
                  >
                    <div className="p-2 hover:bg-blue-100 rounded-xl">
                      <Badge className="mb-2">Samsat</Badge>
                      <div className="text-md font-medium mb-2">
                        {item.properties.title.title[0].text.content}
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
                        {/* <Separator orientation="vertical" className="mr-3 bg-white" />
                  <User2Icon size={14} className="mr-3" />
                  <div className="">Admin</div> */}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </ScrollArea>
            {pathname !== "/berita" && (
              <div className="mt-10 flex flex-col justify-end">
                <Button
                  variant={"outline"}
                  className="bg-transparent"
                  size={"sm"}
                  asChild
                >
                  <Link href={"/berita"}>Lihat lebih banyak berita</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BeritaTerbaru;
