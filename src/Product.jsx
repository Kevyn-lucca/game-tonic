import { useCart } from "./ProductCart";

function Product(id, name, img) {
	const { dispatch } = useCart();

	const addToCart = () => {
		dispatch({ type: "ADD_ITEM", payload: Product });
	};

	const removeFromCart = () => {
		dispatch({ type: "REMOVE_ITEM", payload: item });
	};

	return (
		<>
			<button onClick={removeFromCart}></button>
			<button onClick={addToCart}></button>;
		</>
	);
}

export default Product;
