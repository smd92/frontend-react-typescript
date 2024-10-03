import ProductPage from "../scenes/ProductPage";
import { StepperWithContent } from "../components/StepperWithContent";
import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Main = () => {
  const [isVerifiedAge, setIsVerifiedAge] = useState(false);

  const { t } = useTranslation();

  return (
    <div className="flex-grow flex items-center justify-center">
      {isVerifiedAge ? (
        <div className="flex flex-col items-center w-full my-10">
          <StepperWithContent />
          <ProductPage />
        </div>
      ) : (
        <Typography
          className="text-7xl text-color-primary-theme1 font-bold cursor-pointer"
          onClick={() => setIsVerifiedAge(true)}
        >
          {t("verify_age")}
        </Typography>
      )}
    </div>
  );
};

export default Main;
