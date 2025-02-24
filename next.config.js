/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true, // Since GitHub Pages doesn't support Next.js image optimization
    },
    basePath: "/ecommerce website", // Replace with your GitHub repository name
    assetPrefix: "/ecommerce website/",
  };
  
  module.exports = nextConfig;
  