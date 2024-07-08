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
	estilizar os produtos
	estilizar o carrinho
	estilizar os carroseis de produtos
	criar paginas de empresas
	criar rotas a partir das tag (a logica de busca por item especifico pode ser a mesma de product page)
	criar um carrosel para screenshots do jogo para o componente "Product page"

*/
