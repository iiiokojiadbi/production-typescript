export const buildSvgLoader = () => ({
  test: /\.svg$/i,
  oneOf: [
    {
      type: "asset/resource",
      resourceQuery: /url/, // *.svg?url
    },
    {
      issuer: /\.tsx?$/,
      use: ["@svgr/webpack"],
    },
  ],
});
