import GalleryPreviewContent from "@/app/components/home/gallery-preview/content";
import { getGaleri } from "@/lib/notion";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Galeri | BAPENDA",
};

const Page = async () => {
  const data = await getGaleri();
  return (
    <div className="mt-20">
      <GalleryPreviewContent data={data.results} />
    </div>
  );
};

export default Page;
