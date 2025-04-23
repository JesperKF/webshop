"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBackSharp } from "react-icons/io5";

export default function SingleProductClient({ product }) {
  const [image, setImage] = useState(product.images[0]);

  const imageSetter = (newImage) => {
    setImage(newImage);
  };

  return (
    <article className="grid grid-cols-[minmax(20px,0.2fr)_1fr_minmax(20px,0.2fr)]">
      <div className="col-2">
        <Link href="/" className="text-black mb-4 flex items-center cursor-pointer text-xl w-fit rounded-full p-2 mt-4 border border-gray-300">
        <IoArrowBackSharp />
          Tilbage
        </Link>

        {/*Opdeling*/}
        <div className="grid grid-cols-[auto_auto]">
            <div>
        {image ? (
          <Image
            src={image}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-xl w-full"
          />
        ) : (
          <div className="w-full bg-gray-800 h-[400px] rounded-lg flex items-center justify-center">
            <span className="text-white text-center p-8">Intet billede tilgængeligt</span>
          </div>
        )}

        <div className="mt-4 flex gap-2 flex-wrap">
          {[product.thumbnail, ...product.images].map((img, i) => (
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
        <div className="col-2">
            <h1 className="text-2xl">{product.title}</h1>
            <p className="mt-4 w-[400px] text-gray-500">{product.description}</p>
            <p className="mt-4">{product.price} €</p>
            <Link href={"/"}></Link>
        </div>
        <div className="col-span-full">
          <h3>{product.review}</h3>
        </div>
        </div>
      </div>
    </article>
  );
}