import { useState } from "react";
import { useCart } from "./ProductCartContext";
import { Link } from "react-router-dom";

function Product({ id, name, img, noButton }) {
	const { dispatch, state } = useCart();
	const [clicked, setClicked] = useState(
		state.items.some((item) => item.id === id)
	);

	function CartHandler() {
		if (!clicked) {
			setClicked(true);
			dispatch({ type: "ADD_ITEM", payload: { id, name, img } });
		} else {
			setClicked(false);
			dispatch({ type: "REMOVE_ITEM", payload: { id } });
		}
	}

	return (
		<div>
			<Link to={`/ProductPage/${id}`}>
				<div
					style={{ backgroundImage: `url(${img})` }}
					className=" ml-2 mr-2 bg-cover bg-center bg-no-repeat h-64 w-64"
				></div>
			</Link>
			{!noButton && (
				<div className=" ml-2 absolute opacity-0 justify-items-center w-64  hover:origin-top hover:opacity-100 justify-self-center  transition-all  top-16 flex flex-col justify-between">
					<button
						className="bg-green-500 p-2 text-xl border-b-4 border-solid text-black border-black"
						onClick={CartHandler}
					>
						{clicked ? "Remove from cart" : "Add to cart"}
					</button>
				</div>
			)}
		</div>
	);
}

export default Product;
