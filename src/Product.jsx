import { useState } from "react";
import { useCart } from "./ProductCartContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
					className=" bg-cover bg-center bg-no-repeat h-64 w-64"
				></div>
			</Link>
			<h1 className=" bg-black w-64 h-8 pt-1 truncate text-2xl text-center text-white top-14 transition-opacity">
				{name}
			</h1>
			{!noButton && (
				<div className=" absolute opacity-0 justify-items-center w-64  hover:origin-top hover:opacity-100 justify-self-center  transition-all top-0 flex flex-col justify-between">
					<button
						className={`${
							clicked ? "bg-red-500" : "bg-green-500"
						} p-2 text-xl border-b-4 border-solid text-black border-black`}
						onClick={CartHandler}
					>
						{clicked ? "Remove from cart" : "Add to cart"}
					</button>
				</div>
			)}
		</div>
	);
}

Product.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	noButton: PropTypes.bool.isRequired,
};
export default Product;
