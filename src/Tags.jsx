import FetchRequest from "./FetchRequest";

function TagGraber() {
	const { games, loading, error } = FetchRequest("tags");

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	const requestedTags =
		games && games.results
			? games.results.map((game) => ({
					requestedName: game.name,
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  }))
			: [];

	return (
		<div>
			{requestedTags.map((tag, index) => (
				<p key={index}>{tag.requestedName}</p>
			))}
		</div>
	);
}

export default TagGraber;
