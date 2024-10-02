import ProductPage from "../scenes/ProductPage";
import { StepperWithContent } from "../components/StepperWithContent";
import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();
  const isVerifiedAge = false;

  return (
    <div className="flex-grow flex items-center justify-center">
      {isVerifiedAge ? (
        <div className="flex flex-col items-center w-full my-10">
          <StepperWithContent />
          <ProductPage />
        </div>
      ) : (
        <Typography>{t("verify_age")}</Typography>
      )}
    </div>
  );
};

export default Main;
