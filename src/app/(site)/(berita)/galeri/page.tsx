import GalleryPreview from "@/app/components/home/gallery-preview";
import { getGaleris } from "@/lib/strapi";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Galeri | BAPENDA",
};

const Page = async () => {
  const galeri = await getGaleris();
  return (
    <div className="mt-20">
      <GalleryPreview data={galeri.data} />
    </div>
  );
};

export default Page;
