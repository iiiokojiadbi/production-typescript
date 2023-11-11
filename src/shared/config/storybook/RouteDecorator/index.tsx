import "@app/styles/index.scss";

import {type StoryFn} from "@storybook/react";
import type {ReactElement} from "react";
import {BrowserRouter} from "react-router-dom";

const RouteDecorator = (StoryComponent: StoryFn): ReactElement => (
  <>
    <BrowserRouter>
      <StoryComponent />
    </BrowserRouter>
  </>
);

export default RouteDecorator;
