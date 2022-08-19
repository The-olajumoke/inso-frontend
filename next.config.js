/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: "akamai",
    path: "https://s3.amazonaws.com/inso.ai"
  },
};

module.exports = nextConfig;
