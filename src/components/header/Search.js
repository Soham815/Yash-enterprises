import "../../style.css";
function Search() {
	return (
		<form action="#" className="search">
			<input type="text" className="search__input" placeholder="Search items" />
			<button className="search__button">
				<ion-icon className="search__icon" name="search-outline"></ion-icon>
			</button>
		</form>
	);
}

export default Search;
