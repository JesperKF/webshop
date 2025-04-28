"use client";
import useCartStore from "./useCartStore";
import { FaRegTrashAlt } from "react-icons/fa";

const Bigcart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const total = cart
  .reduce((acc, item) => acc + item.price * item.quantity, 0)
  .toFixed(2);

  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-300 mb-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-3 px-8 hover:shadow-lg transition-shadow duration-300 hover:bg-gray-100"
              >
                <div>
                  <p className="font-semibold">{item.title} (x{item.quantity})</p>
                  <p className="text-gray-700 text-sm">€ {(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <FaRegTrashAlt
                  className="text-red-500 cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => removeFromCart(item.id)}
                />
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center border-t border-gray-300 pt-3">
            <p className="font-semibold text-lg">Total:</p>
            <p className="text-lg">€ {total}</p>
          </div>
          <button className="mt-4 w-full bg-gradient-to-br from-purple-700/80 to-red-500/80 text-white font-semibold py-2 px-4 rounded hover:bg-black transition-colors">
            Proceed to payment
          </button>
        </>
      )}
    </div>
  );
};

export default Bigcart;
