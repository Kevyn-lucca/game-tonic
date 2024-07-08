import GameNav from "./Nav";
import FetchRequest from "./FetchRequest";
import { Link } from "react-router-dom";

function App() {
	const { games, loading, error } = FetchRequest("games", "1");

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	if (!games || !games.results || games.results.length === 0) {
		return <div>No games available</div>;
	}

	const NavImg =
		games.results[Math.floor(Math.random() * games.results.length)]
			.background_image;

	const RequestedGames =
		games && games.results
			? games.results.map((game) => ({
					RequestedImgs: game.background_image,
					RequestedName: game.name,
					RequestedPrice: game.percent,
					RequestedID: game.id,
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  }))
			: [];

	RequestedGames.map((game) => game.RequestedPrice);

	return (
		<>
			<button>
				<Link to={"/Cart"}> szsdas </Link>
			</button>
			<GameNav
				imgurl={NavImg}
				GamePrice={RequestedGames.map((game) => game.RequestedPrice)}
				GameImg={RequestedGames.map((game) => game.RequestedImgs)}
				GameId={RequestedGames.map((game) => game.RequestedID)}
				GameName={RequestedGames.map((game) => game.RequestedName)}
			/>
		</>
	);
}

export default App;
