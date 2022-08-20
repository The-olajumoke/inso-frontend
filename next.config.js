/**@type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  loader: "cloudinary",
  images: {
    domains: ["res.cloudinary.com"],
  },
};
