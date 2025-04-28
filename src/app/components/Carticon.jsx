"use client";
import { IoCartOutline} from "react-icons/io5";
import useCartStore from "./useCartStore";

const CartIcon = () => {
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="relative">
      {cart.length > 0 ? (
        <IoCartOutline className="text-3xl text-white" />
      ) : (
        <IoCartOutline className="text-3xl text-white" />
      )}
      
      {cart.length > 0 && (
        <span
        className="absolute top-1 right-0 block h-2 w-2 rounded-full bg-red-600/80"
      ></span>
      
      )}
    </div>
  );
};

export default CartIcon;

