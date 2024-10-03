import LanguageSwitcher from "./LanguageSwitcher";
import { useTheme } from "../contexts/ThemeContext";
import { Typography } from "@material-tailwind/react";

const Header = () => {
  const { theme } = useTheme();
  return (
    <header
      className={`flex flex-row items-center justify-between h-30 p-8 bg-color-theme1`}
    >
      <div className="flex flex-row items-center">
        <Typography className={`font-concert-one text-7xl text-color-logo-theme1 italic cursor-pointer`} onClick={() => window.location.reload()}>INNOVEND</Typography>
      </div>
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
