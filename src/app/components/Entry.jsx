"use client";
import Link from "next/link";

const Entry = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="font-poppins font-[100] text-6xl">FAKERY</div>
      <Link
        className="font-poppins-200 bg-black border-x border-black text-white rounded-full py-4 px-6 text-lg hover:border-x hover:text-black hover:bg-[#D21E1F] transition duration-300"
        href="/shop"
      >
        ENTER THE FAKERY
      </Link>
    </div>
  );
};

export default Entry;
