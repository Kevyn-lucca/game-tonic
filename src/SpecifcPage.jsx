import Product from "./Product";
import FetchRequest from "./FetchRequest";
import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import "./middle.css";
import Header from "./Header";

function Spage() {
	const { Specif } = useParams();
	const { games, loading, error } = FetchRequest("games", "1", "", `${Specif}`);

	if (loading) {
		return (
			<div className="flex place-content-center bg-black h-screen">
				<Spinner marginTop="20rem" color="white" />
			</div>
		);
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	if (!games || !games.results || games.results.length === 0) {
		return <div>No games available</div>;
	}

	const RequestedGames = games.results.map((game) => ({
		RequestedImgs: game.background_image,
		RequestedName: game.name,
		RequestedPrice: game.percent,
		RequestedID: game.id,
	}));

	return (
		<div className=" bg-black flex flex-col place-content-center">
			<Header></Header>
			<h1 className=" text-white text-center text-4xl mb-2">{`${
				Specif !== "indie" ? "New Games" : "Best Prices"
			}`}</h1>
			<div className="grid grid-cols-5 gap-5 ml-8 auto-rows-max">
				{RequestedGames.map((game) => (
					<div className="default" key={game.RequestedID}>
						<Product
							key={game.RequestedID}
							id={game.RequestedID}
							name={game.RequestedName}
							img={game.RequestedImgs}
							alt={`${game.RequestedName} img`}
							noButton={false}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Spage;
