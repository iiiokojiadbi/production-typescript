import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type {RuleSetRule} from "webpack";

export const buildCssLoader = (isDev: boolean): RuleSetRule => ({
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
});
