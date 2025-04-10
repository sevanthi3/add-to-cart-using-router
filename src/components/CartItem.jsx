import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between border p-4 rounded-lg shadow-sm mb-4 bg-white">
      <img src={item.image} alt={item.title} className="w-20 h-20 object-contain mb-2 md:mb-0" />
      <div className="flex-1 md:ml-4">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-600">${item.price}</p>
        <p className="text-sm text-gray-500">{item.description.slice(0, 60)}...</p>
      </div>
      <div className="flex items-center gap-2 mt-2 md:mt-0">
        <button
          onClick={() => decreaseQty(item.id)}
          className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
        >
          -
        </button>
        <span className="font-semibold">{item.quantity}</span>
        <button
          onClick={() => increaseQty(item.id)}
          className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>
      <div className="text-right ml-4">
        <p className="text-sm text-gray-600">
          Total: ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 text-sm hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
