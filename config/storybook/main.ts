import type {StorybookConfig} from "@storybook/react-webpack5";
import {BuildPaths} from "../build/types/config";
import path from "path";
import {RuleSetRule} from "webpack";
import {buildCssLoader} from "../build/helpers/buildCssLoader";
import {buildAliases} from "../build/helpers/buildAliases";
import {buildSvgLoader} from "../build/helpers/buildSvgLoader";

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async webpackFinal(config, {configType}) {
    const paths: BuildPaths = {
      output: "",
      html: "",
      entry: "",
      src: path.resolve(__dirname, "..", "..", "src"),
    };

    config.resolve!.modules?.push(paths.src);
    config.resolve!.alias = {
      ...config.resolve?.alias,
      ...buildAliases(paths),
    };

    config.module!.rules = config.module!.rules!.map(rule => {
      const typedRules = rule as RuleSetRule;

      if (/svg/.test(typedRules.test as string)) {
        return {...typedRules, exclude: /\.svg$/};
      }

      return rule;
    });

    config.module!.rules?.push(buildSvgLoader());
    config.module!.rules?.push(buildCssLoader(true));

    return config;
  },
};
export default config;
