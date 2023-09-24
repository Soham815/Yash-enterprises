import "../../style.css";
function Subnav() {
	return (
		<div className="nav__subnav">
			<div className="icon">
				<figure className="icon__box">
					<ion-icon name="heart-outline" className="icon__icon"></ion-icon>
				</figure>
				<figure className="icon__box">
					<ion-icon name="cart-outline" className="icon__icon"></ion-icon>
				</figure>
				<figure className="icon__box">
					<ion-icon name="albums-outline" className="icon__icon"></ion-icon>
				</figure>
			</div>
			<div className="nav__seperation">&nbsp;</div>
			<img
				src="img/profile-pic.jpeg"
				alt="profile-pic"
				className="nav__profile-pic"
			/>
		</div>
	);
}

export default Subnav;
