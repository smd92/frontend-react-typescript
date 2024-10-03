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
  
  // Bedingung prüfen, ob der Lagerbestand 0 ist
  const isOutOfStock = productData.inStockCount === 0;

  return (
    <div className="relative w-80">
      {/* Card wird ausgegraut, wenn Lagerbestand 0 ist */}
      <Card className={`w-80 bg-color-card-theme1 ${isOutOfStock ? 'opacity-50 grayscale' : ''}`}>
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
            disabled={isOutOfStock} // Knopf deaktivieren, wenn der Artikel ausverkauft ist
            className={`shadow-none bg-color-button-primary-theme1 text-color-primary-theme1 hover:shadow-none`}
          >
            AUSWÄHLEN
          </Button>
        </CardFooter>
      </Card>

      {/* Mittiges rotes Banner wird angezeigt, wenn Lagerbestand 0 */}
      {isOutOfStock && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="w-full bg-red-500 text-white px-4 py-2 text-center font-bold">
            Ausverkauft
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
