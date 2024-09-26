import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: any) => {
    const newLang = (event.target as HTMLSelectElement).value;
    i18n.changeLanguage(newLang);
  };

  return (
    <select value={i18n.language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="es">Español</option>
      <option value="de">Deutsch</option>
    </select>
  );
};

export default LanguageSwitcher;
