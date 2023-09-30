import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ companies }) => {
	return (
		<>
			{companies.map((product, index) => (
				<ProductCard product={product} key={index} />
			))}
		</>
	);
};

export default Products;
