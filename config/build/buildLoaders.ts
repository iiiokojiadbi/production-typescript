import type webpack from "webpack";

import {buildCssLoader} from "./helpers/buildCssLoader";
import {buildSvgLoader} from "./helpers/buildSvgLoader";
import type {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const fileLoader = {
    test: /\.(png|jpg|jpeg|gif|woff|woff2)$/i,
    type: "asset/resource",
    resourceQuery: /url/, // *.svg?url
  };

  const babelPlugins = [];

  if (isDev) {
    babelPlugins.push("react-refresh/babel");
  }

  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "babel-loader",
        options: {
          plugins: babelPlugins.length > 0 ? babelPlugins : undefined,
        },
      },
    ],
  };

  const cssLoaders = buildCssLoader(isDev);
  const svgLoader = buildSvgLoader();

  return [fileLoader, svgLoader, cssLoaders, babelLoader];
}
