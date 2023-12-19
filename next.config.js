// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "scrapecom.vercel.app",
      },
      {
        protocol: "https",
        hostname: "cdn.tailkit.com",
      },
    ],
  },
};

module.exports = nextConfig;
