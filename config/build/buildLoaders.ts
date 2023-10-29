import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const svgLoader = [
    {
      test: /\.svg$/i,
      issuer: /\.scss$/,
      type: "asset/resource",
    },
    {
      test: /\.svg$/i,
      issuer: /\.tsx$/,
      use: ["@svgr/webpack"],
    },
  ];

  const imagesLoader = {
    test: /\.(png|jpg|jpeg|gif|svg)$/i,
    type: "asset/resource",
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (pathname: string) => pathname.includes(".module."),
            localIdentName: "[local]--[hash:base64:4]",
          },
        },
      },
      "sass-loader",
    ],
  };

  return [imagesLoader, ...svgLoader, cssLoaders, typescriptLoader];
}
