import { useParams } from "react-router-dom";
import { useCart } from "./ProductCartContext";
import { useState } from "react";
import { Spinner } from "@chakra-ui/react";
import FetchRequest from "./FetchRequest";
import { Link } from "react-router-dom";

function stripHTML(html) {
	if (!html) return "";
	return html.replace(/<\/?[^>]+(>|$)/g, "");
}

function ProductPage() {
	const { id } = useParams();
	const { dispatch } = useCart();
	const [clicked, setClicked] = useState(false);

	// Function to fetch product details
	const { games, loading, error } = FetchRequest("games", "1", `/${id}`);
	if (loading) {
		return (
			<div className=" flex place-content-center bg-black h-screen ">
				<Spinner marginTop="20rem" color="white" />
			</div>
		);
	}
	if (error) {
		return <div>Error: {error.message}</div>;
	}

	if (!games) {
		return <div>No game data available</div>;
	}

	const name = games.name;
	const img = games.background_image;
	const Developer =
		games.developers && games.developers.length > 0
			? games.developers.map((dev) => dev.name).join(", ")
			: "Unknown Developer";
	function CartHandler() {
		if (!clicked) {
			setClicked(true);
			dispatch({ type: "ADD_ITEM", payload: { id, name, img } });
		} else {
			setClicked(false);
			dispatch({ type: "REMOVE_ITEM", payload: id });
		}
	}

	return (
		<div className="bg-black h-screen text-white">
			<div className="flex place-content-center">
				<h1 className="text-4xl p-4">{name}</h1>
				<Link to={"/"}>
					<button className="ml-64 mt-5">Return</button>
				</Link>
			</div>
			<div className="flex justify-around">
				<img src={img} className="w-2/3 h-2/3" alt={name + " image"} />
				<div className="mr-24 mt-24">
					<button
						className={`p-2 ${
							clicked ? "bg-red-500" : "bg-green-500"
						} rounded w-48`}
						onClick={CartHandler}
					>
						{clicked ? "Remove from cart" : "Add to cart"}
					</button>
					<ul className="flex flex-col mt-4 place-content-end">
						<li>
							<p className="text-2xl font-bold">Genres</p>
							<div>
								<p className="text-xl">
									{games.genres
										? games.genres.map((genre) => genre.name).join(", ")
										: "N/A"}
								</p>
							</div>
						</li>
						<li>
							<p className="text-2xl font-bold">Launch Year</p>
							<div>
								<p className="text-xl">
									{games.released
										? new Date(games.released).getFullYear()
										: "N/A"}
								</p>
							</div>
						</li>
						<li>
							<p className="text-2xl font-bold">Developer</p>
							<div>
								<p className="text-xl">{Developer}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>

			<div className=" bg-black  flex place-content-center p-6 text-xl ">
				<p>{stripHTML(games.description)}</p>
			</div>
		</div>
	);
}

export default ProductPage;
