import { useParams } from "react-router-dom";
import { useCart } from "./ProductCartContext";
import { useState } from "react";
import FetchRequest from "./FetchRequest";
function stripHTML(html) {
	if (!html) return "";
	return html.replace(/<\/?[^>]+(>|$)/g, "");
}

function ProductPage() {
	const { id } = useParams();
	const { dispatch } = useCart();
	const [clicked, setCLicked] = useState(false);

	// função para buscar os detalhes do produto
	const { games, loading, error } = FetchRequest("games", "1", `${"/" + id}`);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	const name = games.name;
	const img = games.background_image;

	function CartHandler() {
		if (clicked == false) {
			setCLicked(true);
			dispatch({ type: "ADD_ITEM", payload: id, name, img });
		} else {
			setCLicked(false);
			dispatch({ type: "REMOVE_ITEM", payload: id });
		}
	}

	return (
		<div>
			<h1>{name}</h1>
			<div className="flex">
				<img src={img} alt={img + "img"} />
				<button className="" onClick={CartHandler}>
					{clicked ? "Remove from cart" : "Add to cart"}
				</button>
			</div>

			<p>{stripHTML(games.description)}</p>
		</div>
	);
}

export default ProductPage;
