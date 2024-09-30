import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  return (
    <header className="theme-bert flex flex-row items-center justify-between h-30 mb-20 p-8">
      <div className="flex flex-row items-center">
        <img
          src={process.env.PUBLIC_URL + "/img/logo-vending-machine.png"}
          alt="logo vending machine"
          width="100"
          height="100"
        />
        <h1 className="font-concert-one text-7xl">
          INNOVEND
        </h1>
      </div>
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
