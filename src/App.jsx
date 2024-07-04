import GameNav from "./Nav";
import FetchRequest from "./FetchRequest";

function App() {
	const { games, loading, error } = FetchRequest("games", "6");

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

	return (
		<>
			<GameNav imgurl={NavImg} />
		</>
	);
}

export default App;
