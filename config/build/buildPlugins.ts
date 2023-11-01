import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import type { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function buildPlugins(
  options: BuildOptions
): webpack.WebpackPluginInstance[] {
  const { paths, isDev } = options;

  return [
    new webpack.ProgressPlugin(),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),

    new HTMLWebpackPlugin({
      template: paths.html
    }),

    new webpack.DefinePlugin({
      _IS_DEV_: JSON.stringify(isDev)
    }),

    ...(isDev ? [new ReactRefreshWebpackPlugin()] : [])
  ];
}
