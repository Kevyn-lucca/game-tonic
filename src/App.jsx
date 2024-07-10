import GameNav from "./Nav";
import FetchRequest from "./FetchRequest";
import Header from "./Header";
import { Spinner } from "@chakra-ui/react";
import CarroselAdventure from "./CarroselAdventure";
import Footer from "./footer";
function App() {
	const { games, loading, error } = FetchRequest("games", "1");

	if (loading) {
		return (
			<div className=" flex place-content-center bg-black h-screen ">
				<Spinner marginTop="20rem" color="white" />
			</div>
		);
	}

	if (error) {
		return (
			<div className=" flex place-content-center bg-black h-screen ">
				<p className="text-4xl mt-40 text-white font-bold">
					A Error has occurred please come back later{" "}
				</p>
			</div>
		);
	}

	if (!games || !games.results || games.results.length === 0) {
		return;
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

	return (
		<>
			<Header></Header>
			<GameNav
				imgurl={NavImg}
				GameImg={RequestedGames.map((game) => game.RequestedImgs)}
				GameId={RequestedGames.map((game) => game.RequestedID)}
				GameName={RequestedGames.map((game) => game.RequestedName)}
			/>
			<CarroselAdventure genre={"adventure"} />
			<CarroselAdventure genre={"role-playing-games-rpg"} />
			<CarroselAdventure genre={"action"} />
			<CarroselAdventure genre={"sports"} />
			<Footer></Footer>
		</>
	);
}

export default App;
