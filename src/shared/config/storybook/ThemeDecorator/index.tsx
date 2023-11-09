import "@app/styles/index.scss";

import {type Theme} from "@app/providers/ThemeProvider";
import {classNames} from "@shared/lib/classNames";
import {type StoryFn} from "@storybook/react";

const ThemeDecorator = (theme: Theme) => {
  return function StoryWrapper(StoryComponent: StoryFn) {
    return (
      <div className={classNames("app", [theme])}>
        <StoryComponent />
      </div>
    );
  };
};

export default ThemeDecorator;
