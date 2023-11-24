import type webpack from "webpack";

import {buildAliases} from "./helpers/buildAliases";
import type {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): webpack.Configuration["resolve"] {
  const {paths} = options;

  return {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss", ".css"],
    preferAbsolute: true,
    modules: [paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: buildAliases(paths),
  };
}
