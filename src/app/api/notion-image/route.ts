// app/api/notion-image/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const imageUrl = req.nextUrl.searchParams.get("url");

  if (!imageUrl) {
    return new NextResponse("Missing image URL", { status: 400 });
  }

  try {
    const res = await fetch(imageUrl);
    const buffer = await res.arrayBuffer();
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": res.headers.get("content-type") || "image/png",
        "Cache-Control": "no-store", // disable caching
      },
    });
  } catch (e) {
    return new NextResponse("Failed to fetch image", { status: 500 });
  }
}
