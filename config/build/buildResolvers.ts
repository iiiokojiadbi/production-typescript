import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  const { paths } = options;

  return {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss", ".css"],
    preferAbsolute: true,
    modules: [paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {
      "@app": paths.src + "/app",
      "@pages": paths.src + "/pages",
      "@entities": paths.src + "/entities",
      "@features": paths.src + "/features",
      "@shared": paths.src + "/shared",
      "@widgets": paths.src + "/widgets",
    },
  };
}
