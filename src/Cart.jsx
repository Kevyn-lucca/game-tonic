import { useCart } from "./ProductCartContext";
import Product from "./Product";

const Cart = () => {
	const { state } = useCart();

	return (
		<div className="p-6">
			<h2 className="text-2xl font-bold mb-4">Your Cart</h2>
			{state.items.length === 0 ? (
				<p className="text-gray-500">No items in cart.</p>
			) : (
				<div className="flex flex-wrap gap-4">
					{state.items.map((item) => (
						<Product
							key={item.id}
							id={item.id}
							name={item.name}
							img={item.img}
							noButton={true}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Cart;
