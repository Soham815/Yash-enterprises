import "../style.css";

function TopCompanies() {
	return (
		<section className="top-companies">
			<article className="top-company top-company--left">
				<div className="top-company__img">
					<img src="img/suruchi.png" alt="suruchi-company" />
				</div>
				<div className="top-company__text-box">
					<h3 className="top-company__heading">SURUCHI</h3>
					<p className="top-company__text">
						Suruchi gives you variety of products rich in flavours and spices.
						Being used for a long time to make your meals more delicious.
					</p>

					<a href="#" className="btn top-company__btn">
						Add Flavor to Cart
					</a>
				</div>
			</article>

			<article className="top-company top-company--right">
				<div className="top-company__text-box">
					<h3 className="top-company__heading">RAMBANDHU</h3>
					<p className="top-company__text">
						Think about adding spices that make your food nice. We've got sauces
						and seasonings that are flavoursome. No stress, just tasty meals.
					</p>

					<a href="#" className="btn top-company__btn">
						Add Flavor to Cart
					</a>
				</div>
				<div className="top-company__img">
					<img src="img/rambandhu.png" alt="rambandhu-company" />
				</div>
			</article>

			<article className="top-company top-company--left">
				<div className="top-company__img">
					<img src="img/vithoba.png" alt="vithoba-company" />
				</div>
				<div className="top-company__text-box">
					<h3 className="top-company__heading">VITHOBA</h3>
					<p className="top-company__text">
						Vithoba takes resposibility of your oral hygiene. Our products
						contains all the goodness of ayurvedic herbs and has no side-effects
						to your health.
					</p>

					<a href="#" className="btn top-company__btn">
						Add Flavor to Cart
					</a>
				</div>
			</article>
		</section>
	);
}

export default TopCompanies;
