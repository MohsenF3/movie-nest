import { NextResponse } from "next/server";
import sharp from "sharp";

export async function GET(request: Request) {
  // Extract query parameters from the URL

  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  // Validate the URL parameter
  if (!url) {
    return NextResponse.json(
      { error: "Image URL is required" },
      { status: 400 },
    );
  }

  try {
    // Fetch the image from the external URL
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    // Convert the response to an ArrayBuffer
    const imageBuffer = await response.arrayBuffer();

    // Optimize the image using Sharp
    const optimizedImage = await sharp(Buffer.from(imageBuffer))
      .webp({ quality: 80 }) // Convert to WebP with 80% quality
      .toBuffer(); // Get the optimized image as a buffer

    // Return the optimized image as a response
    return new NextResponse(optimizedImage, {
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "public, max-age=31536000, immutable", // Cache for 1 year
      },
    });
  } catch (error) {
    // Return a generic error response
    return NextResponse.json(
      { error: "Failed to optimize image" },
      { status: 500 },
    );
  }
}
