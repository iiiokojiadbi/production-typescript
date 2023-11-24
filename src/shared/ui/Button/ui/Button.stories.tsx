import {Theme} from "@app/providers/ThemeProvider";
import ThemeDecorator from "@shared/config/storybook/ThemeDecorator";
import type {Meta, StoryObj} from "@storybook/react";

import Button, {ButtonSize, ButtonTheme} from "./Button";

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

export const SquareM: Story = {
  args: {
    children: ">",
    size: ButtonSize.M,
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SquareL: Story = {
  args: {
    children: ">",
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SquareXL: Story = {
  args: {
    children: ">",
    size: ButtonSize.XL,
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Square: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
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

export const OutlinedSizeM: Story = {
  args: {
    children: "Кнопка",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OutlinedSizeL: Story = {
  args: {
    children: "Кнопка",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OutlinedSizeXL: Story = {
  args: {
    children: "Кнопка",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Background: Story = {
  args: {
    children: "Кнопка",
    theme: ButtonTheme.BACKGROUND,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const BackgroundInverted: Story = {
  args: {
    children: "Кнопка",
    theme: ButtonTheme.BACKGROUND_INVERTED,
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
