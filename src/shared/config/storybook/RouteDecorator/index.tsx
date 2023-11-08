import "@app/styles/index.scss";

import {type StoryFn} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";

const RouteDecorator = (StoryComponent: StoryFn) => {
  return (
    <BrowserRouter>
      <StoryComponent />
    </BrowserRouter>
  );
};

export default RouteDecorator;
