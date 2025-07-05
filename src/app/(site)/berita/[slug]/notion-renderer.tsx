// components/NotionRenderer.tsx
"use client";

import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { ExtendedRecordMap } from "notion-types";
import "react-notion-x/src/styles.css";

// Dynamic import agar tidak crash saat SSR
const NotionRenderer = dynamic(
  () => import("react-notion-x").then((mod) => mod.NotionRenderer),
  { ssr: false }
);

type Props = {
  recordMap: ExtendedRecordMap;
};

export default function NotionPage({ recordMap }: Props) {
  const { theme } = useTheme();
  return (
    <div className="notion-container font-[Mona_Sans]">
      <NotionRenderer
        recordMap={recordMap}
        darkMode={theme === "dark" ? true : false}
      />
    </div>
  );
}
