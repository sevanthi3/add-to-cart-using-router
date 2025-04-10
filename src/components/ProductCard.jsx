import { useCart } from "../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { cart, dispatch } = useCart();
  const inCart = cart.find((item) => item.id === product.id);

  return (
    <div className="border rounded-lg p-4 shadow">
      <img src={product.image} alt={product.title} className="h-40 mx-auto mb-2" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p>{product.description.substring(0, 60)}...</p>
      <p className="font-bold">${product.price}</p>
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
        onClick={() =>
          inCart
            ? dispatch({ type: "REMOVE", payload: product.id })
            : dispatch({ type: "ADD", payload: product })
        }
      >
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;

