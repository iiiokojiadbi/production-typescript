import {Theme} from "@app/providers/ThemeProvider";
import ThemeDecorator from "@shared/config/storybook/ThemeDecorator";
import type {Meta, StoryObj} from "@storybook/react";

import Sidebar from "./Sidebar";

const meta = {
  title: "@widgets/Sidebar",
  component: Sidebar,
  // parameters: {
  //   layout: "centered",
  // },
  // tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: {control: "color"},
  // },
} satisfies Meta<typeof Sidebar>;

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
