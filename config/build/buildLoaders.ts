import type webpack from "webpack";

import type {BuildOptions} from "./types/config";
import {buildCssLoader} from "./helpers/buildCssLoader";
import {buildSvgLoader} from "./helpers/buildSvgLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const {isDev} = options;

  const fileLoader = {
    test: /\.(png|jpg|jpeg|gif|woff|woff2)$/i,
    type: "asset/resource",
    resourceQuery: /url/, // *.svg?url
  };

  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "babel-loader",
        options: {
          plugins: isDev ? ["react-refresh/babel"] : [],
        },
      },
    ],
  };

  const cssLoaders = buildCssLoader(isDev);
  const svgLoader = buildSvgLoader();

  return [fileLoader, svgLoader, cssLoaders, babelLoader];
}
