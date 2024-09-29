import { Progress, Typography } from "@material-tailwind/react";
import ProductPage from "../scenes/ProductPage";

const Main = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-1/2">
        <div className="mb-2 flex items-center justify-between gap-4 p-6">
          <Typography color="blue-gray" variant="h6">
            Produkt auswählen
          </Typography>
          <Typography color="blue-gray" variant="h6">
            Zahlen
          </Typography>
          <Typography color="blue-gray" variant="h6">
            Fertig
          </Typography>
        </div>
        <Progress value={0} />
      </div>
      <ProductPage />
    </div>
  );
};

export default Main;
