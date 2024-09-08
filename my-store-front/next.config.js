module.exports = {
  basePath: '/burgerHat/my-store-front', 
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
  assetPrefix: "./burgerHat/my-store-front",
};
