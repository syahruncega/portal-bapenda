import GalleryPreviewContent from "@/app/components/home/gallery-preview/content";
import { getGaleri } from "@/lib/notion";
import React from "react";

const Page = async () => {
  const data = await getGaleri();
  return (
    <div className="mt-20">
      <GalleryPreviewContent data={data.results} />
    </div>
  );
};

export default Page;
