import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(
  options: BuildOptions
): webpack.WebpackPluginInstance[] {
  const { paths } = options;

  return [
    new webpack.ProgressPlugin(),

    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),

    new HTMLWebpackPlugin({
      template: paths.html,
    }),
  ];
}