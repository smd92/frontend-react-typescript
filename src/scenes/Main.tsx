import ProductPage from "../scenes/ProductPage";
import { StepperWithContent } from "../components/StepperWithContent";

const Main = () => {
  return (
    <div className="flex flex-col items-center w-full my-10">
      <StepperWithContent />
      <ProductPage />
    </div>
  );
};

export default Main;
