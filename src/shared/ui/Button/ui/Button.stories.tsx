import type {Meta, StoryObj} from "@storybook/react";

import Button, {ButtonTheme} from "./Button";
import ThemeDecorator from "@shared/config/storybook/ThemeDecorator";
import {Theme} from "@app/providers/ThemeProvider";

const meta = {
  title: "@shared/Button",
  component: Button,
  // parameters: {
  //   layout: "centered",
  // },
  // tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: {control: "color"},
  // },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Кнопка",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Clear: Story = {
  args: {
    children: "Кнопка",
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Outlined: Story = {
  args: {
    children: "Кнопка",
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const PrimaryDark: Story = {
  args: {
    children: "Кнопка",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ClearDark: Story = {
  args: {
    children: "Кнопка",
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlinedDark: Story = {
  args: {
    children: "Кнопка",
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
