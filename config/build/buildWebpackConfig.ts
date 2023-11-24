import type webpack from "webpack";

import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import type {BuildOptions} from "./types/config";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const isDev = options.mode === "development";

  return {
    mode: options.mode,
    entry: options.paths.entry,
    cache: !isDev,
    output: {
      filename: "[name].[contenthash:8].js",
      assetModuleFilename: "assets/[contenthash:6]-[name][ext]",
      path: options.paths.output,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? "inline-source-map" : undefined,
  };
}
