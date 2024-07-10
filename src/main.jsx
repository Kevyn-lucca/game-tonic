import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import CartProvider from "./ProductCartContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./ProductPage.jsx";
import Cart from "./Cart.jsx";
import Spage from "./SpecifcPage.jsx";

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
	{
		path: "/SpecificPage/:Specif",
		element: <Spage />,
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

	criar um footer
*/
