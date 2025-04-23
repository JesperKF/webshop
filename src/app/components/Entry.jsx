"use client";
import Link from "next/link";
import Image from "next/image";

const Entry = () => {
  return (
    <div className="relative w-full h-max">
      <Image
      className="w-full h-[80vh] object-cover absolute top-0 left-0 z-0 -scale-x-100"
      width={1000}
      height={1000}
      src="/images/aisle.jpg"
      alt="picture of a grocery store aisle"
      />
      <div className="absolute top-100 left-20 z-10 flex flex-col items-start gap-4">
        <div className="font-poppins text-white font-[100] text-6xl">
          Welcome to the Fakery
        </div>
        <Link
          className="font-poppins-200 w-fit border-2 text-white py-4 px-6 text-lg hover:bg-white hover:text-gray-600 hover:border-white  transition duration-300"
          href="/shop"
        >
          ENTER THE FAKERY
        </Link>
      </div>
    </div>
  );
};

export default Entry;

