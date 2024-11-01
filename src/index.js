import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";

import language_en from "../src/public/locales/en/translation.json";
import language_vi from "../src/public/locales/vi/translation.json";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "vi",
  resources: {
    vi: {
      translate: language_vi,
    },
    en: {
      translate: language_en,
    },
  },
});

// import "primereact/resources/themes/lara-light-cyan/theme.css"; // Chọn theme
// import "primereact/resources/primereact.min.css"; // PrimeReact CSS
// import "primeicons/primeicons.css";
// import "primeflex/primeflex.css";

// import CssBaseline from "@mui/material/CssBaseline";
// import { ThemeProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
