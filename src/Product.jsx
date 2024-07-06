import { useCart } from "./ProductCartContext";
import { Link } from "react-router-dom";

function Product(id, name, img) {
	const { dispatch } = useCart();

	const addToCart = () => {
		dispatch({ type: "ADD_ITEM", payload: id, name, img });
	};

	const removeFromCart = () => {
		dispatch({ type: "REMOVE_ITEM", payload: id });
	};
	console.log(id);

	return (
		<div className="mr-2">
			<Link to={"/ProductPage/" + id.id}> click test</Link>
			<div className="flex gap-2">
				<button onClick={addToCart}>Add</button>
				<button onClick={removeFromCart}>Remove</button>
			</div>
		</div>
	);
}

export default Product;
