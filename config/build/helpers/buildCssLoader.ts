import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildCssLoader = (isDev: boolean) => ({
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
