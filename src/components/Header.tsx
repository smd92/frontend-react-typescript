import LanguageSwitcher from "./LanguageSwitcher";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const { theme } = useTheme();
  return (
    <header
      className={`flex flex-row items-center justify-between h-30 p-8 bg-color-${theme}`}
    >
      <div className="flex flex-row items-center">
        <img
          src={process.env.PUBLIC_URL + "/img/logo-vending-machine.png"}
          alt="logo vending machine"
          width="100"
          height="100"
        />
        <h1 className={`font-concert-one text-7xl text-color-primary-theme1`}>INNOVEND</h1>
      </div>
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
