import {BuildPaths} from "../types/config";

export const buildAliases = (paths: BuildPaths) => ({
  "@app": paths.src + "/app",
  "@pages": paths.src + "/pages",
  "@entities": paths.src + "/entities",
  "@features": paths.src + "/features",
  "@shared": paths.src + "/shared",
  "@widgets": paths.src + "/widgets",
});
