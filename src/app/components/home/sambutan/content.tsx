/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { FC, useRef } from "react";
import NotionPage from "../../notion-renderer";
import { motion, useInView } from "framer-motion";

const SambutanContent: FC<{ post: any; recordMap: any }> = ({
  post,
  recordMap,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const bottomAnimation = {
    initial: { y: "25%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "25%", opacity: 0 },
    transition: { duration: 0.3, delay: 0.7 },
  };

  return (
    <div ref={ref}>
      <div className="max-w-3xl text-center mx-auto mt-20 md:mt-2">
        <motion.div {...bottomAnimation}>
          <h2 className="text-2xl md:text-4xl">
            {post?.properties.title.title[0].plain_text}
          </h2>
        </motion.div>
      </div>
      <motion.div {...bottomAnimation}>
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
      </motion.div>
    </div>
  );
};

export default SambutanContent;
