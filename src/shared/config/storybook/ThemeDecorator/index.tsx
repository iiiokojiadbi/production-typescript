import {Theme} from "@app/providers/ThemeProvider";
import "@app/styles/index.scss";
import {classNames} from "@shared/lib/classNames";
import {StoryFn} from "@storybook/react";

const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
  return (
    <div className={classNames("app", [theme])}>
      <StoryComponent />
    </div>
  );
};
export default ThemeDecorator;
