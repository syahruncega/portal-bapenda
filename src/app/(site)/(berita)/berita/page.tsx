import BeritaTerbaru from "@/app/components/home/berita-terbaru";
import { getBeritas } from "@/lib/strapi";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Berita | BAPENDA",
};

const Page = async () => {
  const data = await getBeritas();

  return (
    <div className="mt-20">
      <BeritaTerbaru data={data.data} />;
    </div>
  );
};

export default Page;
