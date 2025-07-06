/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React, { FC, useRef } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroContent: FC<{ data: any }> = ({ data }) => {
  const ref = useRef(null);

  const bottomAnimation = {
    initial: { y: "20%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, delay: 0.5 },
  };

  return (
    <div className="relative w-full mt-40 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10">
      <div className="container relative z-10">
        <div ref={ref} className="flex flex-col gap-8">
          {/* ---------------- heading text --------------- */}
          <motion.div {...bottomAnimation}>
            <Carousel
              opts={{ loop: true }}
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
            >
              <CarouselContent>
                {data?.map((item: any) => (
                  <CarouselItem key={item.id}>
                    <Image
                      src={item.properties.image.files[0].file.url}
                      alt={item.properties.title.title[0].plain_text}
                      width={2000}
                      height={500}
                      quality={100}
                      className="rounded-2xl border-2 border-white"
                      // placeholder="blur"
                      // blurDataURL={item.properties.image.files[0].file.url}
                      unoptimized={true}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="hidden lg:block lg:pl-2" />
              <CarouselNext className="hidden lg:block lg:pl-2" />
            </Carousel>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
