/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "image.tmdb.org", pathname: "**" },
    ],
    imageSizes: [96, 160, 220, 300, 342],
    deviceSizes: [420, 640, 780, 1080, 1280],
    minimumCacheTTL: 2678400,
    formats: ["image/webp"],
  },
};

export default nextConfig;
