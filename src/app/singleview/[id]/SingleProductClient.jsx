"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa";

export default function SingleProductClient({ product }) {
  const [image, setImage] = useState(product.images[0]);
  const [infoOpen, setInfoOpen] = useState(false);

  const imageSetter = (newImage) => {
    setImage(newImage);
  };

  const toggleInfo = () => {
    setInfoOpen(!infoOpen);
  };

  return (
    <article className="grid grid-cols-[minmax(20px,0.2fr)_1fr_minmax(20px,0.2fr)]">
      <div className="col-2">
        <Link
          href="/shop"
          className="text-black mb-4 flex items-center cursor-pointer text-xl w-fit rounded-full p-2 mt-4 border border-gray-300"
        >
          <IoArrowBackSharp />
          Tilbage
        </Link>

        {/* Opdeling */}
        <div className="grid grid-cols-[auto_auto] gap-16 mt-16">
          <div>
            {image ? (
              <Image
                src={image}
                alt={product.title}
                width={400}
                height={400}
                className="text-black rounded-xl w-full max-w-[500px] h-[400px] object-cover object-center"
              />
            ) : (
              <div className="w-full bg-gray-800 h-[400px] rounded-lg flex items-center justify-center">
                <span className="text-white text-center p-8">Intet billede tilgængeligt</span>
              </div>
            )}

            <div className="mt-4 flex gap-2 flex-wrap">
              {[...product.images].map((img, i) => (
                <Image
                  key={i}
                  onClick={() => imageSetter(img)}
                  src={img}
                  alt={`Product thumbnail ${i}`}
                  width={100}
                  height={100}
                  className="cursor-pointer rounded-md border border-gray-300 hover:scale-105 transition"
                />
              ))}
            </div>
          </div>
          <div className="col-2 max-w-[500px]">
            <h1 className="text-2xl text-black">{product.title}</h1>
            <p className="mt-4 text-gray-500">{product.description}</p>
            <div className="flex justify-between items-center mt-4">
              <p className="mt-4 px-2 bg-gradient-to-br from-purple-700/80 to-red-500/80 text-white w-fit rounded-full">
                {product.price} €
              </p>
              <p className="mt-4 px-2 w-fit rounded-full">Discount: {product.discountPercentage}%</p>
            </div>
            <Link
              className="flex mt-16 justify-center p-4 bg-gradient-to-br from-purple-700/80 to-red-500/80 rounded-full text-white hover:invert"
              href={"/checkout"}
            >
              Buy
            </Link>
            <p className="text-gray-500 p-2">{product.availabilityStatus}</p>

            {/* Togglebar for information */}
            <div className="mt-16 p-2 border border-gray-300 rounded-2xl">
              <h2
                onClick={toggleInfo}
                className=" bg-gray-50 items-center rounded-full px-2 cursor-pointer hover:bg-gray-100 transition"
              >
                <div className="flex justify-between items-center">
                Information:
                <FaArrowDown />
                
                </div>
              </h2>
              {infoOpen && (
                <>
                  <hr className="mb-4 mt-4"/>
                  <h2 className="px-2">Size:</h2>
                  <p className="bg-white px-2 text-gray-500">Bredde: {product.dimensions.width}</p>
                  <p className="bg-white px-2 text-gray-500">Højde: {product.dimensions.height}</p>
                  <p className="bg-white px-2 text-gray-500">Dybde: {product.dimensions.depth}</p>
                  <hr className="mb-4 mt-4"/>
                  <h2 className="px-2">Catogory:</h2>
                  <p className="bg-white px-2 text-gray-500">{product.tags[0]}</p>
                  <hr className="mb-4 mt-4"/>
                  <h2 className="px-2">Brand:</h2>
                  <p className="bg-white px-2 text-gray-500">{product.brand}</p>
                  <hr className="mb-4 mt-4"/>
                  <h2 className="px-2">Shipping Information:</h2>
                  <p className="bg-white px-2 text-gray-500">{product.shippingInformation}</p>
                </>
              )}
            </div>
          </div>

          <div className="col-span-full">
            <h1 className="flex justify-center text-2xl mb-4">Reviews</h1>
            <div className="rounded-lg flex flex-col gap-4 max-w-[850px] mx-auto">
              <div className="flex flex-col justify-between shadow-md bg-gray-50 px-16 py-4 items-center relative">
                <h3 className="text-gray-500">Overall Rating</h3>
         {/*        <p className="text-gray-400 font-thin absolute left-[50%] scale-200">|</p> */}
                <h3 className="text-4xl">{product.rating}</h3>
              </div>
                <div className="flex flex-col justify-between shadow-md bg-gray-50 px-16 py-4 items-center relative">
                  <h3 className="border-b">User: <span className="text-gray-500">{product.reviews[0].reviewerName}</span></h3>
                  <div className="flex justify-between items-center w-full mt-8">
                    <h3>Comment: <span className="text-gray-500">{product.reviews[0].comment}</span></h3>
                    <h3>Rating: <span className="text-gray-500">{product.reviews[0].rating}</span></h3>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}