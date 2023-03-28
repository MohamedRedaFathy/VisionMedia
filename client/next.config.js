/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [""], // todos : type here domain iamges to show in dom
  },
};

module.exports = nextConfig;
