import {type StateSchema, StoreProvider} from "@app/providers/StoreProvider";
import {type DeepPartial} from "@reduxjs/toolkit";
import i18n from "@shared/config/i18n/i18ForTests";
import {render, type RenderResult} from "@testing-library/react";
import {type ReactNode} from "react";
import {I18nextProvider} from "react-i18next";
import {MemoryRouter} from "react-router-dom";

export interface RenderWithRouterOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

function componentRender(
  component: ReactNode,
  options: RenderWithRouterOptions = {},
): RenderResult {
  const {route = "/", initialState} = options;

  return render(
    <StoreProvider initialState={initialState as StateSchema}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
}

export default componentRender;
