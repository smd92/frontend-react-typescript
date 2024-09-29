import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between p-2 h-30">
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
