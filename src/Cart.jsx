import { useCart } from "../contexts/CartContext";
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
						<Product key={item.id} item={item} />
					))}
				</ul>
			)}
			<p>Total Amount: ${state.totalAmount}</p>
		</div>
	);
};

export default Cart;
