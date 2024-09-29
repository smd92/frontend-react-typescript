import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationES from "./locales/es/translation.json";
import translationDE from "./locales/de/translation.json";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";

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
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <ProductPage />
        <Footer />
      </div>
    </>
  );
};

export default App;
