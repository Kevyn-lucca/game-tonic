import Carrosel from "./Carrosel";
import FetchRequest from "./FetchRequest";
import PropTypes from "prop-types";
import { Spinner } from "@chakra-ui/react";
function CarroselAdventure({ genre }) {
	const { games, loading, error } = FetchRequest("games", "1", "", `${genre}`);

	if (loading) {
		return (
			<div className=" flex place-content-center bg-black h-screen ">
				<Spinner marginTop="20rem" color="white" />
			</div>
		);
	}

	if (error) {
		<div className=" flex place-content-center bg-black h-screen ">
			<p className="text-4xl text-white font-bold">
				A Error has occurred please come back later{" "}
			</p>
		</div>;
	}

	if (!games || !games.results || games.results.length === 0) {
		return (
			<div className=" flex place-content-center bg-black h-screen ">
				<p className="text-4xl text-white font-bold">No Games Available</p>
			</div>
		);
	}

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
		<div className="bg-black h-96 text-white">
			<div className=" flex place-content-center">
				<h1 className=" text-2xl mt-4 mb-4">
					{genre === "role-playing-games-rpg"
						? "RPG"
						: genre.charAt(0).toUpperCase() + genre.slice(1)}
				</h1>
			</div>
			<div className=" flex place-content-center">
				<Carrosel
					TotalItens={12}
					TotalImgs={5}
					GameName={RequestedGames.map((game) => game.RequestedName)}
					GameUrl={RequestedGames.map((game) => game.RequestedImgs)}
					GameId={RequestedGames.map((game) => game.RequestedID)}
				/>
			</div>
		</div>
	);
}

CarroselAdventure.propTypes = {
	genre: PropTypes.string.isRequired,
};

export default CarroselAdventure;
