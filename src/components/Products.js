import ProductCard from "./ProductCard";
import Companies from "./Companies";

const Products = (company) => {
	return (
		<>
			{company.map((product, index) => (
				<ProductCard product={product} key={index} />
			))}
		</>
	);
};

export default Products;
