import { useCart } from "./ProductCartContext";

function Product(id, name, img) {
	const { dispatch } = useCart();

	const addToCart = () => {
		dispatch({ type: "ADD_ITEM", payload: id, name, img });
	};

	const removeFromCart = () => {
		dispatch({ type: "REMOVE_ITEM", payload: id });
	};

	return (
		<div className="mr-2">
			<div className="flex gap-2">
				<button onClick={removeFromCart}>Test1</button>
				<button onClick={addToCart}>Test2</button>
			</div>
		</div>
	);
}

export default Product;
