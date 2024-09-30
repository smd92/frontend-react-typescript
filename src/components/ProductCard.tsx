import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ProductData } from "../types";

const ProductCard = (productData: ProductData) => {
  return (
    <Card className="w-80">
      <CardHeader shadow={false} floated={false} className="min-h-64">
        <img
          src={process.env.PUBLIC_URL + productData.img}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
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
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          AUSWÄHLEN
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
