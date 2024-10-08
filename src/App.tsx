import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationES from "./locales/es/translation.json";
import translationDE from "./locales/de/translation.json";

import Header from "./components/Header";
import Main from "./scenes/Main";
import Footer from "./components/Footer";

import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  es: {
    translation: translationES,
  },
  de: {
    translation: translationDE,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "de",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider>
      <div className={`flex flex-col min-h-screen bg-color-theme1`}>
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
