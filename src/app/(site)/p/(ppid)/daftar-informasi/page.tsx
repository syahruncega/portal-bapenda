import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { Dot } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Daftar Informasi - PPID | BAPENDA",
};

const items = [
  {
    id: "1",
    title: "Rencana Strategis (RENSTRA)",
    contents: [
      {
        label: "Renstra 2024-2026",
        href: `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/uploads/RENSTRA_BAPENDA_2024_2026_cf4d2b600c.pdf`,
      },
    ],
  },
  {
    id: "2",
    title: "Rencana Kerja (RENJA)",
    contents: [
      {
        label: "Renja 2025",
        href: `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/uploads/RENJA_2025_BAPENDA_d60e3e5f04.pdf`,
      },
    ],
  },
  {
    id: "3",
    title: "LAKIP",
    contents: [
      {
        label: "Lakip 2024",
        href: `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/uploads/LAKIP_BAPENDA_2024_3fc13ed528.pdf`,
      },
    ],
  },
];

const Page = () => {
  return (
    <article className="mt-40">
      <div className="max-w-3xl text-center mx-auto">
        <h2 className="text">Daftar Informasi</h2>
      </div>

      <div className="mt-14 flex justify-center mx-10">
        <Accordion
          type="single"
          collapsible
          className="space-y-2 lg:w-3xl"
          defaultValue="3"
        >
          {items.map((item) => (
            <AccordionItem
              value={item.id}
              key={item.id}
              className="bg-background mt-2 has-focus-visible:border-ring has-focus-visible:ring-ring/50 rounded-md border px-4 py-1 outline-none last:border-b has-focus-visible:ring-[3px]"
            >
              <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline focus-visible:ring-0">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-2">
                {item.contents.map((content) => (
                  <div key={content.label} className="flex space-y-2">
                    <Dot />
                    <Link href={content.href} className="" target="_blank">
                      {content.label}
                    </Link>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </article>
  );
};

export default Page;
