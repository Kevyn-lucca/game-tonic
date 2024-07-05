import { useCart } from "./ProductCartContext";
import Product from "./Product";

const Cart = () => {
	const { state } = useCart();

	return (
		<div>
			<h2>Your Cart</h2>
			{state.items.length === 0 ? (
				<p>No items in cart.</p>
			) : (
				<ul>
					{state.items.map((item) => (
						<Product
							key={item.id}
							id={item.id}
							name={item.name}
							img={item.img}
						/>
					))}
				</ul>
			)}
		</div>
	);
};

export default Cart;
