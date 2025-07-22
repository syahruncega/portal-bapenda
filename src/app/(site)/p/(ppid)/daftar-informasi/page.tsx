import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Daftar Informasi - PPID | BAPENDA",
};

const Page = () => {
  return (
    <article className="mt-40">
      <div className="max-w-3xl text-center mx-auto">
        <h2 className="text">Daftar Informasi</h2>
      </div>

      <div className="mt-14 flex justify-center mx-20">
        <Accordion
          type="single"
          collapsible
          className="w-3xl"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Rencana Strategis (RENSTRA)</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <Link
                href={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/uploads/RENSTRA_BAPENDA_2024_2026_cf4d2b600c.pdf`}
                target="_blank"
              >
                Renstra 2024-2026
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Rencana Kerja (RENJA)</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <Link
                href={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/uploads/RENJA_2025_BAPENDA_d60e3e5f04.pdf`}
                target="_blank"
              >
                Renja 2025
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </article>
  );
};

export default Page;
