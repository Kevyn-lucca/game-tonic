import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="flex h-16 bg-black justify-between">
			<button className="text-white ml-4">
				<a href="https://rawg.io/">Rawg</a>
			</button>
			<Link to={"/"}>
				<div className="text-white flex text-center text-4xl">
					<h1 className=" mt-3">Refresh Games</h1>
					<svg
						width="64px"
						height="64px"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						fill="#ffffff"
					>
						<g id="SVGRepo_bgCarrier" strokeWidth="0" />

						<g
							id="SVGRepo_tracerCarrier"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>

						<g id="SVGRepo_iconCarrier">
							<rect x="0" fill="none" width="20" height="20" />
							<g>
								<path d="M15.9 5.5C15.3 4.5 14.2 4 13 4H7c-1.2 0-2.3.5-2.9 1.5-2.3 3.5-2.8 8.8-1.2 9.9 1.6 1.1 5.2-3.7 7.1-3.7s5.4 4.8 7.1 3.7c1.6-1.1 1.1-6.4-1.2-9.9zM8 9H7v1H6V9H5V8h1V7h1v1h1v1zm5.4.5c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zm1.9-2c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9z" />{" "}
							</g>
						</g>
					</svg>
				</div>
			</Link>
			<button className="mr-4">
				<Link to={"/Cart"}>
					<svg
						width="34px"
						height="34px"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
							stroke="#ffffff"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</Link>
			</button>
		</div>
	);
}

export default Header;
