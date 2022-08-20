/**@type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
      loader: "cloudinary",
    domains: ["res.cloudinary.com"],
  },
};
