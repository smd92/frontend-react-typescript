import React from "react";
import Product from "./Product";

const productData = [
  {
    id: 1,
    name: "Elf Bar 600 Einweg E-Zigarette Cola",
    price: 8,
    inStockCount: 10,
    img: "/img/elf-bar-600-einweg-ezigarette-cola.jpg",
  },
  {
    id: 2,
    name: "Elf Bar 600 Einweg E-Zigarette Watermelon",
    price: 9,
    inStockCount: 8,
    img: "/img/elf-bar-600-einweg-ezigarette-watermelon-pomegrenate_600x600.jpg",
  },
  {
    id: 3,
    name: "Elf Bar 600 Einweg E-Zigarette Grape",
    price: 10,
    inStockCount: 9,
    img: "/img/elfbar-grape-einweg-e-zigarette-fs.jpg",
  },
  {
    id: 4,
    name: "Elf Bar 600 Einweg E-Zigarette Peach",
    price: 15,
    inStockCount: 3,
    img: "/img/elfbar-peach-ice-einweg-e-zigarette-fs.jpg",
  },
  {
    id: 5,
    name: "Elfbar Pod Blueberry",
    price: 5,
    inStockCount: 5,
    img: "/img/elf-bar-elfa-prefilled-pod-blueberry-2er-pack.jpg",
  },
  {
    id: 6,
    name: "Elfbar Pod Blueberry/Cotton Candy",
    price: 3,
    inStockCount: 10,
    img: "/img/elf-bar-elfa-prefilled-pod-blueberry-cotton-candy-1.jpg",
  },
];

const ProductPage = () => {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + productData[0].img!} alt="product" />
    </div>
  );
};

export default ProductPage;
