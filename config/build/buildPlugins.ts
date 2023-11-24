import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

// import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import type {BuildOptions} from "./types/config";

export function buildPlugins(options: BuildOptions): webpack.Configuration["plugins"] {
  const isDev = options.mode === "development";

  const plugins: webpack.Configuration["plugins"] = [];

  if (isDev) {
    // plugins.push(new BundleAnalyzerPlugin({openAnalyzer: false}));
    plugins.push(new ReactRefreshWebpackPlugin({overlay: false}));
    plugins.push(
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          diagnosticOptions: {
            semantic: true,
            syntactic: true,
          },
          mode: "write-references",
        },
      }),
    );
  }

  plugins.push(new webpack.ProgressPlugin());
  plugins.push(
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  );
  plugins.push(
    new HTMLWebpackPlugin({
      template: options.paths.html,
    }),
  );
  plugins.push(
    new webpack.DefinePlugin({
      _IS_DEV_: JSON.stringify(isDev),
    }),
  );

  return plugins;
}
