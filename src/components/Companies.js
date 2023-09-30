import React from "react";
import Products from "./Products";

const Companies = ({ companies }) => {
	return (
		<>
			{companies.map((company, index) => (
				<Products company={company} key={index} />
			))}
		</>
	);
};

export default Companies;
