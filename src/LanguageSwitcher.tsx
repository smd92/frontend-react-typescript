import { useTranslation } from "react-i18next";
import Button from "./components/Button";

const locales = [
  {
    value: "en",
    img: "/img/uk-flag-round-circle-icon.svg",
  },
  {
    value: "fr",
    img: "/img/france-flag-round-circle-icon.svg",
  },
  {
    value: "es",
    img: "/img/spain-country-flag-round-icon.svg",
  },
  {
    value: "de",
    img: "/img/germany-flag-round-circle-icon.svg",
  },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (newLang: string) => {
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex flex-row">
      {locales.map((locale) => (
        <div key={locale.value}>
          <Button
            className=""
            href={undefined}
            onClick={() => handleLanguageChange(locale.value)}
            children={
              <img
                src={process.env.PUBLIC_URL + locale.img!}
                alt={`${locale.value} flag}`}
                width="100"
                height="100"
              />
            }
            px={undefined}
          />
        </div>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
