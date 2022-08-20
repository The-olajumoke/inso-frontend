// const withPWA = require("next-pwa");
// // const withOptimizedImages = require("next-optimized-images");
// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
//   images: {
//     domains: [
//       "res.cloudinary.com",
//       "inso-staging.s3-website-us-east-1.amazonaws.com",
//     ],
//   },
// });
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([optimizedImages]);
