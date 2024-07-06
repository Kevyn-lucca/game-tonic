import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import CartProvider from "./ProductCartContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./ProductPage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/ProductPage/:id",
		element: <ProductPage />,
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
	estilizar o carrinho
	estilizar os carroseis de produtos
	criar paginas de empresas
	criar rotas a partir das tag (a logica de busca por item especifico pode ser a mesma de product page)
	criar o componente product page, um componente gerado a partir das rotas (o componente deve ser criado a partir do id do produto)
	criar um carrosel para screenshots do jogo para o componente "Product page"

*/
