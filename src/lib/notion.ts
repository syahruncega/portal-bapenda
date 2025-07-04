// import "server-only";
import {
  BlockObjectResponse,
  Client,
  PageObjectResponse,
} from "@notionhq/client";
import React from "react";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN!,
});

export const fetchNews = React.cache(() => {
  return notion.databases.query({
    database_id: process.env.NOTION_DB_ID!,
    sorts: [{ direction: "ascending", timestamp: "created_time" }],
    filter: {
      property: "status",
      status: {
        equals: "Live",
      },
    },
  });
});

export const fetchNewsBySlug = React.cache((slug: string) => {
  return notion.databases
    .query({
      database_id: process.env.NOTION_DB_ID!,
      filter: {
        property: "slug",
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const fetchPageBlocks = React.cache((pageId: string) => {
  return notion.blocks.children
    .list({
      block_id: pageId,
    })
    .then((res) => res.results as BlockObjectResponse[]);
});
