import type {Meta, StoryObj} from "@storybook/react";

import ThemeSwitcher from "./ThemeSwitcher";
import ThemeDecorator from "@shared/config/storybook/ThemeDecorator";
import {Theme} from "@app/providers/ThemeProvider";

const meta = {
  title: "@features/ThemeSwitcher",
  component: ThemeSwitcher,
  // parameters: {
  //   layout: "centered",
  // },
  // tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: {control: "color"},
  // },
} satisfies Meta<typeof ThemeSwitcher>;

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
