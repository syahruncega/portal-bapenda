"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Sambutan from "../../../(site)/p/(profil)/kata-sambutan/sambutan.mdx";

const SambutanContent = () => {
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
          <h2 className="text-2xl md:text-4xl">Sambutan Kepala BAPENDA</h2>
        </motion.div>
      </div>
      <motion.div {...bottomAnimation}>
        <div className="lg:flex lg:justify-center mt-6 lg:mt-14 mx-auto">
          <div className="mx-auto max-w-[300px] mb-10 lg:mr-10 lg:ml-0">
            <Image
              src={`/images/home/kaban.png`}
              alt={"Kaban BAPENDA"}
              width={625}
              height={410}
              className="rounded-2xl"
              unoptimized={true}
              placeholder="blur"
              blurDataURL={`/images/home/kaban.png`}
            />
          </div>
          <div className="ml-10 text-justify max-w-2xl">
            <Sambutan />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SambutanContent;
