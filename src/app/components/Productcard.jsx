"use client";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBasket } from "lucide-react";

import Cart from "./Cart";



const categoryColors = {
  beauty: "bg-pink-500/70",
  fragrances: "bg-red-500/70",
  furniture: "bg-yellow-500/70",
  groceries: "bg-green-500/70",
};

const getCategoryColor = (category) => {
  return categoryColors[category];
}

const stockColors = {
  "low stock": "text-yellow-500",
  "in stock": "text-green-500",
};

const getStockColor = (availabilityStatus) => {
  return stockColors[availabilityStatus?.toLowerCase().trim()] || "text-gray-400";
};


const Productcard = ({ data }) => {
  return (
    <div className="flex mt-20 px-4 gap-6 mb-20">

    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-1">
        {data.products.map((product) => (
          <Link key={product.id} href={`/singleview/${product.id}`}>
            <li className="flex flex-col h-full p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-gray-100">
              <p className={`text-white w-fit px-3 rounded-full font-sm ${getCategoryColor(product.category)}`}>
                {product.category}
              </p>
              <Image
                src={product.images[0]}
                alt={product.title}
                width={200}
                height={200}
                className="object-contain h-48"
              />
              <h1 className="text-black">{product.title}</h1>
              <div className="flex-grow"></div>
              <p className={`${getStockColor(product.availabilityStatus)}`}>
                {product.availabilityStatus}
              </p>
              <div className="flex-grow"></div>
              <div className="flex justify-between items-center">
              <h2 className="text-gray-500">€ {product.price}</h2>
              <div className="rounded-full bg-gradient-to-br from-purple-700/80 to-red-500/80 text-white p-2"><ShoppingBasket />
              </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>

      <div className="flex flex-col w-80 h-fit bg-white p-4 border rounded-lg shadow-md sticky top-10">
        <Cart />
      </div>
      
    </div>
  );
};


export default Productcard;
