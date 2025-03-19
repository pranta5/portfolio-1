import { NextResponse } from "next/server";

export async function GET() {
  const robotsTxt = `
    User-agent: *
    Allow: /
    Disallow: /admin/
    Sitemap: ${"https://protfolio-ivory-iota.vercel.app"}/sitemap.xml
  `;

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}