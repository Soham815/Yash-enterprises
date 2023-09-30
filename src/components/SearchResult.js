import Header from "./Header.js";
import Products from "./Products.js";

import "./productCard.css";
import "../style.css";

function SearchResult({ products }) {
  return (
    <section className="search-result">
      <Header></Header>
      <main>
        <div className="container">
          <div className="products">
            <Products products={products} />
          </div>
        </div>
      </main>
    </section>
  );
}

export default SearchResult;
