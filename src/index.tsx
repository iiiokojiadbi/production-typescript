import "@shared/config/i18n/i18n";

import {App} from "@app/App";
import {ThemeProvider} from "@app/providers/ThemeProvider";
import {PageError} from "@widgets/PageError";
import {render} from "react-dom";
import {ErrorBoundary} from "react-error-boundary";
import {BrowserRouter} from "react-router-dom";

render(
  <BrowserRouter>
    <ErrorBoundary fallback={<PageError />}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root"),
);
