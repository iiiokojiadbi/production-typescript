import type webpack from "webpack";

import {type BuildOptions} from "../types/config";

export function buildBabelLoader(options: BuildOptions): webpack.RuleSetRule {
  const isDev = options.mode === "development";

  const plugins = [];

  if (isDev) {
    plugins.push("react-refresh/babel");
  }

  return {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "babel-loader",
        options: {
          plugins: plugins.length > 0 ? plugins : undefined,
        },
      },
    ],
  };
}
