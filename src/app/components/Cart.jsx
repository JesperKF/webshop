"use client";

import useCartStore from "./useCartStore";
import { FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div>
      <h2 className="text-lg text-black font-semibold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="text-gray-800 mb-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="relative flex justify-between p-2 bg-gray-100/70 mb-1"
              >
                <span className="max-w-[75%] break-words">
                  {item.title} - € {item.price}
                </span>
                <FaRegTrashAlt
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:scale-110 cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                />
              </li>
            ))}
          </ul>
          <p className="font-semibold text-black">Total: € {total}</p>
        </>
      )}
      <Link href="/checkout">
        <button className="mt-4 w-full bg-gradient-to-br from-purple-700/80 to-red-500/80 text-white hover:bg-black font-semibold py-2 px-4 rounded">
          Go to checkout
        </button>
      </Link>
    </div>
  );
};

export default Cart;
