module.exports = {
  basePath: '/burgerHat', 
  assetPrefix: '/burgerHat', 
  output: 'export',
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
    unoptimized: true,
    dangerouslyAllowSVG: true,
    domains: [
      "medusa-public-images.s3.eu-west-1.amazonaws.com",
      "github.com",
      "img.freepik.com",
    ],
  },
  trailingSlash: true,
};
