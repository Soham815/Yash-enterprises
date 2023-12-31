import HeroGallery from "./hero/HeroGallery";
import "../style.css";

function Hero() {
	return (
		<section className="section-hero">
			<div className="hero__content">
				<h1 className="heading-primary">
					Elevating convienience Redefining affordability
				</h1>
				<p className="hero__description">
					Designed to cater every aspect of your life, indulge in ease of
					instant mixes or elevate your meals with our food supplements
					including spices, pickels, papad and our flavourful food items. From
					healthcare, groomimg to cleaning supplies that bring freshness we have
					it all.
				</p>

				<div className="hero__delivery">
					{/* <?xml version="1.0" encoding="UTF-8"?> */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						id="Layer_1"
						data-name="Layer 1"
						viewBox="0 0 24 24"
						className="hero__delivery__icon"
					>
						<path d="m18.5,5h-3c-1.379,0-2.5,1.122-2.5,2.5v3.5h-1.382l-1.257-2.515c-.433-.865-1.106-1.609-1.972-2.042-2.699-1.352-5.389.585-5.389,3.16l.057,4.058c.017,1.21.658,2.325,1.695,2.949l2.764,1.664c.3.181.484.506.484.856v3.869c0,.553.448,1,1,1s1-.447,1-1v-3.868c0-1.053-.552-2.028-1.454-2.571l-.546-.329v-7.687c.186.17.342.375.459.61l1.369,2.739c.339.678,1.032,1.106,1.789,1.106h6.882c1.379,0,2.5-1.122,2.5-2.5v-3c0-1.378-1.121-2.5-2.5-2.5ZM4,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm2,17.5v3c0,.553-.448,1-1,1s-1-.447-1-1v-3c0-.553.448-1,1-1s1,.447,1,1Z" />
					</svg>

					<p className="hero__delivery__text">
						Experience seamless shopping with free delivery as we bring quality
						and savings right to your door step.
					</p>
				</div>
			</div>
			<HeroGallery></HeroGallery>
		</section>
	);
}

export default Hero;
