/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.freetogame.com", "www.salonlfc.com"],
  },
};

module.exports = nextConfig;
