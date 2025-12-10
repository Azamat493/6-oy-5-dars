import React from "react";
import { useCart } from "../../context/CartContext.jsx";

const CartSection = () => {
  const { cart, totalPrice, updateQuantity, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="py-16 text-center font-sans">
        <p className="text-gray-500">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1211px] mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 font-sans">Shopping Cart</h1>
      <div className="space-y-6">
        {cart.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-4 border rounded">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 sm:w-20 sm:h-20 object-cover rounded"
            />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-green-600 font-bold">${item.price}</p>
            </div>


            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition"
              >
                -
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, +1)}
                className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition"
              >
                +
              </button>
            </div>

            <div className="font-bold text-center sm:text-left">
              ${(item.price * item.quantity).toFixed(2)}
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center sm:text-right">
        <h2 className="text-xl font-bold font-sans">
          Total: <span className="text-green-600">${totalPrice.toFixed(2)}</span>
        </h2>
        <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSection;
