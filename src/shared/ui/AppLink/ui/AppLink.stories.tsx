import {Theme} from "@app/providers/ThemeProvider";
import RouteDecorator from "@shared/config/storybook/RouteDecorator";
import ThemeDecorator from "@shared/config/storybook/ThemeDecorator";
import type {Meta, StoryObj} from "@storybook/react";

import AppLink, {AppLinkTheme} from "./AppLink";

const meta = {
  title: "@shared/AppLink",
  component: AppLink,
  // parameters: {
  //   layout: "centered",
  // },
  // tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: {control: "color"},
  // },
  args: {
    to: "/",
    children: "Ссылка",
  },
  decorators: [RouteDecorator],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
