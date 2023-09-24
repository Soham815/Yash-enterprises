import Header from "./Header.js";
import ProductCard from "./ProductCard.js";
import "./productCard.css";
import "../style.css";

function SearchResult() {
	return (
		<section className="search-result">
			<Header></Header>
			<main>
				<div className="container">
					<div className="products">
						<ProductCard></ProductCard>
					</div>
				</div>
			</main>
		</section>
	);
}

export default SearchResult;
