import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="flex h-16 bg-black justify-between">
			<button className="text-white ml-4">
				<a href="https://rawg.io/">Rawg</a>
			</button>
			<div className="text-white flex text-center text-4xl">
				<h1 className=" mt-3">Tonic Games</h1>
				<img
					className="w-16 h-16"
					src="public/games-svgrepo-com.svg"
					alt="Game icon"
				/>
			</div>
			<button className="mr-4">
				<Link to={"/Cart"}>
					<img
						className="w-8 h-8"
						src="public/cart-shopping-svgrepo-com.svg"
						alt="Cart icon"
					/>
				</Link>
			</button>
		</div>
	);
}

export default Header;
