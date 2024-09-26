import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationES from "./locales/es/translation.json";
import translationDE from "./locales/de/translation.json";

import LanguageSwitcher from "./LanguageSwitcher";
import ProductPage from "./ProductPage";

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
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  const { t } = useTranslation();

  return (
    <>
      <LanguageSwitcher />
      <div className="darkBlue">
        <h1 className="text-3xl font-bold underline text-background">
          {t("hello_world")}
        </h1>
        <h1 className="text-3xl font-bold underline text-card">
          {t("hello_world")}
        </h1>
        <h1 className="text-3xl font-bold underline text-text">
          {t("hello_world")}
        </h1>
        <h1 className="text-3xl font-bold underline text-button">
          {t("hello_world")}
        </h1>
        <h1 className="text-3xl font-bold underline text-button-hover">
          {t("hello_world")}
        </h1>
      </div>
      <div className="darkGreen">
        <h1 className="text-3xl font-bold underline text-background">
          {t("hello_world")}
        </h1>
        <h1 className="text-3xl font-bold underline text-card">
          {t("hello_world")}
        </h1>
        <h1 className="text-3xl font-bold underline text-text">
          {t("hello_world")}
        </h1>
        <h1 className="text-3xl font-bold underline text-button">
          {t("hello_world")}
        </h1>
        <h1 className="text-3xl font-bold underline text-button-hover">
          {t("hello_world")}
        </h1>
      </div>
      <ProductPage />
    </>
  );
};

export default App;
