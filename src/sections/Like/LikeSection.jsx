
import React from "react";
import { useCart } from "../../context/CartContext.jsx";

const LikeSection = () => {
  const { favorites } = useCart();

  if (favorites.length === 0) {
    return (
      <div className="py-16 text-center font-sans">
        <p className="text-gray-500">No favorite items yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1211px] mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 font-sans">My Favorites</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {favorites.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h3 className="font-bold text-sm mb-1">{product.name}</h3>
            <p className="text-green-600 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikeSection;