import ProductCard from "../components/ProductCard";

const productData = [
  {
    id: 1,
    name: "Elf Bar 600 Cola",
    description: "Heftiger Cola Taste! Hol jetzt!",
    price: 8,
    inStockCount: 10,
    img: "/img/elf-bar-600-einweg-ezigarette-cola.jpg",
  },
  {
    id: 2,
    name: "Elf Bar 600 Watermelon",
    description: "Wie Wassermelone eigentlich.",
    price: 9,
    inStockCount: 8,
    img: "/img/elf-bar-600-einweg-ezigarette-watermelon-pomegrenate_600x600.jpg",
  },
  {
    id: 3,
    name: "Elf Bar 600 Grape",
    description: "Grape. Dem ist nichts hinzuzufügen.",
    price: 10,
    inStockCount: 9,
    img: "/img/elfbar-grape-einweg-e-zigarette-fs.jpg",
  },
  {
    id: 4,
    name: "Elf Bar 600 Peach",
    description: "Peach. Dem ist nichts hinzuzufügen.",
    price: 15,
    inStockCount: 3,
    img: "/img/elfbar-peach-ice-einweg-e-zigarette-fs.jpg",
  },
  {
    id: 5,
    name: "Elfbar Pod Blueberry",
    description: "Blaubeeren sind reich an Oxidantien",
    price: 5,
    inStockCount: 5,
    img: "/img/elf-bar-elfa-prefilled-pod-blueberry-2er-pack.jpg",
  },
  {
    id: 6,
    name: "Elfbar Pod BB/CC",
    description: "Cotton Candy auch gut",
    price: 3,
    inStockCount: 10,
    img: "/img/elf-bar-elfa-prefilled-pod-blueberry-cotton-candy-1.jpg",
  },
  {
    id: 7,
    name: "Elf Bar 600 Peach",
    description: "Peach. Dem ist nichts hinzuzufügen.",
    price: 15,
    inStockCount: 3,
    img: "/img/elfbar-peach-ice-einweg-e-zigarette-fs.jpg",
  },
  {
    id: 8,
    name: "Elfbar Pod Blueberry",
    description: "Blaubeeren sind reich an Oxidantien",
    price: 5,
    inStockCount: 5,
    img: "/img/elf-bar-elfa-prefilled-pod-blueberry-2er-pack.jpg",
  },
  {
    id: 9,
    name: "Elfbar Pod BB/CC",
    description: "Cotton Candy auch gut",
    price: 3,
    inStockCount: 10,
    img: "/img/elf-bar-elfa-prefilled-pod-blueberry-cotton-candy-1.jpg",
  },
  {
    id: 10,
    name: "Elf Bar 600 Peach",
    description: "Peach. Dem ist nichts hinzuzufügen.",
    price: 15,
    inStockCount: 3,
    img: "/img/elfbar-peach-ice-einweg-e-zigarette-fs.jpg",
  },
  {
    id: 11,
    name: "Elfbar Pod Blueberry",
    description: "Blaubeeren sind reich an Oxidantien",
    price: 5,
    inStockCount: 5,
    img: "/img/elf-bar-elfa-prefilled-pod-blueberry-2er-pack.jpg",
  },
  {
    id: 12,
    name: "Elfbar Pod BB/CC",
    description: "Cotton Candy auch gut",
    price: 3,
    inStockCount: 10,
    img: "/img/elf-bar-elfa-prefilled-pod-blueberry-cotton-candy-1.jpg",
  },
];

const ProductPage = () => {
  const rowCount = Math.ceil(productData.length / 4);
  return (
    <div className={`w-10/12 grid grid-cols-4 grid-rows-${rowCount} items-center gap-6`}>
      {productData.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductPage;
