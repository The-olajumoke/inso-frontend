const path = process.env.NODE_ENV !== 'development' ? '/' : '';
module.exports = {
  trailingSlash: true,
  images: {
    loader: "akamai",
    path: path
  },
};
