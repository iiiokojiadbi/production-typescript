import type {StorybookConfig} from "@storybook/react-webpack5";
import path from "path";
import {type RuleSetRule} from "webpack";

import {buildAliases} from "../build/helpers/buildAliases";
import {buildCssLoader} from "../build/helpers/buildCssLoader";
import {buildSvgLoader} from "../build/helpers/buildSvgLoader";
import {type BuildPaths} from "../build/types/config";

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

    if (config.resolve != null) {
      (config.resolve.modules as string[]).push(paths.src);
      config.resolve.alias = {
        ...config.resolve?.alias,
        ...buildAliases(paths),
      };
    }

    if (config.module != null) {
      config.module.rules = (config.module.rules as RuleSetRule[]).map(rule => {
        if (String(rule.test).includes("svg")) {
          return {...rule, exclude: /\.svg$/};
        }

        return rule;
      });

      config.module.rules.push(buildSvgLoader());
      config.module.rules.push(buildCssLoader(true));
    }

    return config;
  },
};
export default config;
