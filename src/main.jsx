import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import CartProvider from "./ProductCartContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./ProductPage.jsx";
import Cart from "./Cart.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/ProductPage/:id",
		element: <ProductPage />,
	},
	{
		path: "/Cart",
		element: <Cart />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider>
			<CartProvider>
				<RouterProvider router={router} />
			</CartProvider>
		</ChakraProvider>
	</React.StrictMode>
);
/*
	Todos:
	Gravar um video mostrando as novas funções
	Estilzar a product page
	Criar o componete de slider time
	criar um footer
*/
