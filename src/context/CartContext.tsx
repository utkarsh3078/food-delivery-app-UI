import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import type { Restaurant } from "../data/restaurants";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartContextValue = {
  addToCart: (restaurant: Pick<Restaurant, "id" | "name" | "price">) => void;
  cartCount: number;
  cartItems: CartItem[];
  clearCart: () => void;
  total: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const value = useMemo<CartContextValue>(() => {
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const total = cartItems.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );

    return {
      addToCart: (restaurant) => {
        setCartItems((items) => {
          const existingItem = items.find((item) => item.id === restaurant.id);

          if (existingItem) {
            return items.map((item) =>
              item.id === restaurant.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          }

          return [
            ...items,
            {
              id: restaurant.id,
              name: restaurant.name,
              price: restaurant.price,
              quantity: 1,
            },
          ];
        });
      },
      cartCount,
      cartItems,
      clearCart: () => setCartItems([]),
      total,
    };
  }, [cartItems]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};
