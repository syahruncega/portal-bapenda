// app/api/revalidate-blog/route.ts

import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  revalidatePath(`/berita/${url}`); // revalidate list page
  // or revalidatePath(`/blog/${slug}`) for a specific page

  return NextResponse.json({ revalidated: true, slug: url });
}
