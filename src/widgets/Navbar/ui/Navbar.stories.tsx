import {Theme} from "@app/providers/ThemeProvider";
import RouteDecorator from "@shared/config/storybook/RouteDecorator";
import ThemeDecorator from "@shared/config/storybook/ThemeDecorator";
import type {Meta, StoryObj} from "@storybook/react";

import Navbar from "./Navbar";

const meta = {
  title: "@widgets/Navbar",
  component: Navbar,
  // parameters: {
  //   layout: "centered",
  // },
  // tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: {control: "color"},
  // },
  decorators: [RouteDecorator],
} satisfies Meta<typeof Navbar>;

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
