import "@shared/config/i18n/i18n";
import "@app/styles/index.scss";

import {App} from "@app/App";
import {StoreProvider} from "@app/providers/StoreProvider";
import {ThemeProvider} from "@app/providers/ThemeProvider";
import {PageError} from "@widgets/PageError";
import {render} from "react-dom";
import {ErrorBoundary} from "react-error-boundary";
import {BrowserRouter} from "react-router-dom";

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary fallback={<PageError />}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById("root"),
);
