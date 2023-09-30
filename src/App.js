import { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductDB from "./components/ProductsDB";
import TopCompanies from "./components/TopComapnies";
import SearchResult from "./components/SearchResult";

import "./style.css";

// TODO : make a diff file with all the products.
// TODO: map product object values properly in ProductCard.js
// this will be in a diff file;

function App() {
	// search state
	const [searchText, setSearchText] = useState("");
	const [companies, setProducts] = useState(ProductDB);

	useEffect(() => {
		//this code will run when user will type something in search bar.

		if (searchText) {
			//write logic here to filter products.

			setProducts((companies) =>
				companies.products.filter((product) =>
					product.name
						.toLocaleLowerCase()
						.includes(searchText.toLocaleLowerCase())
				)
			);
		}
	}, [searchText]);

	return (
		<main>
			<Header setSearchText={setSearchText} />

			{searchText ? (
				<SearchResult companies={companies} />
			) : (
				<div className="container container--orange">
					<Hero />
					<Features />
					<TopCompanies />
				</div>
			)}
		</main>
	);
}

export default App;
