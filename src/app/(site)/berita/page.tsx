import BeritaTerbaruContent from "@/app/components/home/berita-terbaru/content";
import { getBerita } from "@/lib/notion";
import React from "react";

const Page = async () => {
  const data = await getBerita();
  return (
    <div className="mt-20">
      <BeritaTerbaruContent data={data.results} />;
    </div>
  );
};

export default Page;
