import React from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  ShoppingCartIcon,
  CreditCardIcon,
CheckIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "../contexts/ThemeContext";

export function StepperWithContent() {
  const { theme } = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-10/12 px-24 mb-20">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
        activeLineClassName={`bg-color-button-primary-focus-theme1`}
      >
        <Step onClick={() => setActiveStep(0)} activeClassName={`bg-color-button-primary-focus-theme1`} completedClassName={`bg-color-button-primary-focus-theme1`}>
          <ShoppingCartIcon className={`h-5 w-5`} />
          <div className="absolute -bottom-[3rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 0 ? "blue-gray" : "gray"}
            >
              Produkt auswählen
            </Typography>
            {/*             <Typography
              color={activeStep === 0 ? "blue-gray" : "gray"}
              className="font-normal"
            >
              Details about yout account.
            </Typography> */}
          </div>
        </Step>
        <Step onClick={() => setActiveStep(1)} activeClassName={`bg-color-button-primary-focus-theme1`} completedClassName={`bg-color-button-primary-focus-theme1`}>
          <CreditCardIcon className="h-5 w-5" />
          <div className="absolute -bottom-[3rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 1 ? "blue-gray" : "gray"}
            >
              Bezahlen
            </Typography>
            {/*             <Typography
              color={activeStep === 1 ? "blue-gray" : "gray"}
              className="font-normal"
            >
              Details about yout account.
            </Typography> */}
          </div>
        </Step>
        <Step onClick={() => setActiveStep(2)} activeClassName={`bg-color-button-primary-focus-theme1`} completedClassName={`bg-color-button-primary-focus-theme1`}>
          <CheckIcon className="h-5 w-5" />
          <div className="absolute -bottom-[3rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 2 ? "blue-gray" : "gray"}
            >
              Fertig
            </Typography>
            {/*             <Typography
              color={activeStep === 2 ? "blue-gray" : "gray"}
              className="font-normal"
            >
              Details about yout account.
            </Typography> */}
          </div>
        </Step>
      </Stepper>
      {/*       <div className="mt-32 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div> */}
    </div>
  );
}
