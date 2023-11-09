import type {RuleSetRule} from "webpack";

export const buildSvgLoader = (): RuleSetRule => ({
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
