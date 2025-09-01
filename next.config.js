/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ['images.unsplash.com', 'i.ytimg.com'] },
  experimental: { optimizeCss: true }
};
module.exports = nextConfig;
