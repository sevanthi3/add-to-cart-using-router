import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discounted = total * 0.9;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <h2 className="font-bold">{item.title}</h2>
              <p>${item.price} x {item.quantity}</p>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => dispatch({ type: "DECREMENT", payload: item.id })} className="bg-gray-300 px-2">-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch({ type: "INCREMENT", payload: item.id })} className="bg-gray-300 px-2">+</button>
              <button
                onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-xl">
        <p>Total: ${total.toFixed(2)}</p>
        <p>After 10% Discount: ${discounted.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
