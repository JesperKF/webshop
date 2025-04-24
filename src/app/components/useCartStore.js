import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        // If the item already exists, increase its quantity
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If it's a new item, add with quantity 1
        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
        };
      }
    }),

  removeFromCart: (productId) =>
    set((state) => {
      return {
        cart: state.cart
          .map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0), // Remove if quantity reaches 0
      };
    }),
}));

export default useCartStore;
