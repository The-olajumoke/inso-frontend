/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "cloudinary",
    path: "/",
    domains: ["res.cloudinary.com"],
  },
  /* config options here */
};

module.exports = nextConfig;
