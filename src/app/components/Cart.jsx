"use client";

import useCartStore from "./useCartStore";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);

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
              <li key={item.id} className="p-2 bg-gray-100/70 mb-1">
                {item.title} - € {item.price}
              </li>
            ))}
          </ul>
          <p className="font-semibold text-black">Total: € {total}</p>
        </>
      )}
      <button className="mt-4 w-full bg-gradient-to-br from-purple-700/80 to-red-500/80 text-white hover:bg-black font-semibold py-2 px-4 rounded">
        Go to checkout
      </button>
    </div>
  );
};

export default Cart;
