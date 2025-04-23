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
      <div className="absolute left-20 top-10 flex gap-10 text-xl text-white bg-gradient-to-br from-purple-700/80 to-red-500/80 rounded-full p-2 z-10">
            <Link className="py-2 px-4 rounded-full bg-red-950/30 hover:bg-red-950/30  transition duration-300" href="/">Home</Link>
            <Link className="py-2 px-4 rounded-full hover:bg-red-950/30 transition duration-200" href="/shop">Products</Link>
            <Link className="py-2 px-4 rounded-full hover:bg-red-950/30 transition duration-200" href="/shop">Account</Link>
            <Link className="py-2 px-4 rounded-full hover:bg-red-950/30 transition duration-200" href="/shop">Contact</Link>
        </div>
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

