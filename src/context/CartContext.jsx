import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.some(
        (item) => item.id.toString() === product.id.toString()
      );
      if (exists) {
        return prev;
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const isFav = prev.some((p) => p.id === product.id);
      if (isFav) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const favoritesCount = favorites.length;

  return (
    <CartContext.Provider
      value={{
        cart,
        favorites,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleFavorite,
        totalPrice,
        cartCount,
        favoritesCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
