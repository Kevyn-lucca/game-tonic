import { useParams } from "react-router-dom";

import FetchRequest from "./FetchRequest";
function stripHTML(html) {
	if (!html) return "";
	return html.replace(/<\/?[^>]+(>|$)/g, "");
}

function ProductPage() {
	const { id } = useParams();

	// função para buscar os detalhes do produto
	const { games, loading, error } = FetchRequest("games", "1", `${"/" + id}`);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div>
			<h1>{games.name}</h1>
			<div>{stripHTML(games.description)}</div>
		</div>
	);
}

export default ProductPage;
