import path from "path";
import type webpack from "webpack";

import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import type {BuildConfigOptions, BuildPaths} from "./config/build/types/config";

const WebpackConfig: BuildConfigOptions<webpack.Configuration> = (env, options) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const config: webpack.Configuration = buildWebpackConfig({
    paths,
    mode: options?.mode ?? "development",
    port: env?.port ?? 3000,
  });

  return config;
};

export default WebpackConfig;
