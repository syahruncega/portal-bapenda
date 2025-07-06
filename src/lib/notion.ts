// import "server-only";
import { Client, PageObjectResponse } from "@notionhq/client";
import React from "react";

import { NotionAPI } from "notion-client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN!,
});

export const getBerita = React.cache(() => {
  return notion.databases.query({
    database_id: process.env.NOTION_ID_BERITA!,
    sorts: [{ direction: "descending", timestamp: "created_time" }],
    filter: {
      property: "status",
      status: {
        equals: "Live",
      },
    },
  });
});

export const getBeritaBySlug = React.cache((slug: string) => {
  return notion.databases
    .query({
      database_id: process.env.NOTION_ID_BERITA!,
      filter: {
        property: "slug",
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const getGaleri = React.cache(() => {
  return notion.databases.query({
    database_id: process.env.NOTION_ID_GALERI!,
    sorts: [{ direction: "descending", timestamp: "created_time" }],
    filter: {
      property: "status",
      status: {
        equals: "Live",
      },
    },
  });
});
export const getSlider = React.cache(() => {
  return notion.databases.query({
    database_id: process.env.NOTION_ID_SLIDER!,
    sorts: [{ direction: "ascending", timestamp: "created_time" }],
    filter: {
      property: "status",
      status: {
        equals: "Live",
      },
    },
  });
});

export const getGaleriBySlug = React.cache((slug: string) => {
  return notion.databases
    .query({
      database_id: process.env.NOTION_ID_GALERI!,
      filter: {
        property: "slug",
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const getSinglePageBySlug = React.cache((slug: string) => {
  return notion.databases
    .query({
      database_id: process.env.NOTION_ID_SINGLE_PAGE!,
      filter: {
        property: "slug",
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});

// export const getPageBlocks = React.cache((pageId: string) => {
//   return notion.blocks.children
//     .list({
//       block_id: pageId,
//     })
//     .then((res) => res.results as BlockObjectResponse[]);
// });

const api = new NotionAPI({
  authToken: process.env.NOTION_TOKEN!, // Ini penting untuk private page
});

export const getNotionPage = async (pageId: string) => {
  const recordMap = await api.getPage(pageId);
  return recordMap;
};
