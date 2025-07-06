/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import NewsCard from "./NewsCard";
import FancyButton from "../../ui/fancy-button";
import { usePathname } from "next/navigation";

const BeritaTerbaruContent: FC<{ data: any }> = ({ data }) => {
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
              <h2>Berita Terbaru</h2>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {data?.map((item: any, index: any) => {
              return (
                <motion.div {...bottomAnimation(index)} key={item.id}>
                  <NewsCard key={index} content={item} />
                </motion.div>
              );
            })}
          </div>
          {pathname === "/" && (
            <div className="flex justify-center">
              <FancyButton label="Lihat lebih banyak" href="/berita" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BeritaTerbaruContent;
