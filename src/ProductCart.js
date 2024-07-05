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
			const updatedTotalAmount = state.totalAmount + action.payload.price;
			return {
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			};
		case "REMOVE_ITEM":
			const filteredItems = state.items.filter(
				(item) => item.id !== action.payload.id
			);
			const reducedTotalAmount = state.totalAmount - action.payload.price;
			return {
				items: filteredItems,
				totalAmount: reducedTotalAmount,
			};
		default:
			return state;
	}
};

// Cria o contexto do carrinho
const CartContext = createContext();

// Componente provider do carrinho
export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	);
};

// Hook customizado para usar o contexto do carrinho
export const useCart = () => {
	return useContext(CartContext);
};
