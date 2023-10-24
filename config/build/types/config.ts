export type BuildMode = "production" | "development";

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
}

export interface BuildEnv {
  WEBPACK_SERVE: boolean;
  port: number;
}

export type BuildConfigOptions<T> = (
  env: BuildEnv,
  options: {
    mode: BuildMode;
    env: BuildEnv;
  }
) => T;

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}