import "./productCard.css";
import "../style.css";

function ProductCard({ product, companies }) {
	const mrp = Number(product.mrp);
	const rate = Number(product.wholesalePrice);
	const discount = ((mrp - rate) / mrp) * 100;
	return (
		<article className="prod-result__details">
			<img
				src="db/products/mangalam camphor/50 gm.png"
				alt="Mangalam product img"
				className="prod-result__img"
			/>
			<button className="prod-result__wishlist">
				<ion-icon
					name="heart-outline"
					className="prod-result__wishlist__icon"
				></ion-icon>
			</button>
			<h3 className="prod-result__company-name">{companies.companyName}</h3>
			<h4 className="prod-result__title">{product.name}</h4>

			<div className="prod-result__prices">
				<p className="prod-result__mrp">&#8377;{product.mrp}</p>
				<p className="prod-result__rate">&#x20B9;{product.wholesalePrice}</p>
				<p className="prod-result__discount">{discount}% off</p>
			</div>

			<form className="prod-result__quantity-form" name="select-quantity">
				<div className="prod-result__inputs">
					<div className="prod-result__quantity-box">
						<label
							for="prod__quantity"
							className="prod-result__quantity__label"
						>
							Quantity
						</label>
						<input
							id="prod-result__quantity"
							className="prod-result__quantity"
							name="prod-result__quantity"
							type="number"
							min="0"
							placeholder="eg. 30"
							required
						/>
					</div>

					<div className="prod-result__unit-box">
						<label
							for="select-unit"
							className="prod-result__select-unit__label"
						>
							Preferred unit
						</label>

						<select
							id="select-unit"
							className="prod-result__select-unit"
							name="select-unit"
							required
						>
							<option value="kilos">Kilos</option>
							<option value="pieces">Pieces</option>
							<option value="bundles">Bundle</option>
							<option value="box/bag">Box / Bag</option>
						</select>
					</div>
				</div>
				<button className="btn btn--form">Add to Cart</button>
			</form>
		</article>
	);
}

export default ProductCard;
