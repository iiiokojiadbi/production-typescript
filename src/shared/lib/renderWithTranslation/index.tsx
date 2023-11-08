import i18n from "@shared/config/i18n/i18ForTests";
import {render, type RenderResult} from "@testing-library/react";
import {type ReactNode} from "react";
import {I18nextProvider} from "react-i18next";

function renderWithTranslation(component: ReactNode): RenderResult {
  return render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
}

export default renderWithTranslation;
