"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBackSharp } from "react-icons/io5";

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
          href="/"
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
                className="rounded-xl w-full max-w-[500px] h-[400px] object-cover object-center"
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
            <h1 className="text-2xl">{product.title}</h1>
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
            <div className="mt-16 p-2">
              <h2
                onClick={toggleInfo}
                className="mb-4 bg-gray-50 w-fit rounded-full py-1 px-2 cursor-pointer hover:bg-gray-100 transition"
              >
                Information:
              </h2>
              {infoOpen && (
                <>
                  <h2>Category:</h2>
                  <p className="bg-white my-2">{product.category}</p>
                  <h2>Shipping Information:</h2>
                  <p className="bg-white my-2">{product.shippingInformation}</p>
                </>
              )}
            </div>
          </div>

          <div className="col-span-full">
            <h1 className="flex justify-center text-2xl mb-4">Reviews</h1>
            <div className="shadow-md bg-gray-50 p-4 rounded-lg">
              <h3>Rating</h3>
              <h3>{product.rating}</h3>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}