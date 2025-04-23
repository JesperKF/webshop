"use client";

const Cart = () => {
    return(
        <div>
        <h2 className="text-lg text-black font-semibold mb-4">Cart</h2>
        <ul className="text-gray-800 mb-4">
          <li className="p-2 bg-gray-100/70 mb-1">Product 1 - € 0.99</li>
          <li className="p-2 bg-gray-100/70">Product 2 - € 5.99</li>
        </ul>
        <div className="flex-grow"></div>
        <p className="font-semibold text-black">Total: € 6.98</p>
        <button className="mt-4 w-full bg-gradient-to-br from-purple-700/80 to-red-500/80 text-white hover:bg-black font-semibold py-2 px-4 rounded">
          Go to checkout
        </button>
        </div>
    )
}

export default Cart;