import StyleDecorator from "@shared/config/storybook/StyleDecorator";
import type {Preview} from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    decorators: [StyleDecorator],
  },
};

export default preview;
