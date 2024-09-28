import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import "./index.css";
import App from "./App";

import { ThemeProvider } from "@material-tailwind/react";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <I18nextProvider i18n={i18next}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </I18nextProvider>
    </Router>
  </React.StrictMode>
);
