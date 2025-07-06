/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { FC, useRef } from "react";
import FancyButton from "../../ui/fancy-button";
import { usePathname } from "next/navigation";
import { motion, useInView } from "framer-motion";

const GalleryPreviewContent: FC<{ data: any }> = ({ data }) => {
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
      <div className="container">
        <div className="flex flex-col gap-10 md:gap-10">
          <div className="max-w-3xl text-center mx-auto mb-10">
            <motion.div {...bottomAnimation(0)}>
              <h2>Galeri</h2>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-8">
            {data?.map((items: any, index: any) => {
              return (
                <motion.div {...bottomAnimation(index)} key={items.id}>
                  <div
                    key={index}
                    className="group flex flex-col gap-6 cursor-pointer"
                  >
                    <div className="relative ">
                      <Image
                        src={items.cover.file.url}
                        alt={items.properties.title.title[0].plain_text}
                        width={625}
                        height={410}
                        className="rounded-2xl"
                        unoptimized={true}
                      />

                      {/* Overlay div */}
                      <Link
                        href={`/galeri/${items.properties.slug.rich_text[0].plain_text}`}
                        className="absolute top-0 left-0 bg-black/50 w-full h-full rounded-2xl hidden group-hover:flex"
                      >
                        <span className="flex justify-end p-5 w-full">
                          <Icon
                            icon="icon-park-solid:circle-right-up"
                            width="50"
                            height="50"
                            style={{ color: "#fbfbfb" }}
                          />
                        </span>
                      </Link>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                      <h5 className="group-hover:text-purple_blue">
                        {items.properties.title.title[0].plain_text}
                      </h5>
                      <div className="flex gap-3">
                        {items.properties.tags.multi_select?.map((tag: any) => (
                          <p
                            key={tag.id}
                            className="text-sm border border-dark_black/10 dark:border-white/50 w-fit py-1.5 px-4 rounded-full hover:bg-dark_black hover:text-white"
                          >
                            {tag.name}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          {pathname === "/" && (
            <div className="flex justify-center">
              <FancyButton label="Lihat lebih banyak" href="/galeri" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryPreviewContent;
