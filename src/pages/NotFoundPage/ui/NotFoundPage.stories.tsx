import {Theme} from "@app/providers/ThemeProvider";
import ThemeDecorator from "@shared/config/storybook/ThemeDecorator";
import type {Meta, StoryObj} from "@storybook/react";

import NotFoundPage from "./NotFoundPage";

const meta = {
  title: "@pages/NotFoundPage",
  component: NotFoundPage,
  // parameters: {
  //   layout: "centered",
  // },
  // tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: {control: "color"},
  // },
} satisfies Meta<typeof NotFoundPage>;

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
