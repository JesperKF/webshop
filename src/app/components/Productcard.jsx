"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBasket } from "lucide-react";

import Cart from "./Cart";
import Categories from "./Categories";
import Search from "./Search";

const categoryColors = {
  beauty: "bg-pink-500/70",
  fragrances: "bg-red-500/70",
  furniture: "bg-yellow-500/70",
  groceries: "bg-green-500/70",
};

const getCategoryColor = (category) => categoryColors[category];
const stockColors = {
  "low stock": "text-yellow-500",
  "in stock": "text-green-500",
};
const getStockColor = (status) =>
  stockColors[status?.toLowerCase().trim()] || "text-gray-400";


const Productcard = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = data.products.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSearch = (query) => {
    setSearchQuery(query);
  };



  return (
    <div className="mt-6">
      <div className="flex gap-4">
      <Categories 
      selectedCategory={selectedCategory}
      onSelectCategory={setSelectedCategory} 
      />
     <Search onSearch={handleSearch}/>
     </div>
    <div className="flex flex-row mt-6 gap-6 mb-20">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-1">
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/singleview/${product.id}`}>
            <li className="flex flex-col h-full p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-gray-100">
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
                <div className="rounded-full bg-gradient-to-br from-cyan-300 to-blue-700 text-white p-2 hover:scale-120">
                  <ShoppingBasket />
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>

      <div className="flex flex-col w-80 h-fit sticky top-20">
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-md">
          <Cart />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Productcard;

