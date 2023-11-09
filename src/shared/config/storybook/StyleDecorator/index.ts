import "@app/styles/index.scss";

import {type StoryFn} from "@storybook/react";

const StyleDecorator = (StoryComponent: StoryFn): StoryFn => {
  return StoryComponent;
};

export default StyleDecorator;
