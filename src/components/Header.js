import Search from "./header/Search";
import Subnav from "./header/Subnav";
import "../style.css";

function Header() {
	return (
		<header classNameName="header">
			<nav classNameName="nav">
				<img
					src="img/logo-white.png"
					alt="shop logo"
					classNameName="nav__logo"
				/>

				<Search></Search>
				<Subnav></Subnav>
			</nav>
		</header>
	);
}

export default Header;
