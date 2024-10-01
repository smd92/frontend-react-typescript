import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ProductData } from "../types";

import { useTheme } from "../contexts/ThemeContext";

const ProductCard = (productData: ProductData) => {
  const { theme } = useTheme();
  return (
    <Card className={`w-80`}>
      <CardHeader shadow={false} floated={false} className="min-h-64">
        <img
          src={process.env.PUBLIC_URL + productData.img}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography className={`font-medium text-color-primary-theme1`}>
            {productData.name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            €{productData.price.toFixed(2)}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {productData.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={true}
          fullWidth={true}
          className={`shadow-none bg-color-button-theme1 text-color-primary-theme1 hover:shadow-none`}
        >
          AUSWÄHLEN
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
