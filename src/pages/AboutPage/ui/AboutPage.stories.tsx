import {Theme} from "@app/providers/ThemeProvider";
import ThemeDecorator from "@shared/config/storybook/ThemeDecorator";
import type {Meta, StoryObj} from "@storybook/react";

import AboutPage from "./AboutPage";

const meta = {
  title: "@pages/AboutPage",
  component: AboutPage,
  // parameters: {
  //   layout: "centered",
  // },
  // tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: {control: "color"},
  // },
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
