"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBasket } from "lucide-react";

const Header = () => {
    const pathname = usePathname();

    return (
        <div className="left-27 top-10 flex justify-between items-center gap-10 text-xl text-white bg-gradient-to-br from-purple-700/80 to-red-500/80 rounded-lg p-2 z-10 shadow-md">
            <div className="flex gap-6">
                <Link href="/" className={`py-2 px-4 rounded-lg transition duration-300 ${pathname === "/" ? "bg-red-950/30" : "hover:bg-red-950/30"}`}>Home</Link>
                <Link href="/shop" className={`py-2 px-4 rounded-lg transition duration-300 ${pathname === "/shop" ? "bg-red-950/30" : "hover:bg-red-950/30"}`}>Products</Link>
                <Link className="py-2 px-4 rounded-full hover:bg-red-950/30 transition duration-200" href="/shop">Account</Link>
                <Link className="py-2 px-4 rounded-full hover:bg-red-950/30 transition duration-200" href="/shop">Contact</Link>
            </div>
            <Link href="/cart" className={`py-2 px-4 rounded-lg transition duration-300 scale-150 ${pathname === "/cart"}`}>
                <ShoppingBasket className="text-white" size={24} />
            </Link>
        </div>
    );
}

export default Header;
