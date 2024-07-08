import axios from "axios";

import { useState, useEffect } from "react";

const FetchRequest = (toFetch, page, id) => {
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (toFetch) {
			const fetchGames = async () => {
				setLoading(true);
				try {
					const response = await axios.get(
						`https://api.rawg.io/api/${toFetch}${id ? id : ""}`,
						{
							params: {
								metacritic: 30,
								page: page,
								key: "baeef12d9a4f4125a566fff7936a6381",
							},
						}
					);
					setGames(response.data);
				} catch (error) {
					setError(error);
				} finally {
					setLoading(false);
				}
			};
			fetchGames();
		}
	}, [toFetch, page, id]);

	return { games, loading, error };
};

export default FetchRequest;
