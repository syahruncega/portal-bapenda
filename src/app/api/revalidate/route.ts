// app/api/revalidate-blog/route.ts

import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  revalidatePath(`/berita`);
  revalidatePath(`/berita/${slug}`);

  return NextResponse.json({ revalidated: true, slug: slug });
}
