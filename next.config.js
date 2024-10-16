/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.ibb.co", "i.ibb.co.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
