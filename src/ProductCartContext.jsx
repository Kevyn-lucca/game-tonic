/* eslint-disable no-case-declarations */
// src/contexts/CartContext.js
import { createContext, useReducer, useContext } from "react";

// Estado inicial do carrinho
const initialState = {
	items: [],
	totalAmount: 0,
};

// Função reducer para gerenciar as ações do carrinho
const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			const updatedItems = [...state.items, action.payload];

			return {
				items: updatedItems,
			};
		case "REMOVE_ITEM":
			const filteredItems = state.items.filter(
				(item) => item.id !== action.payload.id
			);
			return {
				items: filteredItems,
			};
		default:
			return state;
	}
};

// Cria o contexto do carrinho
const CartContext = createContext();

// Componente provider do carrinho
const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	return useContext(CartContext);
};

// Hook customizado para usar o contexto do carrinho

export default CartProvider;
