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
    transition: { duration: 0.3, delay: 1 },
  };

  return (
    <div ref={ref}>
      <div className="max-w-3xl text-center mx-auto">
        <motion.div {...bottomAnimation}>
          <h2 className="text">{post?.properties.title.title[0].plain_text}</h2>
        </motion.div>
      </div>
      <motion.div {...bottomAnimation}>
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
      </motion.div>
    </div>
  );
};

export default SambutanContent;
